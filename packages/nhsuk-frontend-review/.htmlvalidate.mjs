import { defineConfig } from 'html-validate'

/**
 * HTML validation config
 *
 * {@link https://html-validate.org/rules/}
 *
 * @type {ConfigData}
 */
export default defineConfig({
  extends: ['html-validate:recommended', 'html-validate:document'],
  rules: {
    // Allow for multiple buttons in the same form to have the same name
    'form-dup-name': ['error', { shared: ['radio', 'checkbox', 'submit'] }],

    // Allow headings to begin from <h2> etc rather than <h1>
    'heading-level': 'off',

    // Allow autocapitalize attribute on input type="password"
    'input-attributes': 'off',

    // Allow long page titles with appended "- NHS.UK frontend"
    'long-title': 'off',

    // Allow implicit type="button" (without attribute):
    'no-implicit-button-type': 'off',

    // Allow inline styles for testing purposes
    'no-inline-style': [
      'error',
      { allowedProperties: ['background-image', 'margin-bottom'] }
    ],

    // More hassle than it's worth 👾
    'no-trailing-whitespace': 'off',

    // Allow use of roles where there are native elements that would give
    // use that role automatically, e.g. <section> not <div role="region">
    'prefer-native-element': ['error', { include: ['div'] }],

    // Allow optional subresource integrity (SRI)
    'require-sri': 'off',

    // Allow for duplicate landmarks in component example listings
    'unique-landmark': 'off',

    // Allow optional submit buttons in <form> wrapped examples
    'wcag/h32': 'off',

    // HTML Validate is opinionated about IDs beginning with a letter and only
    // only containing letters, numbers, underscores and dashes – which is
    // more restrictive than the spec allows.
    //
    // Relax the rule to allow anything that is valid according to the spec
    'valid-id': ['error', { relaxed: true }]
  },

  /**
   * Configure HTML element metadata
   *
   * @satisfies {(string | MetaDataTable)[]}
   */
  elements: [
    'html5',
    {
      // Allow button component <a role="button">
      a: {
        attributes: {
          role: { enum: ['button'] }
        }
      },

      // Allow error summary and notification banner component
      // <div role="alert"> etc
      div: {
        attributes: {
          role: { enum: ['alert', 'region'] }
        }
      },

      // Allow date input component <fieldset role="group">
      fieldset: {
        attributes: {
          role: { enum: ['group'] }
        }
      },

      // Allow footer component <footer role="contentinfo">
      footer: {
        attributes: {
          role: { enum: ['contentinfo'] }
        }
      },

      // Allow header component <header role="banner">
      header: {
        attributes: {
          role: { enum: ['banner'] }
        }
      },

      // Allow contents list and pagination component <nav role="navigation">
      nav: {
        attributes: {
          role: { enum: ['navigation'] }
        }
      },

      // Allow table component (responsive) <table role="table">
      table: {
        attributes: {
          role: { enum: ['table'] }
        }
      },

      // Allow table component (responsive) <td role="cell">
      td: {
        attributes: {
          role: { enum: ['cell'] }
        }
      },

      // Allow table component (responsive) <th role="columnheader"> etc
      th: {
        attributes: {
          role: { enum: ['columnheader', 'rowheader'] }
        }
      },

      // Allow table component (responsive) <thead role="rowgroup">
      thead: {
        attributes: {
          role: { enum: ['rowgroup'] }
        }
      },

      // Allow table component (responsive) <tr role="row">
      tr: {
        attributes: {
          role: { enum: ['row'] }
        }
      },

      // Allow do and don't list component <ul role="list">
      ul: {
        attributes: {
          role: { enum: ['list'] }
        }
      }
    }
  ]
})

/**
 * @import { ConfigData, MetaDataTable } from 'html-validate'
 */
