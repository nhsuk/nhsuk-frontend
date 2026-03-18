/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  'default': {
    context: {
      text: 'This is a plain text code block'
    }
  },
  'button': {
    context: {
      text: 'This is a plain text code block',
      button: true
    },
    variants: [
      {
        description: 'with primary',
        context: {
          copyButtonClassList: ['nhsuk-button--small']
        }
      },
      {
        description: 'with secondary'
      },
      {
        description: 'with secondary, solid background',
        context: {
          background: 'body',
          copyButtonClassList: [
            'nhsuk-button--secondary-solid',
            'nhsuk-button--small'
          ]
        },
        options: {
          layout: 'background-white'
        }
      }
    ]
  },
  'without border': {
    context: {
      text: 'This is a plain text code block',
      border: false
    },
    options: {
      layout: 'background-blue'
    }
  },
  'with custom HTML': {
    context: {
      html: '<p>This is an HTML code block.</p>'
    }
  },
  'with custom HTML and button': {
    context: {
      html: '<p>This is an HTML code block.</p>',
      button: true
    }
  },
  'with custom HTML (escaped) and button': {
    context: {
      button: true
    },
    callBlock: '&lt;p&gt;This is a code block.&lt;/p&gt;'
  },
  'with scroll overflow': {
    context: {
      text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!"
    }
  },
  'with scroll overflow and button': {
    context: {
      text: "Supercalifragilisticexpialidocious! Even though the sound of it is something quite atrocious, if you say it loud enough, you'll always sound precocious!",
      button: true
    }
  },
  'with translations': {
    context: {
      html: '<p>Bloc cod HTML yw hwn.</p>',
      button: true,
      copyButtonText: 'Copïo cod',
      copiedButtonText: "Cod wedi'i gopïo",
      copiedAnnouncementText: "Cod wedi'i gopïo i'r clipfwrdd"
    }
  }
}

/**
 * Nunjucks macro option examples
 * (with typed keys)
 *
 * @type {Record<keyof typeof fixtures, MacroExample>}
 */
export const examples = fixtures

/**
 * @import { MacroExample } from '#lib'
 */
