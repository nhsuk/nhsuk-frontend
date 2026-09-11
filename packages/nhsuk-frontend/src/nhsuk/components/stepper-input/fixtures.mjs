/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example"
    }
  },
  "disabled": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      disabled: true
    },
    screenshot: true
  },
  "disabled with enabled buttons": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      disabled: true,
      stepDownButton: {
        disabled: false
      },
      stepUpButton: {
        disabled: false
      }
    }
  },
  "disabled buttons": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      stepDownButton: {
        disabled: true
      },
      stepUpButton: {
        disabled: true
      }
    }
  },
  "large": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      large: true
    },
    screenshot: true
  },
  "with hint": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      hint: {
        text: "Include additional and repeat images"
      },
      name: "example"
    },
    screenshot: true
  },
  "with hint and value": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      hint: {
        text: "Include additional and repeat images"
      },
      name: "example",
      value: "2"
    },
    screenshot: true
  },
  "with error only": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      errorMessage: true,
      name: "example",
      min: 0,
      max: 5
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      errorMessage: {
        text: "Enter how many images were taken"
      },
      name: "example",
      min: 0,
      max: 5
    }
  },
  "with error message and value": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      errorMessage: {
        text: "Images taken must be 5 or fewer"
      },
      name: "example",
      value: "10",
      min: 0,
      max: 5
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      hint: "Include additional and repeat images",
      errorMessage: "Enter how many images were taken",
      name: "example",
      min: 0,
      max: 5
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      hint: {
        text: "Include additional and repeat images"
      },
      errorMessage: {
        text: "Enter how many images were taken"
      },
      name: "example",
      min: 0,
      max: 5
    },
    screenshot: true
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "How many images were taken?",
        size: "l"
      },
      errorMessage: {
        text: "Enter how many images were taken"
      },
      name: "example",
      min: 0,
      max: 5
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "How many images were taken?",
        size: "l"
      },
      hint: {
        text: "Include additional and repeat images"
      },
      errorMessage: {
        text: "Enter how many images were taken"
      },
      name: "example",
      min: 0,
      max: 5
    }
  },
  "with button text": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      stepDownButton: {
        text: "Decrease"
      },
      stepUpButton: {
        text: "Increase"
      }
    }
  },
  "with button text only": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      stepDownButton: {
        icon: false,
        text: "Down"
      },
      stepUpButton: {
        icon: false,
        text: "Up"
      }
    }
  },
  "with prefix": {
    context: {
      label: {
        heading: "Cost in pounds and pence"
      },
      name: "example",
      min: 0,
      step: 0.01,
      width: 5,
      prefix: {
        text: "£"
      }
    },
    screenshot: true
  },
  "with suffix": {
    context: {
      label: {
        heading: "Weight in kilograms"
      },
      name: "example",
      min: 0,
      width: 3,
      suffix: {
        text: "kg"
      },
      inputmode: "decimal"
    },
    screenshot: true
  },
  "with value": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      value: "2"
    }
  },
  "min": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      id: "with-min",
      name: "example",
      min: 0
    },
    variants: [
      {
        description: "with minus 5",
        context: {
          min: -5
        }
      },
      {
        description: "with minus 1",
        context: {
          min: -1
        }
      },
      {
        description: "with 0",
        context: {
          min: 0
        }
      },
      {
        description: "with 1",
        context: {
          min: 1
        }
      },
      {
        description: "with 5",
        context: {
          min: 5
        }
      }
    ]
  },
  "min and value": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      id: "with-min-value",
      name: "example",
      value: "0",
      min: 0
    },
    variants: [
      {
        description: "with minus 5",
        context: {
          value: "-5",
          min: -5
        }
      },
      {
        description: "with minus 1",
        context: {
          value: "-1",
          min: -1
        }
      },
      {
        description: "with 0",
        context: {
          value: "0",
          min: 0
        }
      },
      {
        description: "with 1",
        context: {
          value: "1",
          min: 1
        }
      },
      {
        description: "with 5",
        context: {
          value: "5",
          min: 5
        }
      }
    ]
  },
  "max": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      id: "with-max",
      name: "example",
      max: 5
    },
    variants: [
      {
        description: "with minus 5",
        context: {
          max: -5
        }
      },
      {
        description: "with minus 1",
        context: {
          max: -1
        }
      },
      {
        description: "with 0",
        context: {
          max: 0
        }
      },
      {
        description: "with 1",
        context: {
          max: 1
        }
      },
      {
        description: "with 5",
        context: {
          max: 5
        }
      }
    ]
  },
  "max and value": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      id: "with-max",
      name: "example",
      value: "5",
      max: 5
    },
    variants: [
      {
        description: "with minus 5",
        context: {
          value: "-1",
          max: -5
        }
      },
      {
        description: "with minus 1",
        context: {
          value: "-1",
          max: -1
        }
      },
      {
        description: "with 0",
        context: {
          value: "0",
          max: 0
        }
      },
      {
        description: "with 1",
        context: {
          value: "1",
          max: 1
        }
      },
      {
        description: "with 5",
        context: {
          value: "5",
          max: 5
        }
      }
    ]
  },
  "step": {
    context: {
      label: {
        heading: "Height in metres"
      },
      id: "with-step",
      name: "example",
      step: 0.1,
      width: 3,
      inputmode: "decimal"
    },
    variants: [
      {
        description: "with 0.1",
        context: {
          step: 0.1
        }
      },
      {
        description: "with 0.01",
        context: {
          step: 0.01
        }
      }
    ]
  },
  "step and value": {
    context: {
      label: {
        heading: "Height in metres"
      },
      id: "with-step",
      name: "example",
      value: "1.60",
      step: 0.01,
      width: 3,
      inputmode: "decimal"
    },
    variants: [
      {
        description: "with 0.1",
        context: {
          value: "1.6",
          step: 0.1
        }
      },
      {
        description: "with 0.01",
        context: {
          value: "1.60",
          step: 0.01
        }
      }
    ]
  },
  "without buttons": {
    context: {
      label: {
        heading: "How many images were taken?",
        size: "l"
      },
      name: "example",
      stepDownButton: false,
      stepUpButton: false
    }
  },
  "without heading": {
    context: {
      label: {
        text: "How many images were taken?"
      },
      id: "without-heading",
      name: "example"
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
