/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      name: 'example'
    }
  },
  'with hint': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        text: 'It probably has some letters, numbers and maybe even some symbols in it'
      },
      id: 'with-hint-text',
      name: 'example'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'with error message': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      errorMessage: {
        text: 'Enter a password'
      },
      id: 'with-error-message',
      name: 'example'
    }
  },
  'with hint and error': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      hint: {
        text: 'It probably has some letters, numbers and maybe even some symbols in it'
      },
      errorMessage: {
        text: 'Enter a password'
      },
      id: 'with-error-message',
      name: 'example'
    },
    screenshot: {
      viewports: ['watch', 'mobile', 'tablet', 'desktop']
    }
  },
  'without page heading': {
    context: {
      label: {
        text: 'Password'
      },
      id: 'without-heading',
      name: 'example'
    }
  },
  'with width class': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      id: 'width-class',
      name: 'example',
      classes: 'nhsuk-input--width-10'
    }
  },
  'with autocomplete attribute': {
    context: {
      label: {
        text: 'Password',
        size: 'l',
        isPageHeading: true
      },
      id: 'new-password',
      name: 'example',
      autocomplete: 'new-password'
    }
  },
  'with translations': {
    context: {
      label: {
        text: 'Cyfrinair',
        size: 'l',
        isPageHeading: true
      },
      id: 'password-translated',
      name: 'example',
      showPasswordText: 'Datguddia',
      hidePasswordText: 'Cuddio',
      showPasswordAriaLabelText: 'Datgelu cyfrinair',
      hidePasswordAriaLabelText: 'Cuddio cyfrinair',
      passwordShownAnnouncementText: 'Mae eich cyfrinair yn weladwy.',
      passwordHiddenAnnouncementText: "Mae eich cyfrinair wedi'i guddio."
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
