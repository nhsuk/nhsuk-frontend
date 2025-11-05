/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
export const examples = {
  'default': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example'
    },
    screenshot: true
  },
  'with values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      values: {
        day: '5',
        month: '8',
        year: '2024'
      }
    }
  },
  'day and month': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your birthday?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 5 12'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        }
      ]
    }
  },
  'day and month (empty item)': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your birthday?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 5 12'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        false
      ]
    }
  },
  'month and year': {
    context: {
      fieldset: {
        legend: {
          text: 'When did you start your job?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      id: 'example',
      items: [
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'month and year (empty item)': {
    context: {
      fieldset: {
        legend: {
          text: 'When did you start your job?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      id: 'example',
      items: [
        false,
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'month and year with values': {
    context: {
      fieldset: {
        legend: {
          text: 'When did you start your job?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 11 2023'
      },
      id: 'example',
      values: {
        month: '8',
        year: '2024'
      },
      items: [
        {
          name: 'month',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'legend': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'custom-size'
    },
    variants: [
      {
        description: 'with size S',
        context: {
          fieldset: {
            legend: {
              size: 's'
            }
          }
        }
      },
      {
        description: 'with size M',
        context: {
          fieldset: {
            legend: {
              size: 'm'
            }
          }
        }
      },
      {
        description: 'with size L',
        context: {
          fieldset: {
            legend: {
              size: 'l'
            }
          }
        }
      },
      {
        description: 'with size XL',
        context: {
          fieldset: {
            legend: {
              size: 'xl'
            }
          }
        }
      }
    ]
  },
  'without page heading': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example'
    }
  },
  'with autocomplete values': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-day'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2',
          autocomplete: 'bday-month'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4',
          autocomplete: 'bday-year'
        }
      ]
    }
  },
  'with custom name prefix': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      id: 'example',
      namePrefix: 'example'
    }
  },
  'with errors only': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      errorMessage: {
        text: 'Enter your date of birth'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    }
  },
  'with errors and hint': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Enter your date of birth'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    },
    screenshot: true
  },
  'with error on day input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a day'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'month',
          value: '3',
          classes: 'nhsuk-input--width-2'
        },
        {
          name: 'year',
          value: '1980',
          classes: 'nhsuk-input--width-4'
        }
      ]
    }
  },
  'with error on month input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a month'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          value: '31'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2 nhsuk-input--error'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4',
          value: '1980'
        }
      ]
    }
  },
  'with error on year input': {
    context: {
      fieldset: {
        legend: {
          text: 'What is your date of birth?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Date of birth must include a year'
      },
      id: 'example',
      items: [
        {
          name: 'day',
          classes: 'nhsuk-input--width-2',
          value: '31'
        },
        {
          name: 'month',
          classes: 'nhsuk-input--width-2',
          value: '3'
        },
        {
          name: 'year',
          classes: 'nhsuk-input--width-4 nhsuk-input--error'
        }
      ]
    }
  }
}

/**
 * @import { MacroExample } from '@nhsuk/frontend-lib/components.mjs'
 */
