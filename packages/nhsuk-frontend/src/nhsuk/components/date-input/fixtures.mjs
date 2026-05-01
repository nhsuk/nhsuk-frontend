/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
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
  'with translations': {
    context: {
      fieldset: {
        legend: {
          text: 'Beth yw eich dyddiad geni?',
          size: 'l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Er enghraifft, 31 3 1980'
      },
      id: 'example',
      day: {
        label: 'Dydd'
      },
      month: {
        label: 'Mis'
      },
      year: {
        label: 'Blwyddyn'
      }
    }
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
      year: false
    }
  },
  'day and month (using items)': {
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
          width: 2
        },
        {
          name: 'month',
          width: 2
        }
      ]
    }
  },
  'day and month (with empty item)': {
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
          width: 2
        },
        {
          name: 'month',
          width: 2
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
      day: false
    }
  },
  'month and year (using items)': {
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
          width: 2
        },
        {
          name: 'year',
          width: 4
        }
      ]
    }
  },
  'month and year (with empty item)': {
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
          width: 2
        },
        {
          name: 'year',
          width: 4
        }
      ]
    }
  },
  'month and year with pre-defined fields': {
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
      day: false,
      month: {
        value: '11'
      },
      year: {
        value: '2023'
      }
    }
  },
  'month and year with pre-defined fields overriding values': {
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
      day: false,
      month: {
        value: '11'
      },
      year: {
        value: '2023'
      },
      values: {
        month: '8',
        year: '2024'
      }
    }
  },
  'month and year with pre-defined values': {
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
      day: false,
      values: {
        month: '8',
        year: '2024'
      }
    }
  },
  'legend': {
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
      day: {
        autocomplete: 'bday-day'
      },
      month: {
        autocomplete: 'bday-month'
      },
      year: {
        autocomplete: 'bday-year'
      }
    }
  },
  'with autocomplete values (using items)': {
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
          width: 2,
          autocomplete: 'bday-day'
        },
        {
          name: 'month',
          width: 2,
          autocomplete: 'bday-month'
        },
        {
          name: 'year',
          width: 4,
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
      day: {
        error: true
      },
      month: {
        error: true
      },
      year: {
        error: true
      }
    }
  },
  'with errors only (using items)': {
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
          width: 2,
          error: true
        },
        {
          name: 'month',
          width: 2,
          error: true
        },
        {
          name: 'year',
          width: 4,
          error: true
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
      day: {
        error: true
      },
      month: {
        error: true
      },
      year: {
        error: true
      }
    },
    screenshot: true
  },
  'with errors and hint (using items)': {
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
          width: 2,
          error: true
        },
        {
          name: 'month',
          width: 2,
          error: true
        },
        {
          name: 'year',
          width: 4,
          error: true
        }
      ]
    }
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
      day: {
        error: true
      },
      month: {
        value: '3'
      },
      year: {
        value: '1980'
      }
    }
  },
  'with error on day input (using items)': {
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
          width: 2,
          error: true
        },
        {
          name: 'month',
          value: '3',
          width: 2
        },
        {
          name: 'year',
          value: '1980',
          width: 4
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
          width: 2,
          value: '31'
        },
        {
          name: 'month',
          width: 2,
          error: true
        },
        {
          name: 'year',
          width: 4,
          value: '1980'
        }
      ]
    }
  },
  'with error on month input (using items)': {
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
      day: {
        value: '31'
      },
      month: {
        error: true
      },
      year: {
        value: '1980'
      }
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
      day: {
        value: '31'
      },
      month: {
        value: '3'
      },
      year: {
        error: true
      }
    }
  },
  'with error on year input (using items)': {
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
          width: 2,
          value: '31'
        },
        {
          name: 'month',
          width: 2,
          value: '3'
        },
        {
          name: 'year',
          width: 4,
          error: true
        }
      ]
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
