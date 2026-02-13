import { createHash } from 'node:crypto'

import { nunjucks } from '#lib'

describe('Template', () => {
  /**
   * @param {string} [contents]
   */
  function replacePageWith(contents = '') {
    document.open()
    document.write(contents)
    document.close()
  }

  describe('with default nunjucks configuration', () => {
    it('should not have any empty space before the doctype', () => {
      const html = nunjucks.renderTemplate('nhsuk/template.njk')
      expect(html.charAt(0)).toBe('<')
    })
  })

  describe('<html>', () => {
    it('defaults to lang="en"', () => {
      replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))
      expect(document.documentElement).toHaveAttribute('lang', 'en')
    })

    it('can have a custom lang set using htmlLang', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          context: {
            htmlLang: 'zu'
          }
        })
      )

      expect(document.documentElement).toHaveAttribute('lang', 'zu')
    })
  })

  describe('<head>', () => {
    it('can have custom social media icons specified using the headIcons block', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          blocks: {
            headIcons: '<link rel="nhsuk-icon" href="/images/ytf-icon.png">'
          }
        })
      )

      // Build a list of the rel values of all links with a rel ending 'icon'
      const icons = Array.from(
        document.querySelectorAll('link[rel$="icon"]')
      ).map((link) => link.getAttribute('rel'))

      expect(icons).toEqual(['nhsuk-icon'])
    })

    it('can have additional content added to the <head> using the head block', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          blocks: {
            head: '<meta property="foo" content="bar">'
          }
        })
      )

      const $meta = document.querySelector('head meta[property="foo"]')

      expect($meta).toHaveAttribute('content', 'bar')
    })

    it('uses a default assets path of /assets', () => {
      replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))

      const $icon = document.querySelector('link[rel="icon"][sizes="48x48"]')
      expect($icon).toHaveAttribute('href', '/assets/images/favicon.ico')
    })

    it('can have the assets path overridden using assetPath', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          context: {
            assetPath: '/whatever'
          }
        })
      )

      const $icon = document.querySelector('link[rel="icon"][sizes="48x48"]')
      expect($icon).toHaveAttribute('href', '/whatever/images/favicon.ico')
    })

    describe('favicons', () => {
      beforeAll(() => {
        replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))
      })

      it('has an .ico icon', () => {
        const $icon = document.querySelector('link[rel="icon"][href$=".ico"]')

        expect($icon).toHaveAttribute('sizes', '48x48')
        expect($icon).toHaveAttribute('href', '/assets/images/favicon.ico')
      })

      it('has an .svg icon', () => {
        const $icon = document.querySelector('link[rel="icon"][href$=".svg"]')

        expect($icon).toHaveAttribute('sizes', 'any')
        expect($icon).toHaveAttribute('href', '/assets/images/favicon.svg')
      })

      it('has a mask-icon', () => {
        const $icon = document.querySelector('link[rel="mask-icon"]')

        expect($icon).toHaveAttribute('color', '#005eb8')
        expect($icon).toHaveAttribute(
          'href',
          '/assets/images/nhsuk-icon-mask.svg'
        )
      })

      it('has an apple-touch-icon', () => {
        const $icon = document.querySelector('link[rel="apple-touch-icon"]')

        expect($icon).toHaveAttribute(
          'href',
          '/assets/images/nhsuk-icon-180.png'
        )
      })

      it('has a linked web manifest file', () => {
        const $icon = document.querySelector('link[rel="manifest"]')

        expect($icon).toHaveAttribute('href', '/assets/manifest.json')
      })
    })

    describe('opengraph image', () => {
      it('is not included if neither assetUrl nor opengraphImageUrl are set', () => {
        replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))

        const $ogImage = document.querySelector('meta[property="og:image"]')

        expect($ogImage).toBeNull()
      })

      it('is included using default path and filename if assetUrl is set', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            context: {
              assetUrl: 'https://foo.com/my-assets'
            }
          })
        )

        const $ogImage = document.querySelector('meta[property="og:image"]')

        expect($ogImage).toHaveAttribute(
          'content',
          'https://foo.com/my-assets/images/nhsuk-opengraph-image.png'
        )
      })

      it('is included if opengraphImageUrl is set', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            context: {
              opengraphImageUrl: 'https://foo.com/custom/og-image.png'
            }
          })
        )

        const $ogImage = document.querySelector('meta[property="og:image"]')

        expect($ogImage).toHaveAttribute(
          'content',
          'https://foo.com/custom/og-image.png'
        )
      })
    })

    describe('<meta name="theme-color">', () => {
      it('has a default content of #005eb8', () => {
        replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))
        const $themeColor = document.querySelector('meta[name="theme-color"]')

        expect($themeColor).toHaveAttribute('content', '#005eb8')
      })

      it('can be overridden using themeColor', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            context: {
              themeColor: '#ff69b4'
            }
          })
        )
        const $themeColor = document.querySelector('meta[name="theme-color"]')

        expect($themeColor).toHaveAttribute('content', '#ff69b4')
      })
    })

    // These tests use a select that specifically looks for a <title> within the <head> of the page
    // to prevent them from matching <title> elements within embedded SVGs.
    describe('<title>', () => {
      describe('by default', () => {
        let $title

        beforeAll(() => {
          replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))
          $title = document.querySelector('head > title')
        })

        it("is 'NHS'", () => {
          expect($title).toHaveTextContent('NHS')
        })

        it('does not have a lang attribute', () => {
          expect($title).not.toHaveAttribute('lang')
        })
      })

      it('can be overridden using the pageTitle block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              pageTitle: 'Foo'
            }
          })
        )
        const $title = document.querySelector('head > title')

        expect($title).toHaveTextContent('Foo')
      })
    })
  })

  describe('<body>', () => {
    it('can have custom classes added using bodyClasses', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          context: {
            bodyClasses: 'custom-body-class'
          }
        })
      )

      expect(document.body).toHaveClass('custom-body-class')
    })

    it('can have custom attributes added using bodyAttributes', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          context: {
            bodyAttributes: { 'data-foo': 'bar' }
          }
        })
      )

      expect(document.body).toHaveAttribute('data-foo', 'bar')
    })

    it('can have additional content added after the opening tag using bodyStart block', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          blocks: {
            bodyStart: '<div>bodyStart</div>'
          }
        })
      )

      expect(
        document.querySelector('body > div:first-of-type')
      ).toHaveTextContent('bodyStart')
    })

    it('can have additional content added before the closing tag using bodyEnd block', () => {
      replacePageWith(
        nunjucks.renderTemplate('nhsuk/template.njk', {
          blocks: {
            bodyEnd: '<div>bodyEnd</div>'
          }
        })
      )

      expect(
        document.querySelector('body > div:last-of-type')
      ).toHaveTextContent('bodyEnd')
    })

    describe('inline script that adds "js-enabled" and "nhsuk-frontend-supported" classes', () => {
      it('should match the expected hash', () => {
        replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))

        // Create a base64 encoded hash of the contents of the script tag
        const hash = createHash('sha256')
          .update(document.querySelector('body > script').innerHTML)
          .digest('base64')

        // A change to the inline script would be a breaking change due to
        // Content Security Policy (CSP) `script-src` using the hash value
        expect(`sha256-${hash}`).toBe(
          'sha256-tDOvXJi1PXbg0CWjLCCYSNHRXtps26K4JXkE3M6u/c0='
        )
      })
    })

    describe('skip link', () => {
      it('can be overridden using the skipLink block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              skipLink: '<div class="my-skip-link">skipLink</div>'
            }
          })
        )

        expect(document.querySelector('.my-skip-link')).toBeInTheDocument()
        expect(document.querySelector('.nhsuk-skip-link')).toBeNull()
      })
    })

    describe('header', () => {
      it('can be overridden using the header block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              header: '<div class="my-header">header</div>'
            }
          })
        )

        expect(document.querySelector('.my-header')).toBeInTheDocument()
        expect(document.querySelector('.nhsuk-header')).toBeNull()
      })
    })

    describe('<main>', () => {
      it('can have custom classes added using mainClasses', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            context: {
              mainClasses: 'custom-main-class'
            }
          })
        )

        expect(document.querySelector('main')).toHaveClass('custom-main-class')
      })

      it('does not have a lang attribute by default', () => {
        replacePageWith(nunjucks.renderTemplate('nhsuk/template.njk'))

        expect(document.querySelector('main')).not.toHaveAttribute('lang')
      })

      it('can be overridden using the main block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              main: '<main class="my-main">header</main>'
            }
          })
        )

        expect(document.querySelectorAll('main')).toHaveLength(1)
        expect(document.querySelector('main')).toHaveClass('my-main')
      })

      it('can have content injected before it using the beforeContent block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              beforeContent: '<div class="before-content">beforeContent</div>'
            }
          })
        )

        const $beforeContent = document.querySelector('.before-content')
        const $main = document.querySelector('main')

        expect($beforeContent.nextElementSibling).toBe($main)
      })

      it('can have content specified using the content block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              content: 'Foo'
            }
          })
        )

        expect(document.querySelector('main')).toHaveTextContent('Foo')
      })
    })

    describe('footer', () => {
      it('can be overridden using the footer block', () => {
        replacePageWith(
          nunjucks.renderTemplate('nhsuk/template.njk', {
            blocks: {
              footer: '<div class="my-footer">footer</div>'
            }
          })
        )

        expect(document.querySelector('.my-footer')).toBeInTheDocument()
        expect(document.querySelector('.nhsuk-footer')).toBeNull()
      })
    })
  })
})
