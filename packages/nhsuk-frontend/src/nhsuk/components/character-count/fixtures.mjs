/**
 * Nunjucks macro option examples
 *
 * @satisfies {{ [example: string]: MacroExample }}
 */
const fixtures = {
  "default": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      name: "example",
      maxlength: 200
    },
    screenshot: {
      states: ["focus"],
      selector: ".nhsuk-textarea"
    }
  },
  "disabled": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      name: "example",
      maxlength: 200,
      disabled: true
    },
    screenshot: true
  },
  "with hint": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      id: "with-hint",
      name: "example",
      maxlength: 200
    }
  },
  "with error only": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      errorMessage: true,
      id: "with-error-only",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with error message": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      errorMessage: {
        text: "Job description must be 350 characters or less"
      },
      id: "with-error-message",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with error message and hint": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      errorMessage: {
        text: "Job description must be 350 characters or less"
      },
      id: "with-error-message",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    },
    screenshot: {
      states: ["focus"],
      selector: ".nhsuk-textarea"
    }
  },
  "with error message and hint as strings": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      hint: "Do not include personal information like your name, date of birth or NHS number",
      errorMessage: "Job description must be 350 characters or less",
      id: "with-error-message",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with error message, without heading": {
    context: {
      label: {
        text: "Enter a job description"
      },
      errorMessage: {
        text: "Job description must be 350 characters or less"
      },
      id: "with-error-message",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with error message and hint, without heading": {
    context: {
      label: {
        text: "Enter a job description"
      },
      hint: {
        text: "Do not include personal information like your name, date of birth or NHS number"
      },
      errorMessage: {
        text: "Job description must be 350 characters or less"
      },
      id: "with-error-message",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with value": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-value",
      name: "example",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
    }
  },
  "with custom rows": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      id: "custom-rows",
      name: "example",
      maxlength: 350,
      rows: 15
    }
  },
  "label": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      id: "custom-size",
      name: "example",
      maxlength: 200
    },
    variants: [
      {
        description: "with size S",
        context: {
          label: {
            size: "s"
          }
        }
      },
      {
        description: "with size M",
        context: {
          label: {
            size: "m"
          }
        }
      },
      {
        description: "with size L",
        context: {
          label: {
            size: "l"
          }
        }
      },
      {
        description: "with size XL",
        context: {
          label: {
            size: "xl"
          }
        }
      },
      {
        description: "with id attribute on",
        context: {
          label: {
            id: "custom-id"
          }
        },
        options: {
          hidden: true
        }
      }
    ]
  },
  "without heading": {
    context: {
      label: "Tell us more about what happened",
      id: "without-heading",
      name: "example",
      maxlength: 150
    }
  },
  "with maxlength attribute": {
    context: {
      label: {
        text: "Enter a job description"
      },
      id: "maxlength-attribute",
      name: "example",
      maxlength: 11,
      attributes: {
        maxlength: 11
      }
    },
    options: {
      hidden: true
    }
  },
  "with count type 'length'": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-length-count-type",
      name: "example",
      countType: "length",
      maxlength: 200
    }
  },
  "with count type 'characters'": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-characters-count-type",
      name: "example",
      countType: "characters",
      maxlength: 200
    }
  },
  "with count type 'characters' and error message": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      errorMessage: {
        text: "Job description must be 200 characters or less"
      },
      id: "with-characters-count-type-error-message",
      name: "example",
      countType: "characters",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with count type 'characters' and value": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-characters-count-type-value",
      name: "example",
      countType: "characters",
      maxlength: 350,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
    }
  },
  "with count type 'characters' and threshold": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-characters-count-type-threshold",
      name: "example",
      countType: "characters",
      value:
        "Type another letter into this field after this message to see the threshold feature",
      maxlength: 112,
      threshold: 75
    }
  },
  "with count type 'words'": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-words-count-type",
      name: "example",
      countType: "words",
      maxlength: 50
    },
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "with count type 'words' and error message": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      errorMessage: {
        text: "Job description must be 40 words or less"
      },
      id: "with-words-count-type-error-message",
      name: "example",
      countType: "words",
      maxlength: 51,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format."
    }
  },
  "with count type 'words' and threshold": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-words-count-type-threshold",
      name: "example",
      countType: "words",
      value:
        "Type another word into this field after this message to see the threshold feature",
      maxlength: 51,
      threshold: 30
    }
  },
  "with count type 'words' and value": {
    context: {
      label: {
        heading: "Enter a job description",
        size: "l"
      },
      id: "with-words-count-type-value",
      name: "example",
      countType: "words",
      maxlength: 51,
      value:
        "👩🏻‍🚀 A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels."
    }
  },
  "with threshold": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      id: "with-threshold",
      name: "example",
      value:
        "Type another letter into this field after this message to see the threshold feature",
      maxlength: 112,
      threshold: 75
    },
    screenshot: {
      viewports: ["tablet"]
    }
  },
  "without maxlength": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      textareaDescriptionText: "No more than %{count} characters",
      id: "no-maximum-description",
      name: "example",
      value: "This textarea has no maximum character or word count.",
      rows: 8
    },
    options: {
      hidden: true,
      throwOnError: false
    }
  },
  "without maxlength or textarea description": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      id: "no-maximum",
      name: "example",
      value: "This textarea has no maximum character or word count.",
      rows: 8
    },
    options: {
      hidden: true,
      throwOnError: false
    }
  },
  "with translations": {
    context: {
      label: {
        heading: "Allwch chi roi mwy o fanylion?",
        size: "l"
      },
      hint: {
        text: "Peidiwch â chynnwys gwybodaeth bersonol, fel eich enw, dyddiad geni na rhif y GIG"
      },
      id: "with-translations",
      name: "example",
      maxlength: 200,
      textareaDescriptionText: "Gallwch ddefnyddio hyd at %{count} nod",
      charactersUnderLimitText: {
        one: "Mae gennych %{count} nod ar ôl",
        two: "Mae gennych %{count} nod ar ôl",
        few: "Mae gennych %{count} nod ar ôl",
        many: "Mae gennych %{count} nod ar ôl",
        other: "Mae gennych %{count} nod ar ôl"
      },
      charactersAtLimitText: "Mae gennych 0 nod ar ôl",
      charactersOverLimitText: {
        one: "Mae gennych %{count} nod yn ormod",
        two: "Mae gennych %{count} nod yn ormod",
        few: "Mae gennych %{count} nod yn ormod",
        many: "Mae gennych %{count} nod yn ormod",
        other: "Mae gennych chi %{count} nod yn ormod"
      }
    }
  },
  "to configure in JavaScript": {
    context: {
      label: {
        heading: "Can you provide more detail?",
        size: "l"
      },
      id: "to-configure-in-javascript",
      name: "example"
    },
    options: {
      hidden: true,
      throwOnError: false
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
