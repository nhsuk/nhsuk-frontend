import { closestAttributeValue } from '../../common/closest-attribute-value.mjs';
import '../../common/configuration/index.mjs';
import { formatErrorMessage } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError, ConfigError } from '../../errors/index.mjs';
import { I18n } from '../../i18n.mjs';
import { validateConfig } from '../../common/configuration/validate-config.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_2ev0ciskjp() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/character-count/character-count.mjs";
  var hash = "7740ae010130bb200aa737f5e1cb2be5d561a086";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/character-count/character-count.mjs",
    statementMap: {
      "0": {
        start: {
          line: 27,
          column: 23
        },
        end: {
          line: 27,
          column: 27
        }
      },
      "1": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "2": {
        start: {
          line: 33,
          column: 17
        },
        end: {
          line: 33,
          column: 21
        }
      },
      "3": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 24
        }
      },
      "4": {
        start: {
          line: 42,
          column: 22
        },
        end: {
          line: 42,
          column: 75
        }
      },
      "5": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 55,
          column: 5
        }
      },
      "6": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 54,
          column: 8
        }
      },
      "7": {
        start: {
          line: 58,
          column: 19
        },
        end: {
          line: 58,
          column: 69
        }
      },
      "8": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 61,
          column: 5
        }
      },
      "9": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 74
        }
      },
      "10": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 19
        }
      },
      "11": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 75,
          column: 6
        }
      },
      "12": {
        start: {
          line: 78,
          column: 4
        },
        end: {
          line: 78,
          column: 54
        }
      },
      "13": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 30
        }
      },
      "14": {
        start: {
          line: 82,
          column: 34
        },
        end: {
          line: 82,
          column: 61
        }
      },
      "15": {
        start: {
          line: 83,
          column: 33
        },
        end: {
          line: 83,
          column: 79
        }
      },
      "16": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 90,
          column: 5
        }
      },
      "17": {
        start: {
          line: 85,
          column: 6
        },
        end: {
          line: 89,
          column: 8
        }
      },
      "18": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 93,
          column: 73
        }
      },
      "19": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 102,
          column: 5
        }
      },
      "20": {
        start: {
          line: 99,
          column: 6
        },
        end: {
          line: 101,
          column: 8
        }
      },
      "21": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 106,
          column: 74
        }
      },
      "22": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 66
        }
      },
      "23": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 70
        }
      },
      "24": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 115,
          column: 5
        }
      },
      "25": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "26": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 125,
          column: 61
        }
      },
      "27": {
        start: {
          line: 126,
          column: 4
        },
        end: {
          line: 126,
          column: 65
        }
      },
      "28": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 72
        }
      },
      "29": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 69
        }
      },
      "30": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 129,
          column: 72
        }
      },
      "31": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 134,
          column: 5
        }
      },
      "32": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 65
        }
      },
      "33": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 47
        }
      },
      "34": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 142,
          column: 27
        }
      },
      "35": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 72
        }
      },
      "36": {
        start: {
          line: 147,
          column: 46
        },
        end: {
          line: 147,
          column: 71
        }
      },
      "37": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 152,
          column: 29
        }
      },
      "38": {
        start: {
          line: 166,
          column: 26
        },
        end: {
          line: 166,
          column: 28
        }
      },
      "39": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 172,
          column: 5
        }
      },
      "40": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 171,
          column: 7
        }
      },
      "41": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 26
        }
      },
      "42": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 188,
          column: 5
        }
      },
      "43": {
        start: {
          line: 186,
          column: 21
        },
        end: {
          line: 186,
          column: 45
        }
      },
      "44": {
        start: {
          line: 187,
          column: 6
        },
        end: {
          line: 187,
          column: 26
        }
      },
      "45": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 190,
          column: 22
        }
      },
      "46": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 200,
          column: 70
        }
      },
      "47": {
        start: {
          line: 200,
          column: 51
        },
        end: {
          line: 200,
          column: 69
        }
      },
      "48": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 203,
          column: 70
        }
      },
      "49": {
        start: {
          line: 203,
          column: 51
        },
        end: {
          line: 203,
          column: 69
        }
      },
      "50": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 204,
          column: 68
        }
      },
      "51": {
        start: {
          line: 204,
          column: 50
        },
        end: {
          line: 204,
          column: 67
        }
      },
      "52": {
        start: {
          line: 211,
          column: 4
        },
        end: {
          line: 214,
          column: 5
        }
      },
      "53": {
        start: {
          line: 212,
          column: 6
        },
        end: {
          line: 212,
          column: 48
        }
      },
      "54": {
        start: {
          line: 213,
          column: 6
        },
        end: {
          line: 213,
          column: 31
        }
      },
      "55": {
        start: {
          line: 224,
          column: 4
        },
        end: {
          line: 224,
          column: 36
        }
      },
      "56": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 225,
          column: 41
        }
      },
      "57": {
        start: {
          line: 232,
          column: 28
        },
        end: {
          line: 232,
          column: 77
        }
      },
      "58": {
        start: {
          line: 233,
          column: 20
        },
        end: {
          line: 233,
          column: 39
        }
      },
      "59": {
        start: {
          line: 237,
          column: 4
        },
        end: {
          line: 240,
          column: 5
        }
      },
      "60": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 248,
          column: 5
        }
      },
      "61": {
        start: {
          line: 247,
          column: 6
        },
        end: {
          line: 247,
          column: 71
        }
      },
      "62": {
        start: {
          line: 249,
          column: 4
        },
        end: {
          line: 249,
          column: 78
        }
      },
      "63": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 250,
          column: 70
        }
      },
      "64": {
        start: {
          line: 253,
          column: 4
        },
        end: {
          line: 253,
          column: 73
        }
      },
      "65": {
        start: {
          line: 262,
          column: 4
        },
        end: {
          line: 266,
          column: 5
        }
      },
      "66": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 263,
          column: 67
        }
      },
      "67": {
        start: {
          line: 265,
          column: 6
        },
        end: {
          line: 265,
          column: 72
        }
      },
      "68": {
        start: {
          line: 269,
          column: 4
        },
        end: {
          line: 269,
          column: 78
        }
      },
      "69": {
        start: {
          line: 278,
          column: 28
        },
        end: {
          line: 278,
          column: 77
        }
      },
      "70": {
        start: {
          line: 279,
          column: 22
        },
        end: {
          line: 279,
          column: 67
        }
      },
      "71": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 280,
          column: 62
        }
      },
      "72": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 294,
          column: 5
        }
      },
      "73": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 293,
          column: 47
        }
      },
      "74": {
        start: {
          line: 297,
          column: 6
        },
        end: {
          line: 297,
          column: 54
        }
      },
      "75": {
        start: {
          line: 299,
          column: 4
        },
        end: {
          line: 301,
          column: 6
        }
      },
      "76": {
        start: {
          line: 316,
          column: 4
        },
        end: {
          line: 318,
          column: 5
        }
      },
      "77": {
        start: {
          line: 317,
          column: 6
        },
        end: {
          line: 317,
          column: 17
        }
      },
      "78": {
        start: {
          line: 321,
          column: 26
        },
        end: {
          line: 321,
          column: 58
        }
      },
      "79": {
        start: {
          line: 322,
          column: 22
        },
        end: {
          line: 322,
          column: 36
        }
      },
      "80": {
        start: {
          line: 324,
          column: 27
        },
        end: {
          line: 324,
          column: 68
        }
      },
      "81": {
        start: {
          line: 326,
          column: 4
        },
        end: {
          line: 326,
          column: 42
        }
      },
      "82": {
        start: {
          line: 336,
          column: 4
        },
        end: {
          line: 336,
          column: 36
        }
      },
      "83": {
        start: {
          line: 337,
          column: 4
        },
        end: {
          line: 337,
          column: 40
        }
      },
      "84": {
        start: {
          line: 354,
          column: 4
        },
        end: {
          line: 361,
          column: 12
        }
      },
      "85": {
        start: {
          line: 355,
          column: 6
        },
        end: {
          line: 360,
          column: 7
        }
      },
      "86": {
        start: {
          line: 359,
          column: 8
        },
        end: {
          line: 359,
          column: 34
        }
      },
      "87": {
        start: {
          line: 371,
          column: 4
        },
        end: {
          line: 373,
          column: 5
        }
      },
      "88": {
        start: {
          line: 372,
          column: 6
        },
        end: {
          line: 372,
          column: 45
        }
      },
      "89": {
        start: {
          line: 379,
          column: 22
        },
        end: {
          line: 379,
          column: 45
        }
      },
      "90": {
        start: {
          line: 388,
          column: 20
        },
        end: {
          line: 418,
          column: 4
        }
      },
      "91": {
        start: {
          line: 426,
          column: 18
        },
        end: {
          line: 446,
          column: 4
        }
      },
      "92": {
        start: {
          line: 456,
          column: 28
        },
        end: {
          line: 456,
          column: 53
        }
      },
      "93": {
        start: {
          line: 458,
          column: 27
        },
        end: {
          line: 460,
          column: 3
        }
      },
      "94": {
        start: {
          line: 462,
          column: 2
        },
        end: {
          line: 464,
          column: 4
        }
      },
      "95": {
        start: {
          line: 463,
          column: 4
        },
        end: {
          line: 463,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 34
          },
          end: {
            line: 153,
            column: 3
          }
        },
        line: 39
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 147,
            column: 40
          },
          end: {
            line: 147,
            column: 41
          }
        },
        loc: {
          start: {
            line: 147,
            column: 46
          },
          end: {
            line: 147,
            column: 71
          }
        },
        line: 147
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 165,
            column: 2
          },
          end: {
            line: 165,
            column: 3
          }
        },
        loc: {
          start: {
            line: 165,
            column: 32
          },
          end: {
            line: 175,
            column: 3
          }
        },
        line: 165
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 184,
            column: 3
          }
        },
        loc: {
          start: {
            line: 184,
            column: 14
          },
          end: {
            line: 191,
            column: 3
          }
        },
        line: 184
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 199,
            column: 2
          },
          end: {
            line: 199,
            column: 3
          }
        },
        loc: {
          start: {
            line: 199,
            column: 21
          },
          end: {
            line: 205,
            column: 3
          }
        },
        line: 199
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 200,
            column: 45
          },
          end: {
            line: 200,
            column: 46
          }
        },
        loc: {
          start: {
            line: 200,
            column: 51
          },
          end: {
            line: 200,
            column: 69
          }
        },
        line: 200
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 203,
            column: 45
          },
          end: {
            line: 203,
            column: 46
          }
        },
        loc: {
          start: {
            line: 203,
            column: 51
          },
          end: {
            line: 203,
            column: 69
          }
        },
        line: 203
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 204,
            column: 44
          },
          end: {
            line: 204,
            column: 45
          }
        },
        loc: {
          start: {
            line: 204,
            column: 50
          },
          end: {
            line: 204,
            column: 67
          }
        },
        line: 204
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 210,
            column: 2
          },
          end: {
            line: 210,
            column: 3
          }
        },
        loc: {
          start: {
            line: 210,
            column: 24
          },
          end: {
            line: 215,
            column: 3
          }
        },
        line: 210
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 223,
            column: 2
          },
          end: {
            line: 223,
            column: 3
          }
        },
        loc: {
          start: {
            line: 223,
            column: 23
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 223
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 231,
            column: 2
          },
          end: {
            line: 231,
            column: 3
          }
        },
        loc: {
          start: {
            line: 231,
            column: 30
          },
          end: {
            line: 254,
            column: 3
          }
        },
        line: 231
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 259,
            column: 2
          },
          end: {
            line: 259,
            column: 3
          }
        },
        loc: {
          start: {
            line: 259,
            column: 35
          },
          end: {
            line: 270,
            column: 3
          }
        },
        line: 259
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 277,
            column: 2
          },
          end: {
            line: 277,
            column: 3
          }
        },
        loc: {
          start: {
            line: 277,
            column: 27
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 277
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 291,
            column: 2
          },
          end: {
            line: 291,
            column: 3
          }
        },
        loc: {
          start: {
            line: 291,
            column: 49
          },
          end: {
            line: 302,
            column: 3
          }
        },
        line: 291
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 314,
            column: 2
          },
          end: {
            line: 314,
            column: 3
          }
        },
        loc: {
          start: {
            line: 314,
            column: 20
          },
          end: {
            line: 327,
            column: 3
          }
        },
        line: 314
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 335,
            column: 2
          },
          end: {
            line: 335,
            column: 3
          }
        },
        loc: {
          start: {
            line: 335,
            column: 16
          },
          end: {
            line: 338,
            column: 3
          }
        },
        line: 335
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 353,
            column: 2
          },
          end: {
            line: 353,
            column: 3
          }
        },
        loc: {
          start: {
            line: 353,
            column: 16
          },
          end: {
            line: 362,
            column: 3
          }
        },
        line: 353
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 354,
            column: 43
          },
          end: {
            line: 354,
            column: 44
          }
        },
        loc: {
          start: {
            line: 354,
            column: 49
          },
          end: {
            line: 361,
            column: 5
          }
        },
        line: 354
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 369,
            column: 2
          },
          end: {
            line: 369,
            column: 3
          }
        },
        loc: {
          start: {
            line: 369,
            column: 15
          },
          end: {
            line: 374,
            column: 3
          }
        },
        line: 369
      },
      "19": {
        name: "initCharacterCounts",
        decl: {
          start: {
            line: 455,
            column: 16
          },
          end: {
            line: 455,
            column: 35
          }
        },
        loc: {
          start: {
            line: 455,
            column: 45
          },
          end: {
            line: 465,
            column: 1
          }
        },
        line: 455
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 462,
            column: 28
          },
          end: {
            line: 462,
            column: 29
          }
        },
        loc: {
          start: {
            line: 462,
            column: 39
          },
          end: {
            line: 464,
            column: 3
          }
        },
        line: 462
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 39,
            column: 21
          },
          end: {
            line: 39,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 39,
            column: 30
          },
          end: {
            line: 39,
            column: 32
          }
        }],
        line: 39
      },
      "1": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 55,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 43
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 46,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 45,
            column: 8
          },
          end: {
            line: 45,
            column: 48
          }
        }, {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 45
          }
        }],
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 59,
            column: 4
          },
          end: {
            line: 61,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 59
      },
      "4": {
        loc: {
          start: {
            line: 78,
            column: 21
          },
          end: {
            line: 78,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 78,
            column: 21
          },
          end: {
            line: 78,
            column: 29
          }
        }, {
          start: {
            line: 78,
            column: 33
          },
          end: {
            line: 78,
            column: 42
          }
        }, {
          start: {
            line: 78,
            column: 46
          },
          end: {
            line: 78,
            column: 54
          }
        }],
        line: 78
      },
      "5": {
        loc: {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 84
      },
      "6": {
        loc: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 98
      },
      "7": {
        loc: {
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 167,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 167
      },
      "8": {
        loc: {
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 167,
            column: 8
          },
          end: {
            line: 167,
            column: 35
          }
        }, {
          start: {
            line: 167,
            column: 39
          },
          end: {
            line: 167,
            column: 67
          }
        }],
        line: 167
      },
      "9": {
        loc: {
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 4
          },
          end: {
            line: 188,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 185
      },
      "10": {
        loc: {
          start: {
            line: 186,
            column: 21
          },
          end: {
            line: 186,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 186,
            column: 21
          },
          end: {
            line: 186,
            column: 39
          }
        }, {
          start: {
            line: 186,
            column: 43
          },
          end: {
            line: 186,
            column: 45
          }
        }],
        line: 186
      },
      "11": {
        loc: {
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 214,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 214,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 211
      },
      "12": {
        loc: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 248,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 243
      },
      "13": {
        loc: {
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 262,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        }, {
          start: {
            line: 264,
            column: 11
          },
          end: {
            line: 266,
            column: 5
          }
        }],
        line: 262
      },
      "14": {
        loc: {
          start: {
            line: 279,
            column: 22
          },
          end: {
            line: 279,
            column: 67
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 279,
            column: 45
          },
          end: {
            line: 279,
            column: 52
          }
        }, {
          start: {
            line: 279,
            column: 55
          },
          end: {
            line: 279,
            column: 67
          }
        }],
        line: 279
      },
      "15": {
        loc: {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 294,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 294,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 292
      },
      "16": {
        loc: {
          start: {
            line: 297,
            column: 6
          },
          end: {
            line: 297,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 297,
            column: 28
          },
          end: {
            line: 297,
            column: 39
          }
        }, {
          start: {
            line: 297,
            column: 42
          },
          end: {
            line: 297,
            column: 54
          }
        }],
        line: 297
      },
      "17": {
        loc: {
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 318,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 316,
            column: 4
          },
          end: {
            line: 318,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 316
      },
      "18": {
        loc: {
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 355,
            column: 6
          },
          end: {
            line: 360,
            column: 7
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 355
      },
      "19": {
        loc: {
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 357,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 356,
            column: 8
          },
          end: {
            line: 356,
            column: 32
          }
        }, {
          start: {
            line: 357,
            column: 8
          },
          end: {
            line: 357,
            column: 51
          }
        }],
        line: 356
      },
      "20": {
        loc: {
          start: {
            line: 371,
            column: 4
          },
          end: {
            line: 373,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 371,
            column: 4
          },
          end: {
            line: 373,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 371
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7740ae010130bb200aa737f5e1cb2be5d561a086"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ev0ciskjp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2ev0ciskjp();

/**
 * Character count component
 *
 * Tracks the number of characters or words in the `.nhsuk-js-character-count`
 * `<textarea>` inside the element. Displays a message with the remaining number
 * of characters/words available, or the number of characters/words in excess.
 *
 * You can configure the message to only appear after a certain percentage
 * of the available characters/words has been entered.
 *
 * @augments {ConfigurableComponent<CharacterCountConfig>}
 */
class CharacterCount extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<CharacterCountConfig>} [config] - Character count config
   */
  constructor($root, config = (cov_2ev0ciskjp().b[0][0]++, {})) {
    var _ref, _ref2;
    cov_2ev0ciskjp().f[0]++;
    cov_2ev0ciskjp().s[3]++;
    super($root, config);
    /**
     * @type {number | null}
     */
    this.lastInputTimestamp = (cov_2ev0ciskjp().s[0]++, null);
    this.lastInputValue = (cov_2ev0ciskjp().s[1]++, '');
    /**
     * @type {number | null}
     */
    this.valueChecker = (cov_2ev0ciskjp().s[2]++, null);
    const $textarea = (cov_2ev0ciskjp().s[4]++, this.$root.querySelector('.nhsuk-js-character-count'));
    cov_2ev0ciskjp().s[5]++;
    if (!((cov_2ev0ciskjp().b[2][0]++, $textarea instanceof HTMLTextAreaElement) || (cov_2ev0ciskjp().b[2][1]++, $textarea instanceof HTMLInputElement))) {
      cov_2ev0ciskjp().b[1][0]++;
      cov_2ev0ciskjp().s[6]++;
      throw new ElementError({
        component: CharacterCount,
        element: $textarea,
        expectedType: 'HTMLTextareaElement or HTMLInputElement',
        identifier: 'Form field (`.nhsuk-js-character-count`)'
      });
    } else {
      cov_2ev0ciskjp().b[1][1]++;
    }

    // Check for valid config
    const errors = (cov_2ev0ciskjp().s[7]++, validateConfig(CharacterCount.schema, this.config));
    cov_2ev0ciskjp().s[8]++;
    if (errors[0]) {
      cov_2ev0ciskjp().b[3][0]++;
      cov_2ev0ciskjp().s[9]++;
      throw new ConfigError(formatErrorMessage(CharacterCount, errors[0]));
    } else {
      cov_2ev0ciskjp().b[3][1]++;
    }
    const {
      i18n,
      maxwords,
      maxlength,
      screenReaderCountMessageClass,
      textareaDescriptionClass,
      visibleCountMessageClass
    } = (cov_2ev0ciskjp().s[10]++, this.config);
    cov_2ev0ciskjp().s[11]++;
    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });

    // Determine the limit attribute (characters or words)
    cov_2ev0ciskjp().s[12]++;
    this.maxLength = (_ref = (_ref2 = (cov_2ev0ciskjp().b[4][0]++, maxwords)) != null ? _ref2 : (cov_2ev0ciskjp().b[4][1]++, maxlength)) != null ? _ref : (cov_2ev0ciskjp().b[4][2]++, Infinity);
    cov_2ev0ciskjp().s[13]++;
    this.$textarea = $textarea;
    const textareaDescriptionId = (cov_2ev0ciskjp().s[14]++, `${this.$textarea.id}-info`);
    const $textareaDescription = (cov_2ev0ciskjp().s[15]++, document.getElementById(textareaDescriptionId));
    cov_2ev0ciskjp().s[16]++;
    if (!$textareaDescription) {
      cov_2ev0ciskjp().b[5][0]++;
      cov_2ev0ciskjp().s[17]++;
      throw new ElementError({
        component: CharacterCount,
        element: $textareaDescription,
        identifier: `Count message (\`id="${textareaDescriptionId}"\`)`
      });
    } else {
      cov_2ev0ciskjp().b[5][1]++;
    }

    // Pre-existing validation error rendered from server
    cov_2ev0ciskjp().s[18]++;
    this.$errorMessage = this.$root.querySelector('.nhsuk-error-message');

    // Inject a description for the textarea if none is present already
    // for when the component was rendered with no maxlength, maxwords
    // nor custom textareaDescriptionText
    cov_2ev0ciskjp().s[19]++;
    if (/^\s*$/.exec($textareaDescription.textContent)) {
      cov_2ev0ciskjp().b[6][0]++;
      cov_2ev0ciskjp().s[20]++;
      $textareaDescription.textContent = this.i18n.t('textareaDescription', {
        count: this.maxLength
      });
    } else {
      cov_2ev0ciskjp().b[6][1]++;
    }

    // Move the textarea description to be immediately after the textarea
    // Kept for backwards compatibility
    cov_2ev0ciskjp().s[21]++;
    this.$textarea.insertAdjacentElement('afterend', $textareaDescription);

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    cov_2ev0ciskjp().s[22]++;
    this.$screenReaderCountMessage = document.createElement('div');
    cov_2ev0ciskjp().s[23]++;
    this.$screenReaderCountMessage.setAttribute('aria-live', 'polite');
    cov_2ev0ciskjp().s[24]++;
    this.$screenReaderCountMessage.classList.add(screenReaderCountMessageClass, 'nhsuk-u-visually-hidden');
    cov_2ev0ciskjp().s[25]++;
    $textareaDescription.insertAdjacentElement('afterend', this.$screenReaderCountMessage);

    // Create our live-updating counter element, copying the classes from the
    // textarea description for backwards compatibility as these may have been
    // configured
    cov_2ev0ciskjp().s[26]++;
    this.$visibleCountMessage = document.createElement('div');
    cov_2ev0ciskjp().s[27]++;
    this.$visibleCountMessage.setAttribute('aria-hidden', 'true');
    cov_2ev0ciskjp().s[28]++;
    this.$visibleCountMessage.className = $textareaDescription.className;
    cov_2ev0ciskjp().s[29]++;
    this.$visibleCountMessage.classList.add(visibleCountMessageClass);
    cov_2ev0ciskjp().s[30]++;
    this.$visibleCountMessage.classList.remove(textareaDescriptionClass);
    cov_2ev0ciskjp().s[31]++;
    $textareaDescription.insertAdjacentElement('afterend', this.$visibleCountMessage);

    // Hide the textarea description
    cov_2ev0ciskjp().s[32]++;
    $textareaDescription.classList.add('nhsuk-u-visually-hidden');

    // Remove hard limit if set
    cov_2ev0ciskjp().s[33]++;
    this.$textarea.removeAttribute('maxlength');
    cov_2ev0ciskjp().s[34]++;
    this.bindChangeEvents();

    // When the page is restored after navigating 'back' in some browsers the
    // state of form controls is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to sync after the pageshow event.
    cov_2ev0ciskjp().s[35]++;
    window.addEventListener('pageshow', () => {
      cov_2ev0ciskjp().f[1]++;
      cov_2ev0ciskjp().s[36]++;
      return this.updateCountMessage();
    });

    // Although we've set up handlers to sync state on the pageshow event, init
    // could be called after those events have fired, for example if they are
    // added to the page dynamically, so update now too.
    cov_2ev0ciskjp().s[37]++;
    this.updateCountMessage();
  }

  /**
   * Character count config override
   *
   * To ensure data-attributes take complete precedence, even if they change
   * the type of count, we need to reset the `maxlength` and `maxwords` from
   * the JavaScript config.
   *
   * @param {Partial<CharacterCountConfig>} datasetConfig - Config specified by dataset
   * @returns {Partial<CharacterCountConfig>} Config to override by dataset
   */
  configOverride(datasetConfig) {
    cov_2ev0ciskjp().f[2]++;
    let configOverrides = (cov_2ev0ciskjp().s[38]++, {});
    cov_2ev0ciskjp().s[39]++;
    if ((cov_2ev0ciskjp().b[8][0]++, 'maxwords' in datasetConfig) || (cov_2ev0ciskjp().b[8][1]++, 'maxlength' in datasetConfig)) {
      cov_2ev0ciskjp().b[7][0]++;
      cov_2ev0ciskjp().s[40]++;
      configOverrides = {
        maxlength: undefined,
        maxwords: undefined
      };
    } else {
      cov_2ev0ciskjp().b[7][1]++;
    }
    cov_2ev0ciskjp().s[41]++;
    return configOverrides;
  }

  /**
   * Count the number of characters (or words, if `config.maxwords` is set)
   * in the given text
   *
   * @param {string} text - The text to count the characters of
   * @returns {number} the number of characters (or words) in the text
   */
  count(text) {
    cov_2ev0ciskjp().f[3]++;
    cov_2ev0ciskjp().s[42]++;
    if (this.config.maxwords) {
      var _ref3;
      cov_2ev0ciskjp().b[9][0]++;
      const tokens = (cov_2ev0ciskjp().s[43]++, (_ref3 = (cov_2ev0ciskjp().b[10][0]++, text.match(/\S+/g))) != null ? _ref3 : (cov_2ev0ciskjp().b[10][1]++, [])); // Matches consecutive non-whitespace chars
      cov_2ev0ciskjp().s[44]++;
      return tokens.length;
    } else {
      cov_2ev0ciskjp().b[9][1]++;
    }
    cov_2ev0ciskjp().s[45]++;
    return text.length;
  }

  /**
   * Bind change events
   *
   * Set up event listeners on the $textarea so that the count messages update
   * when the user types.
   */
  bindChangeEvents() {
    cov_2ev0ciskjp().f[4]++;
    cov_2ev0ciskjp().s[46]++;
    this.$textarea.addEventListener('keyup', () => {
      cov_2ev0ciskjp().f[5]++;
      cov_2ev0ciskjp().s[47]++;
      return this.handleKeyUp();
    });

    // Bind focus/blur events to start/stop polling
    cov_2ev0ciskjp().s[48]++;
    this.$textarea.addEventListener('focus', () => {
      cov_2ev0ciskjp().f[6]++;
      cov_2ev0ciskjp().s[49]++;
      return this.handleFocus();
    });
    cov_2ev0ciskjp().s[50]++;
    this.$textarea.addEventListener('blur', () => {
      cov_2ev0ciskjp().f[7]++;
      cov_2ev0ciskjp().s[51]++;
      return this.handleBlur();
    });
  }

  /**
   * Update count message if textarea value has changed
   */
  checkIfValueChanged() {
    cov_2ev0ciskjp().f[8]++;
    cov_2ev0ciskjp().s[52]++;
    if (this.$textarea.value !== this.lastInputValue) {
      cov_2ev0ciskjp().b[11][0]++;
      cov_2ev0ciskjp().s[53]++;
      this.lastInputValue = this.$textarea.value;
      cov_2ev0ciskjp().s[54]++;
      this.updateCountMessage();
    } else {
      cov_2ev0ciskjp().b[11][1]++;
    }
  }

  /**
   * Update count message
   *
   * Helper function to update both the visible and screen reader-specific
   * counters simultaneously (e.g. on init)
   */
  updateCountMessage() {
    cov_2ev0ciskjp().f[9]++;
    cov_2ev0ciskjp().s[55]++;
    this.updateVisibleCountMessage();
    cov_2ev0ciskjp().s[56]++;
    this.updateScreenReaderCountMessage();
  }

  /**
   * Update visible count message
   */
  updateVisibleCountMessage() {
    cov_2ev0ciskjp().f[10]++;
    const remainingNumber = (cov_2ev0ciskjp().s[57]++, this.maxLength - this.count(this.$textarea.value));
    const isError = (cov_2ev0ciskjp().s[58]++, remainingNumber < 0);

    // If input is over the threshold, remove the disabled class which renders
    // the counter invisible.
    cov_2ev0ciskjp().s[59]++;
    this.$visibleCountMessage.classList.toggle(`${this.config.visibleCountMessageClass}--disabled`, !this.isOverThreshold());

    // Update styles
    cov_2ev0ciskjp().s[60]++;
    if (!this.$errorMessage) {
      cov_2ev0ciskjp().b[12][0]++;
      cov_2ev0ciskjp().s[61]++;
      // Only toggle the textarea error class if there isn't an error message
      // already, as it may be unrelated to the limit (eg: allowed characters)
      // and would set the border colour back to black.
      this.$textarea.classList.toggle('nhsuk-textarea--error', isError);
    } else {
      cov_2ev0ciskjp().b[12][1]++;
    }
    cov_2ev0ciskjp().s[62]++;
    this.$visibleCountMessage.classList.toggle('nhsuk-error-message', isError);
    cov_2ev0ciskjp().s[63]++;
    this.$visibleCountMessage.classList.toggle('nhsuk-hint', !isError);

    // Update message
    cov_2ev0ciskjp().s[64]++;
    this.$visibleCountMessage.textContent = this.formattedUpdateMessage();
  }

  /**
   * Update screen reader count message
   */
  updateScreenReaderCountMessage() {
    cov_2ev0ciskjp().f[11]++;
    cov_2ev0ciskjp().s[65]++;
    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      cov_2ev0ciskjp().b[13][0]++;
      cov_2ev0ciskjp().s[66]++;
      this.$screenReaderCountMessage.removeAttribute('aria-hidden');
    } else {
      cov_2ev0ciskjp().b[13][1]++;
      cov_2ev0ciskjp().s[67]++;
      this.$screenReaderCountMessage.setAttribute('aria-hidden', 'true');
    }

    // Update message
    cov_2ev0ciskjp().s[68]++;
    this.$screenReaderCountMessage.textContent = this.formattedUpdateMessage();
  }

  /**
   * Get count message
   *
   * @returns {string} Status message
   */
  formattedUpdateMessage() {
    cov_2ev0ciskjp().f[12]++;
    const remainingNumber = (cov_2ev0ciskjp().s[69]++, this.maxLength - this.count(this.$textarea.value));
    const countType = (cov_2ev0ciskjp().s[70]++, this.config.maxwords ? (cov_2ev0ciskjp().b[14][0]++, 'words') : (cov_2ev0ciskjp().b[14][1]++, 'characters'));
    cov_2ev0ciskjp().s[71]++;
    return this.formatCountMessage(remainingNumber, countType);
  }

  /**
   * Formats the message shown to users according to what's counted
   * and how many remain
   *
   * @param {number} remainingNumber - The number of words/characaters remaining
   * @param {string} countType - "words" or "characters"
   * @returns {string} Status message
   */
  formatCountMessage(remainingNumber, countType) {
    cov_2ev0ciskjp().f[13]++;
    cov_2ev0ciskjp().s[72]++;
    if (remainingNumber === 0) {
      cov_2ev0ciskjp().b[15][0]++;
      cov_2ev0ciskjp().s[73]++;
      return this.i18n.t(`${countType}AtLimit`);
    } else {
      cov_2ev0ciskjp().b[15][1]++;
    }
    const translationKeySuffix = (cov_2ev0ciskjp().s[74]++, remainingNumber < 0 ? (cov_2ev0ciskjp().b[16][0]++, 'OverLimit') : (cov_2ev0ciskjp().b[16][1]++, 'UnderLimit'));
    cov_2ev0ciskjp().s[75]++;
    return this.i18n.t(`${countType}${translationKeySuffix}`, {
      count: Math.abs(remainingNumber)
    });
  }

  /**
   * Check if count is over threshold
   *
   * Checks whether the value is over the configured threshold for the input.
   * If there is no configured threshold, it is set to 0 and this function will
   * always return true.
   *
   * @returns {boolean} true if the current count is over the config.threshold
   *   (or no threshold is set)
   */
  isOverThreshold() {
    cov_2ev0ciskjp().f[14]++;
    cov_2ev0ciskjp().s[76]++;
    // No threshold means we're always above threshold so save some computation
    if (!this.config.threshold) {
      cov_2ev0ciskjp().b[17][0]++;
      cov_2ev0ciskjp().s[77]++;
      return true;
    } else {
      cov_2ev0ciskjp().b[17][1]++;
    }

    // Determine the remaining number of characters/words
    const currentLength = (cov_2ev0ciskjp().s[78]++, this.count(this.$textarea.value));
    const maxLength = (cov_2ev0ciskjp().s[79]++, this.maxLength);
    const thresholdValue = (cov_2ev0ciskjp().s[80]++, maxLength * this.config.threshold / 100);
    cov_2ev0ciskjp().s[81]++;
    return thresholdValue <= currentLength;
  }

  /**
   * Handle key up event
   *
   * Update the visible character counter and keep track of when the last update
   * happened for each keypress
   */
  handleKeyUp() {
    cov_2ev0ciskjp().f[15]++;
    cov_2ev0ciskjp().s[82]++;
    this.updateVisibleCountMessage();
    cov_2ev0ciskjp().s[83]++;
    this.lastInputTimestamp = Date.now();
  }

  /**
   * Handle focus event
   *
   * Speech recognition software such as Dragon NaturallySpeaking will modify
   * the fields by directly changing its `value`. These changes don't trigger
   * events in JavaScript, so we need to poll to handle when and if they occur.
   *
   * Once the keyup event hasn't been detected for at least 1000 ms (1s), check
   * if the textarea value has changed and update the count message if it has.
   *
   * This is so that the update triggered by the manual comparison doesn't
   * conflict with debounced KeyboardEvent updates.
   */
  handleFocus() {
    cov_2ev0ciskjp().f[16]++;
    cov_2ev0ciskjp().s[84]++;
    this.valueChecker = window.setInterval(() => {
      cov_2ev0ciskjp().f[17]++;
      cov_2ev0ciskjp().s[85]++;
      if ((cov_2ev0ciskjp().b[19][0]++, !this.lastInputTimestamp) || (cov_2ev0ciskjp().b[19][1]++, Date.now() - 500 >= this.lastInputTimestamp)) {
        cov_2ev0ciskjp().b[18][0]++;
        cov_2ev0ciskjp().s[86]++;
        this.checkIfValueChanged();
      } else {
        cov_2ev0ciskjp().b[18][1]++;
      }
    }, 1000);
  }

  /**
   * Handle blur event
   *
   * Stop checking the textarea value once the textarea no longer has focus
   */
  handleBlur() {
    cov_2ev0ciskjp().f[18]++;
    cov_2ev0ciskjp().s[87]++;
    // Cancel value checking on blur
    if (this.valueChecker) {
      cov_2ev0ciskjp().b[20][0]++;
      cov_2ev0ciskjp().s[88]++;
      window.clearInterval(this.valueChecker);
    } else {
      cov_2ev0ciskjp().b[20][1]++;
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise character count component
 *
 * @deprecated Use {@link createAll | `createAll(CharacterCount, options)`} instead.
 * @param {InitOptions & Partial<CharacterCountConfig>} [options]
 */
CharacterCount.moduleName = (cov_2ev0ciskjp().s[89]++, 'nhsuk-character-count');
/**
 * Character count default config
 *
 * @see {@link CharacterCountConfig}
 * @constant
 * @type {CharacterCountConfig}
 */
CharacterCount.defaults = (cov_2ev0ciskjp().s[90]++, Object.freeze({
  threshold: 0,
  textareaDescriptionClass: 'nhsuk-character-count__message',
  visibleCountMessageClass: 'nhsuk-character-count__status',
  screenReaderCountMessageClass: 'nhsuk-character-count__sr-status',
  i18n: {
    // Characters
    charactersUnderLimit: {
      one: 'You have %{count} character remaining',
      other: 'You have %{count} characters remaining'
    },
    charactersAtLimit: 'You have 0 characters remaining',
    charactersOverLimit: {
      one: 'You have %{count} character too many',
      other: 'You have %{count} characters too many'
    },
    // Words
    wordsUnderLimit: {
      one: 'You have %{count} word remaining',
      other: 'You have %{count} words remaining'
    },
    wordsAtLimit: 'You have 0 words remaining',
    wordsOverLimit: {
      one: 'You have %{count} word too many',
      other: 'You have %{count} words too many'
    },
    textareaDescription: {
      other: ''
    }
  }
}));
/**
 * Character count config schema
 *
 * @constant
 * @satisfies {Schema<CharacterCountConfig>}
 */
CharacterCount.schema = (cov_2ev0ciskjp().s[91]++, Object.freeze({
  properties: {
    maxwords: {
      type: 'number'
    },
    maxlength: {
      type: 'number'
    },
    threshold: {
      type: 'number'
    },
    textareaDescriptionClass: {
      type: 'string'
    },
    visibleCountMessageClass: {
      type: 'string'
    },
    screenReaderCountMessageClass: {
      type: 'string'
    },
    i18n: {
      type: 'object'
    }
  },
  anyOf: [{
    required: ['maxwords'],
    errorMessage: 'Either "maxlength" or "maxwords" must be provided'
  }, {
    required: ['maxlength'],
    errorMessage: 'Either "maxlength" or "maxwords" must be provided'
  }]
}));
function initCharacterCounts(options) {
  cov_2ev0ciskjp().f[19]++;
  const {
    scope: $scope
  } = (cov_2ev0ciskjp().s[92]++, normaliseOptions(options));
  const $characterCounts = (cov_2ev0ciskjp().s[93]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${CharacterCount.moduleName}"]`));
  cov_2ev0ciskjp().s[94]++;
  $characterCounts == null || $characterCounts.forEach($root => {
    cov_2ev0ciskjp().f[20]++;
    cov_2ev0ciskjp().s[95]++;
    new CharacterCount($root, options);
  });
}

/**
 * Character count config
 *
 * @see {@link CharacterCount.defaults}
 * @typedef {object} CharacterCountConfig
 * @property {number} [maxlength] - The maximum number of characters.
 *   If maxwords is provided, the maxlength option will be ignored.
 * @property {number} [maxwords] - The maximum number of words. If maxwords is
 *   provided, the maxlength option will be ignored.
 * @property {number} [threshold=0] - The percentage value of the limit at
 *   which point the count message is displayed. If this attribute is set, the
 *   count message will be hidden by default.
 * @property {string} textareaDescriptionClass - Textarea description class
 * @property {string} visibleCountMessageClass - Visible count message class
 * @property {string} screenReaderCountMessageClass - Screen reader count message class
 * @property {CharacterCountTranslations} [i18n=CharacterCount.defaults.i18n] - Character count translations
 */

/**
 * Character count translations
 *
 * @see {@link CharacterCount.defaults.i18n}
 * @see {@link https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md}
 * @typedef {object} CharacterCountTranslations
 *
 * Messages shown to users as they type. It provides feedback on how many words
 * or characters they have remaining or if they are over the limit. This also
 * includes a message used as an accessible description for the textarea.
 * @property {TranslationPluralForms} [charactersUnderLimit] - Message displayed
 *   when the number of characters is under the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {string} [charactersAtLimit] - Message displayed when the number of
 *   characters reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [charactersOverLimit] - Message displayed
 *   when the number of characters is over the configured maximum, `maxlength`.
 *   This message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining characters. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [wordsUnderLimit] - Message displayed when
 *   the number of words is under the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {string} [wordsAtLimit] - Message displayed when the number of
 *   words reaches the configured maximum, `maxlength`. This message is
 *   displayed visually and through assistive technologies.
 * @property {TranslationPluralForms} [wordsOverLimit] - Message displayed when
 *   the number of words is over the configured maximum, `maxlength`. This
 *   message is displayed visually and through assistive technologies. The
 *   component will replace the `%{count}` placeholder with the number of
 *   remaining words. This is a pluralised list of messages.
 * @property {TranslationPluralForms} [textareaDescription] - Message made
 *   available to assistive technologies, if none is already present in the
 *   HTML, to describe that the component accepts only a limited amount of
 *   content. It is visible on the page when JavaScript is unavailable. The
 *   component will replace the `%{count}` placeholder with the value of the
 *   `maxlength` or `maxwords` parameter.
 */

/**
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { CharacterCount, initCharacterCounts };
//# sourceMappingURL=character-count.mjs.map
