import { closestAttributeValue } from '../../common/closest-attribute-value.mjs';
import '../../common/configuration/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { I18n } from '../../i18n.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_1llus6ohot() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs";
  var hash = "55c83e9d690f32a02bad0bf63f08cef61ed56c56";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "1": {
        start: {
          line: 25,
          column: 19
        },
        end: {
          line: 25,
          column: 52
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 34,
          column: 5
        }
      },
      "3": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 33,
          column: 8
        }
      },
      "4": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "5": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 42,
          column: 8
        }
      },
      "6": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 45,
          column: 24
        }
      },
      "7": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 52,
          column: 5
        }
      },
      "8": {
        start: {
          line: 48,
          column: 6
        },
        end: {
          line: 51,
          column: 8
        }
      },
      "9": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 28
        }
      },
      "10": {
        start: {
          line: 65,
          column: 8
        },
        end: {
          line: 65,
          column: 19
        }
      },
      "11": {
        start: {
          line: 67,
          column: 4
        },
        end: {
          line: 70,
          column: 6
        }
      },
      "12": {
        start: {
          line: 72,
          column: 19
        },
        end: {
          line: 72,
          column: 35
        }
      },
      "13": {
        start: {
          line: 75,
          column: 4
        },
        end: {
          line: 77,
          column: 5
        }
      },
      "14": {
        start: {
          line: 76,
          column: 6
        },
        end: {
          line: 76,
          column: 36
        }
      },
      "15": {
        start: {
          line: 82,
          column: 4
        },
        end: {
          line: 82,
          column: 39
        }
      },
      "16": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 42
        }
      },
      "17": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 90,
          column: 18
        }
      },
      "18": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 94,
          column: 5
        }
      },
      "19": {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 93,
          column: 49
        }
      },
      "20": {
        start: {
          line: 97,
          column: 4
        },
        end: {
          line: 97,
          column: 55
        }
      },
      "21": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 51
        }
      },
      "22": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 36
        }
      },
      "23": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 33
        }
      },
      "24": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 63
        }
      },
      "25": {
        start: {
          line: 105,
          column: 28
        },
        end: {
          line: 105,
          column: 72
        }
      },
      "26": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 108,
          column: 5
        }
      },
      "27": {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 107,
          column: 72
        }
      },
      "28": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 49
        }
      },
      "29": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 57
        }
      },
      "30": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 52
        }
      },
      "31": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 56
        }
      },
      "32": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 116,
          column: 46
        }
      },
      "33": {
        start: {
          line: 118,
          column: 25
        },
        end: {
          line: 118,
          column: 55
        }
      },
      "34": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 57
        }
      },
      "35": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 33
        }
      },
      "36": {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 121,
          column: 40
        }
      },
      "37": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 46
        }
      },
      "38": {
        start: {
          line: 125,
          column: 29
        },
        end: {
          line: 125,
          column: 59
        }
      },
      "39": {
        start: {
          line: 126,
          column: 4
        },
        end: {
          line: 126,
          column: 78
        }
      },
      "40": {
        start: {
          line: 128,
          column: 31
        },
        end: {
          line: 128,
          column: 61
        }
      },
      "41": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 133,
          column: 5
        }
      },
      "42": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 67
        }
      },
      "43": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 136,
          column: 52
        }
      },
      "44": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 32
        }
      },
      "45": {
        start: {
          line: 142,
          column: 29
        },
        end: {
          line: 142,
          column: 59
        }
      },
      "46": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 143,
          column: 70
        }
      },
      "47": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 63
        }
      },
      "48": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 50
        }
      },
      "49": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 148,
          column: 50
        }
      },
      "50": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "51": {
        start: {
          line: 153,
          column: 4
        },
        end: {
          line: 153,
          column: 71
        }
      },
      "52": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 157,
          column: 6
        }
      },
      "53": {
        start: {
          line: 156,
          column: 6
        },
        end: {
          line: 156,
          column: 28
        }
      },
      "54": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 164,
          column: 5
        }
      },
      "55": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 162,
          column: 74
        }
      },
      "56": {
        start: {
          line: 163,
          column: 6
        },
        end: {
          line: 163,
          column: 45
        }
      },
      "57": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 167,
          column: 72
        }
      },
      "58": {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 169,
          column: 46
        }
      },
      "59": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 170,
          column: 51
        }
      },
      "60": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 68
        }
      },
      "61": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 176,
          column: 30
        }
      },
      "62": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 31
        }
      },
      "63": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 56
        }
      },
      "64": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 185,
          column: 5
        }
      },
      "65": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 186,
          column: 62
        }
      },
      "66": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 187,
          column: 73
        }
      },
      "67": {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 191,
          column: 69
        }
      },
      "68": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 207,
          column: 5
        }
      },
      "69": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 217,
          column: 6
        }
      },
      "70": {
        start: {
          line: 216,
          column: 6
        },
        end: {
          line: 216,
          column: 39
        }
      },
      "71": {
        start: {
          line: 219,
          column: 4
        },
        end: {
          line: 226,
          column: 6
        }
      },
      "72": {
        start: {
          line: 220,
          column: 6
        },
        end: {
          line: 223,
          column: 7
        }
      },
      "73": {
        start: {
          line: 221,
          column: 8
        },
        end: {
          line: 221,
          column: 32
        }
      },
      "74": {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 222,
          column: 67
        }
      },
      "75": {
        start: {
          line: 225,
          column: 6
        },
        end: {
          line: 225,
          column: 40
        }
      },
      "76": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 237,
          column: 5
        }
      },
      "77": {
        start: {
          line: 236,
          column: 6
        },
        end: {
          line: 236,
          column: 12
        }
      },
      "78": {
        start: {
          line: 239,
          column: 32
        },
        end: {
          line: 239,
          column: 43
        }
      },
      "79": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 264,
          column: 5
        }
      },
      "80": {
        start: {
          line: 244,
          column: 6
        },
        end: {
          line: 263,
          column: 7
        }
      },
      "81": {
        start: {
          line: 245,
          column: 8
        },
        end: {
          line: 254,
          column: 9
        }
      },
      "82": {
        start: {
          line: 248,
          column: 10
        },
        end: {
          line: 253,
          column: 11
        }
      },
      "83": {
        start: {
          line: 251,
          column: 12
        },
        end: {
          line: 251,
          column: 36
        }
      },
      "84": {
        start: {
          line: 252,
          column: 12
        },
        end: {
          line: 252,
          column: 74
        }
      },
      "85": {
        start: {
          line: 255,
          column: 13
        },
        end: {
          line: 263,
          column: 7
        }
      },
      "86": {
        start: {
          line: 261,
          column: 8
        },
        end: {
          line: 261,
          column: 32
        }
      },
      "87": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 262,
          column: 67
        }
      },
      "88": {
        start: {
          line: 271,
          column: 32
        },
        end: {
          line: 271,
          column: 43
        }
      },
      "89": {
        start: {
          line: 272,
          column: 4
        },
        end: {
          line: 272,
          column: 66
        }
      },
      "90": {
        start: {
          line: 279,
          column: 32
        },
        end: {
          line: 279,
          column: 43
        }
      },
      "91": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 280,
          column: 69
        }
      },
      "92": {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 289,
          column: 26
        }
      },
      "93": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 300,
          column: 5
        }
      },
      "94": {
        start: {
          line: 292,
          column: 6
        },
        end: {
          line: 292,
          column: 50
        }
      },
      "95": {
        start: {
          line: 297,
          column: 6
        },
        end: {
          line: 297,
          column: 58
        }
      },
      "96": {
        start: {
          line: 299,
          column: 6
        },
        end: {
          line: 299,
          column: 30
        }
      },
      "97": {
        start: {
          line: 310,
          column: 4
        },
        end: {
          line: 310,
          column: 63
        }
      },
      "98": {
        start: {
          line: 324,
          column: 4
        },
        end: {
          line: 326,
          column: 5
        }
      },
      "99": {
        start: {
          line: 325,
          column: 6
        },
        end: {
          line: 325,
          column: 74
        }
      },
      "100": {
        start: {
          line: 329,
          column: 4
        },
        end: {
          line: 331,
          column: 5
        }
      },
      "101": {
        start: {
          line: 330,
          column: 6
        },
        end: {
          line: 330,
          column: 49
        }
      },
      "102": {
        start: {
          line: 335,
          column: 4
        },
        end: {
          line: 335,
          column: 15
        }
      },
      "103": {
        start: {
          line: 345,
          column: 4
        },
        end: {
          line: 347,
          column: 5
        }
      },
      "104": {
        start: {
          line: 346,
          column: 6
        },
        end: {
          line: 346,
          column: 30
        }
      },
      "105": {
        start: {
          line: 349,
          column: 4
        },
        end: {
          line: 349,
          column: 30
        }
      },
      "106": {
        start: {
          line: 356,
          column: 32
        },
        end: {
          line: 356,
          column: 43
        }
      },
      "107": {
        start: {
          line: 357,
          column: 22
        },
        end: {
          line: 357,
          column: 33
        }
      },
      "108": {
        start: {
          line: 359,
          column: 4
        },
        end: {
          line: 375,
          column: 5
        }
      },
      "109": {
        start: {
          line: 361,
          column: 6
        },
        end: {
          line: 361,
          column: 58
        }
      },
      "110": {
        start: {
          line: 362,
          column: 6
        },
        end: {
          line: 362,
          column: 65
        }
      },
      "111": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 372,
          column: 7
        }
      },
      "112": {
        start: {
          line: 368,
          column: 8
        },
        end: {
          line: 368,
          column: 46
        }
      },
      "113": {
        start: {
          line: 371,
          column: 8
        },
        end: {
          line: 371,
          column: 71
        }
      },
      "114": {
        start: {
          line: 374,
          column: 6
        },
        end: {
          line: 374,
          column: 68
        }
      },
      "115": {
        start: {
          line: 385,
          column: 4
        },
        end: {
          line: 387,
          column: 5
        }
      },
      "116": {
        start: {
          line: 386,
          column: 6
        },
        end: {
          line: 386,
          column: 40
        }
      },
      "117": {
        start: {
          line: 389,
          column: 4
        },
        end: {
          line: 389,
          column: 67
        }
      },
      "118": {
        start: {
          line: 400,
          column: 19
        },
        end: {
          line: 400,
          column: 75
        }
      },
      "119": {
        start: {
          line: 402,
          column: 4
        },
        end: {
          line: 407,
          column: 5
        }
      },
      "120": {
        start: {
          line: 403,
          column: 6
        },
        end: {
          line: 406,
          column: 8
        }
      },
      "121": {
        start: {
          line: 409,
          column: 4
        },
        end: {
          line: 409,
          column: 17
        }
      },
      "122": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 416,
          column: 23
        }
      },
      "123": {
        start: {
          line: 423,
          column: 21
        },
        end: {
          line: 432,
          column: 6
        }
      },
      "124": {
        start: {
          line: 424,
          column: 6
        },
        end: {
          line: 431,
          column: 7
        }
      },
      "125": {
        start: {
          line: 425,
          column: 8
        },
        end: {
          line: 430,
          column: 9
        }
      },
      "126": {
        start: {
          line: 429,
          column: 10
        },
        end: {
          line: 429,
          column: 36
        }
      },
      "127": {
        start: {
          line: 434,
          column: 4
        },
        end: {
          line: 436,
          column: 6
        }
      },
      "128": {
        start: {
          line: 443,
          column: 30
        },
        end: {
          line: 443,
          column: 41
        }
      },
      "129": {
        start: {
          line: 445,
          column: 31
        },
        end: {
          line: 447,
          column: 44
        }
      },
      "130": {
        start: {
          line: 449,
          column: 4
        },
        end: {
          line: 449,
          column: 52
        }
      },
      "131": {
        start: {
          line: 450,
          column: 4
        },
        end: {
          line: 450,
          column: 78
        }
      },
      "132": {
        start: {
          line: 456,
          column: 22
        },
        end: {
          line: 456,
          column: 41
        }
      },
      "133": {
        start: {
          line: 465,
          column: 20
        },
        end: {
          line: 486,
          column: 4
        }
      },
      "134": {
        start: {
          line: 494,
          column: 18
        },
        end: {
          line: 505,
          column: 4
        }
      },
      "135": {
        start: {
          line: 515,
          column: 15
        },
        end: {
          line: 515,
          column: 16
        }
      },
      "136": {
        start: {
          line: 519,
          column: 2
        },
        end: {
          line: 523,
          column: 3
        }
      },
      "137": {
        start: {
          line: 519,
          column: 15
        },
        end: {
          line: 519,
          column: 16
        }
      },
      "138": {
        start: {
          line: 520,
          column: 4
        },
        end: {
          line: 522,
          column: 5
        }
      },
      "139": {
        start: {
          line: 521,
          column: 6
        },
        end: {
          line: 521,
          column: 14
        }
      },
      "140": {
        start: {
          line: 524,
          column: 2
        },
        end: {
          line: 524,
          column: 15
        }
      },
      "141": {
        start: {
          line: 534,
          column: 28
        },
        end: {
          line: 534,
          column: 53
        }
      },
      "142": {
        start: {
          line: 536,
          column: 23
        },
        end: {
          line: 538,
          column: 3
        }
      },
      "143": {
        start: {
          line: 540,
          column: 2
        },
        end: {
          line: 542,
          column: 4
        }
      },
      "144": {
        start: {
          line: 541,
          column: 4
        },
        end: {
          line: 541,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 34
          },
          end: {
            line: 227,
            column: 3
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 154,
            column: 50
          },
          end: {
            line: 154,
            column: 51
          }
        },
        loc: {
          start: {
            line: 154,
            column: 61
          },
          end: {
            line: 157,
            column: 5
          }
        },
        line: 154
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 215,
            column: 43
          },
          end: {
            line: 215,
            column: 44
          }
        },
        loc: {
          start: {
            line: 215,
            column: 49
          },
          end: {
            line: 217,
            column: 5
          }
        },
        line: 215
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 219,
            column: 43
          },
          end: {
            line: 219,
            column: 44
          }
        },
        loc: {
          start: {
            line: 219,
            column: 49
          },
          end: {
            line: 226,
            column: 5
          }
        },
        line: 219
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 234,
            column: 2
          },
          end: {
            line: 234,
            column: 3
          }
        },
        loc: {
          start: {
            line: 234,
            column: 34
          },
          end: {
            line: 265,
            column: 3
          }
        },
        line: 234
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 270,
            column: 2
          },
          end: {
            line: 270,
            column: 3
          }
        },
        loc: {
          start: {
            line: 270,
            column: 22
          },
          end: {
            line: 273,
            column: 3
          }
        },
        line: 270
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 278,
            column: 2
          },
          end: {
            line: 278,
            column: 3
          }
        },
        loc: {
          start: {
            line: 278,
            column: 22
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 278
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 288,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        loc: {
          start: {
            line: 288,
            column: 16
          },
          end: {
            line: 301,
            column: 3
          }
        },
        line: 288
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 309,
            column: 2
          },
          end: {
            line: 309,
            column: 3
          }
        },
        loc: {
          start: {
            line: 309,
            column: 29
          },
          end: {
            line: 311,
            column: 3
          }
        },
        line: 309
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 322,
            column: 2
          },
          end: {
            line: 322,
            column: 3
          }
        },
        loc: {
          start: {
            line: 322,
            column: 24
          },
          end: {
            line: 336,
            column: 3
          }
        },
        line: 322
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 344,
            column: 2
          },
          end: {
            line: 344,
            column: 3
          }
        },
        loc: {
          start: {
            line: 344,
            column: 38
          },
          end: {
            line: 350,
            column: 3
          }
        },
        line: 344
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 355,
            column: 2
          },
          end: {
            line: 355,
            column: 3
          }
        },
        loc: {
          start: {
            line: 355,
            column: 13
          },
          end: {
            line: 376,
            column: 3
          }
        },
        line: 355
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 384,
            column: 2
          },
          end: {
            line: 384,
            column: 3
          }
        },
        loc: {
          start: {
            line: 384,
            column: 33
          },
          end: {
            line: 390,
            column: 3
          }
        },
        line: 384
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 398,
            column: 2
          },
          end: {
            line: 398,
            column: 3
          }
        },
        loc: {
          start: {
            line: 398,
            column: 14
          },
          end: {
            line: 410,
            column: 3
          }
        },
        line: 398
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 415,
            column: 2
          },
          end: {
            line: 415,
            column: 3
          }
        },
        loc: {
          start: {
            line: 415,
            column: 12
          },
          end: {
            line: 417,
            column: 3
          }
        },
        line: 415
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 422,
            column: 2
          },
          end: {
            line: 422,
            column: 3
          }
        },
        loc: {
          start: {
            line: 422,
            column: 25
          },
          end: {
            line: 437,
            column: 3
          }
        },
        line: 422
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 423,
            column: 42
          },
          end: {
            line: 423,
            column: 43
          }
        },
        loc: {
          start: {
            line: 423,
            column: 60
          },
          end: {
            line: 432,
            column: 5
          }
        },
        line: 423
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 442,
            column: 2
          },
          end: {
            line: 442,
            column: 3
          }
        },
        loc: {
          start: {
            line: 442,
            column: 24
          },
          end: {
            line: 451,
            column: 3
          }
        },
        line: 442
      },
      "18": {
        name: "countFileItems",
        decl: {
          start: {
            line: 514,
            column: 9
          },
          end: {
            line: 514,
            column: 23
          }
        },
        loc: {
          start: {
            line: 514,
            column: 30
          },
          end: {
            line: 525,
            column: 1
          }
        },
        line: 514
      },
      "19": {
        name: "initFileUploads",
        decl: {
          start: {
            line: 533,
            column: 16
          },
          end: {
            line: 533,
            column: 31
          }
        },
        loc: {
          start: {
            line: 533,
            column: 41
          },
          end: {
            line: 543,
            column: 1
          }
        },
        line: 533
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 540,
            column: 24
          },
          end: {
            line: 540,
            column: 25
          }
        },
        loc: {
          start: {
            line: 540,
            column: 35
          },
          end: {
            line: 542,
            column: 3
          }
        },
        line: 540
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 21
          },
          end: {
            line: 22,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 22,
            column: 30
          },
          end: {
            line: 22,
            column: 32
          }
        }],
        line: 22
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 34,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 34,
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
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 43,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 43,
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
        line: 36
      },
      "3": {
        loc: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 52,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 52,
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
        line: 47
      },
      "4": {
        loc: {
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 77,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 4
          },
          end: {
            line: 77,
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
        line: 75
      },
      "5": {
        loc: {
          start: {
            line: 88,
            column: 21
          },
          end: {
            line: 90,
            column: 18
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 89,
            column: 8
          },
          end: {
            line: 89,
            column: 37
          }
        }, {
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 90,
            column: 18
          }
        }],
        line: 88
      },
      "6": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 94,
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
        line: 92
      },
      "7": {
        loc: {
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 108,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 106,
            column: 4
          },
          end: {
            line: 108,
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
        line: 106
      },
      "8": {
        loc: {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 164,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 164,
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
        line: 161
      },
      "9": {
        loc: {
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 220,
            column: 6
          },
          end: {
            line: 223,
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
        line: 220
      },
      "10": {
        loc: {
          start: {
            line: 220,
            column: 10
          },
          end: {
            line: 220,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 220,
            column: 10
          },
          end: {
            line: 220,
            column: 37
          }
        }, {
          start: {
            line: 220,
            column: 41
          },
          end: {
            line: 220,
            column: 67
          }
        }],
        line: 220
      },
      "11": {
        loc: {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 237,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 237,
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
        line: 235
      },
      "12": {
        loc: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 264,
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
            line: 264,
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
            line: 244,
            column: 6
          },
          end: {
            line: 263,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 263,
            column: 7
          }
        }, {
          start: {
            line: 255,
            column: 13
          },
          end: {
            line: 263,
            column: 7
          }
        }],
        line: 244
      },
      "14": {
        loc: {
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 254,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 245,
            column: 8
          },
          end: {
            line: 254,
            column: 9
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
        line: 245
      },
      "15": {
        loc: {
          start: {
            line: 245,
            column: 12
          },
          end: {
            line: 245,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 245,
            column: 12
          },
          end: {
            line: 245,
            column: 30
          }
        }, {
          start: {
            line: 245,
            column: 34
          },
          end: {
            line: 245,
            column: 66
          }
        }],
        line: 245
      },
      "16": {
        loc: {
          start: {
            line: 248,
            column: 10
          },
          end: {
            line: 253,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 248,
            column: 10
          },
          end: {
            line: 253,
            column: 11
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
        line: 248
      },
      "17": {
        loc: {
          start: {
            line: 255,
            column: 13
          },
          end: {
            line: 263,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 255,
            column: 13
          },
          end: {
            line: 263,
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
        line: 255
      },
      "18": {
        loc: {
          start: {
            line: 291,
            column: 4
          },
          end: {
            line: 300,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 291,
            column: 4
          },
          end: {
            line: 300,
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
        line: 291
      },
      "19": {
        loc: {
          start: {
            line: 291,
            column: 8
          },
          end: {
            line: 291,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 291,
            column: 8
          },
          end: {
            line: 291,
            column: 26
          }
        }, {
          start: {
            line: 291,
            column: 30
          },
          end: {
            line: 291,
            column: 67
          }
        }],
        line: 291
      },
      "20": {
        loc: {
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 326,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 324,
            column: 4
          },
          end: {
            line: 326,
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
        line: 324
      },
      "21": {
        loc: {
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 331,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 329,
            column: 4
          },
          end: {
            line: 331,
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
        line: 329
      },
      "22": {
        loc: {
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 347,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 345,
            column: 4
          },
          end: {
            line: 347,
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
        line: 345
      },
      "23": {
        loc: {
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 359,
            column: 4
          },
          end: {
            line: 375,
            column: 5
          }
        }, {
          start: {
            line: 363,
            column: 11
          },
          end: {
            line: 375,
            column: 5
          }
        }],
        line: 359
      },
      "24": {
        loc: {
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 372,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 364,
            column: 6
          },
          end: {
            line: 372,
            column: 7
          }
        }, {
          start: {
            line: 369,
            column: 13
          },
          end: {
            line: 372,
            column: 7
          }
        }],
        line: 364
      },
      "25": {
        loc: {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
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
        line: 385
      },
      "26": {
        loc: {
          start: {
            line: 402,
            column: 4
          },
          end: {
            line: 407,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 402,
            column: 4
          },
          end: {
            line: 407,
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
        line: 402
      },
      "27": {
        loc: {
          start: {
            line: 425,
            column: 8
          },
          end: {
            line: 430,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 425,
            column: 8
          },
          end: {
            line: 430,
            column: 9
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
        line: 425
      },
      "28": {
        loc: {
          start: {
            line: 426,
            column: 10
          },
          end: {
            line: 427,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 426,
            column: 10
          },
          end: {
            line: 426,
            column: 40
          }
        }, {
          start: {
            line: 427,
            column: 10
          },
          end: {
            line: 427,
            column: 47
          }
        }],
        line: 426
      },
      "29": {
        loc: {
          start: {
            line: 445,
            column: 31
          },
          end: {
            line: 447,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 446,
            column: 8
          },
          end: {
            line: 446,
            column: 36
          }
        }, {
          start: {
            line: 447,
            column: 8
          },
          end: {
            line: 447,
            column: 44
          }
        }],
        line: 445
      },
      "30": {
        loc: {
          start: {
            line: 520,
            column: 4
          },
          end: {
            line: 522,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 520,
            column: 4
          },
          end: {
            line: 522,
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
        line: 520
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
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0
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
      "4": [0, 0],
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
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "55c83e9d690f32a02bad0bf63f08cef61ed56c56"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1llus6ohot = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1llus6ohot();

/**
 * File upload component
 *
 * @augments {ConfigurableComponent<FileUploadConfig>}
 */
class FileUpload extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - File input element
   * @param {Partial<FileUploadConfig>} [config] - File Upload config
   */
  constructor($root, config = (cov_1llus6ohot().b[0][0]++, {})) {
    cov_1llus6ohot().f[0]++;
    cov_1llus6ohot().s[0]++;
    super($root, config);
    /**
     * @type {boolean | undefined}
     */
    this.enteredAnotherElement = void 0;
    const $input = (cov_1llus6ohot().s[1]++, this.$root.querySelector('input'));
    cov_1llus6ohot().s[2]++;
    if (!($input instanceof HTMLInputElement)) {
      cov_1llus6ohot().b[1][0]++;
      cov_1llus6ohot().s[3]++;
      throw new ElementError({
        component: FileUpload,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`<input>`)'
      });
    } else {
      cov_1llus6ohot().b[1][1]++;
    }
    cov_1llus6ohot().s[4]++;
    if ($input.type !== 'file') {
      cov_1llus6ohot().b[2][0]++;
      cov_1llus6ohot().s[5]++;
      throw new ElementError({
        component: FileUpload,
        element: $input,
        identifier: 'Form field (`<input>`)',
        expectedType: 'HTMLInputElement with attribute (`type="file"`)'
      });
    } else {
      cov_1llus6ohot().b[2][1]++;
    }
    cov_1llus6ohot().s[6]++;
    this.$input = $input;
    cov_1llus6ohot().s[7]++;
    if (!this.$input.id) {
      cov_1llus6ohot().b[3][0]++;
      cov_1llus6ohot().s[8]++;
      throw new ElementError({
        component: FileUpload,
        identifier: 'File input (`<input type="file">`) attribute (`id`)'
      });
    } else {
      cov_1llus6ohot().b[3][1]++;
    }
    cov_1llus6ohot().s[9]++;
    this.id = this.$input.id;
    const {
      i18n,
      dropZoneClass,
      dropButtonClass,
      dropButtonGroupClass,
      dropInstructionClass,
      chooseFilesButtonClass,
      announcementsClass,
      statusClass
    } = (cov_1llus6ohot().s[10]++, this.config);
    cov_1llus6ohot().s[11]++;
    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });
    const $label = (cov_1llus6ohot().s[12]++, this.findLabel());
    // Add an ID to the label if it doesn't have one already
    // so it can be referenced by `aria-labelledby`
    cov_1llus6ohot().s[13]++;
    if (!$label.id) {
      cov_1llus6ohot().b[4][0]++;
      cov_1llus6ohot().s[14]++;
      $label.id = `${this.id}-label`;
    } else {
      cov_1llus6ohot().b[4][1]++;
    }

    // We need to copy the 'id' of the root element
    // to the new button replacement element
    // so that focus will work in the error summary
    cov_1llus6ohot().s[15]++;
    this.$input.id = `${this.id}-input`;

    // Hide the native input
    cov_1llus6ohot().s[16]++;
    this.$input.setAttribute('hidden', '');

    // Locate or create the file drop zone
    cov_1llus6ohot().s[17]++;
    this.$dropZone = !this.$root.classList.contains(dropZoneClass) ? (cov_1llus6ohot().b[5][0]++, document.createElement('div')) : (cov_1llus6ohot().b[5][1]++, this.$root);
    cov_1llus6ohot().s[18]++;
    if (this.$root !== this.$dropZone) {
      cov_1llus6ohot().b[6][0]++;
      cov_1llus6ohot().s[19]++;
      this.$dropZone.classList.add(dropZoneClass);
    } else {
      cov_1llus6ohot().b[6][1]++;
    }

    // Create the file selection button
    cov_1llus6ohot().s[20]++;
    this.$dropButton = document.createElement('button');
    cov_1llus6ohot().s[21]++;
    this.$dropButton.classList.add(dropButtonClass);
    cov_1llus6ohot().s[22]++;
    this.$dropButton.type = 'button';
    cov_1llus6ohot().s[23]++;
    this.$dropButton.id = this.id;
    cov_1llus6ohot().s[24]++;
    this.$dropButton.classList.add(`${dropButtonClass}--empty`);

    // Copy `aria-describedby` if present so hints and errors
    // are associated to the `<button>`
    const ariaDescribedBy = (cov_1llus6ohot().s[25]++, this.$input.getAttribute('aria-describedby'));
    cov_1llus6ohot().s[26]++;
    if (ariaDescribedBy) {
      cov_1llus6ohot().b[7][0]++;
      cov_1llus6ohot().s[27]++;
      this.$dropButton.setAttribute('aria-describedby', ariaDescribedBy);
    } else {
      cov_1llus6ohot().b[7][1]++;
    }

    // Create status element that shows what/how many files are selected
    cov_1llus6ohot().s[28]++;
    this.$status = document.createElement('span');
    cov_1llus6ohot().s[29]++;
    this.$status.classList.add('nhsuk-body', statusClass);
    cov_1llus6ohot().s[30]++;
    this.$status.setAttribute('aria-live', 'polite');
    cov_1llus6ohot().s[31]++;
    this.$status.innerText = this.formatStatusMessage(0);
    cov_1llus6ohot().s[32]++;
    this.$dropButton.appendChild(this.$status);
    const $statusComma = (cov_1llus6ohot().s[33]++, document.createElement('span'));
    cov_1llus6ohot().s[34]++;
    $statusComma.classList.add('nhsuk-u-visually-hidden');
    cov_1llus6ohot().s[35]++;
    $statusComma.innerText = ', ';
    cov_1llus6ohot().s[36]++;
    $statusComma.id = `${this.id}-comma`;
    cov_1llus6ohot().s[37]++;
    this.$dropButton.appendChild($statusComma);
    const $dropButtonGroup = (cov_1llus6ohot().s[38]++, document.createElement('span'));
    cov_1llus6ohot().s[39]++;
    $dropButtonGroup.classList.add('nhsuk-button-group', dropButtonGroupClass);
    const $chooseFilesButton = (cov_1llus6ohot().s[40]++, document.createElement('span'));
    cov_1llus6ohot().s[41]++;
    $chooseFilesButton.classList.add('nhsuk-button', 'nhsuk-button--secondary', chooseFilesButtonClass);
    cov_1llus6ohot().s[42]++;
    $chooseFilesButton.innerText = this.i18n.t('chooseFilesButton');
    cov_1llus6ohot().s[43]++;
    $dropButtonGroup.appendChild($chooseFilesButton);

    // Add a space so the button and instruction read correctly
    // when CSS is disabled
    cov_1llus6ohot().s[44]++;
    $dropButtonGroup.append(' ');
    const $dropInstruction = (cov_1llus6ohot().s[45]++, document.createElement('span'));
    cov_1llus6ohot().s[46]++;
    $dropInstruction.classList.add('nhsuk-body', dropInstructionClass);
    cov_1llus6ohot().s[47]++;
    $dropInstruction.innerText = this.i18n.t('dropInstruction');
    cov_1llus6ohot().s[48]++;
    $dropButtonGroup.appendChild($dropInstruction);
    cov_1llus6ohot().s[49]++;
    this.$dropButton.appendChild($dropButtonGroup);
    cov_1llus6ohot().s[50]++;
    this.$dropButton.setAttribute('aria-labelledby', `${$label.id} ${$statusComma.id} ${this.$dropButton.id}`);
    cov_1llus6ohot().s[51]++;
    this.$dropButton.addEventListener('click', this.onClick.bind(this));
    cov_1llus6ohot().s[52]++;
    this.$dropButton.addEventListener('dragover', event => {
      cov_1llus6ohot().f[1]++;
      cov_1llus6ohot().s[53]++;
      // prevent default to allow drop
      event.preventDefault();
    });

    // For backwards compatibility with GOV.UK Frontend, optionally replace
    // the native input with the drop zone unless already in the HTML
    cov_1llus6ohot().s[54]++;
    if (!this.$dropZone.parentElement) {
      var _this$$input$parentEl;
      cov_1llus6ohot().b[8][0]++;
      cov_1llus6ohot().s[55]++;
      (_this$$input$parentEl = this.$input.parentElement) == null || _this$$input$parentEl.insertBefore(this.$dropZone, this.$input);
      cov_1llus6ohot().s[56]++;
      this.$dropZone.appendChild(this.$input);
    } else {
      cov_1llus6ohot().b[8][1]++;
    }

    // Assemble these all together
    cov_1llus6ohot().s[57]++;
    this.$dropZone.insertAdjacentElement('afterbegin', this.$dropButton);
    cov_1llus6ohot().s[58]++;
    this.$input.setAttribute('tabindex', '-1');
    cov_1llus6ohot().s[59]++;
    this.$input.setAttribute('aria-hidden', 'true');

    // Bind change event to the underlying input
    cov_1llus6ohot().s[60]++;
    this.$input.addEventListener('change', this.onChange.bind(this));

    // Synchronise the `disabled` state between the button and underlying input
    cov_1llus6ohot().s[61]++;
    this.updateDisabledState();
    cov_1llus6ohot().s[62]++;
    this.observeDisabledState();

    // Handle drop zone visibility
    // A live region to announce when users enter or leave the drop zone
    cov_1llus6ohot().s[63]++;
    this.$announcements = document.createElement('span');
    cov_1llus6ohot().s[64]++;
    this.$announcements.classList.add(announcementsClass, 'nhsuk-u-visually-hidden');
    cov_1llus6ohot().s[65]++;
    this.$announcements.setAttribute('aria-live', 'assertive');
    cov_1llus6ohot().s[66]++;
    this.$dropZone.insertAdjacentElement('afterend', this.$announcements);

    // if there is no CSS and input is hidden
    // button will need to handle drop event
    cov_1llus6ohot().s[67]++;
    this.$dropButton.addEventListener('drop', this.onDrop.bind(this));

    // While user is dragging, it gets a little more complex because of Safari.
    // Safari doesn't fill `relatedTarget` on `dragleave` (nor `dragenter`).
    // This means we can't use `relatedTarget` to:
    // - check if the user is still within the wrapper
    //   (`relatedTarget` being a descendant of the wrapper)
    // - check if the user is still over the viewport
    //   (`relatedTarget` being null if outside)

    // Thanks to `dragenter` bubbling, we can listen on the `document` with a
    // single function and update the visibility based on whether we entered a
    // node inside or outside the wrapper.
    cov_1llus6ohot().s[68]++;
    document.addEventListener('dragenter', this.updateDropzoneVisibility.bind(this));

    // To detect if we're outside the document, we can track if there was a
    // `dragenter` event preceding a `dragleave`. If there wasn't, this means
    // we're outside the document.
    //
    // The order of events is guaranteed by the HTML specs:
    // https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model
    cov_1llus6ohot().s[69]++;
    document.addEventListener('dragenter', () => {
      cov_1llus6ohot().f[2]++;
      cov_1llus6ohot().s[70]++;
      this.enteredAnotherElement = true;
    });
    cov_1llus6ohot().s[71]++;
    document.addEventListener('dragleave', () => {
      cov_1llus6ohot().f[3]++;
      cov_1llus6ohot().s[72]++;
      if ((cov_1llus6ohot().b[10][0]++, !this.enteredAnotherElement) && (cov_1llus6ohot().b[10][1]++, !this.$dropButton.disabled)) {
        cov_1llus6ohot().b[9][0]++;
        cov_1llus6ohot().s[73]++;
        this.hideDraggingState();
        cov_1llus6ohot().s[74]++;
        this.$announcements.innerText = this.i18n.t('leftDropZone');
      } else {
        cov_1llus6ohot().b[9][1]++;
      }
      cov_1llus6ohot().s[75]++;
      this.enteredAnotherElement = false;
    });
  }

  /**
   * Updates the visibility of the dropzone as users enters the various elements on the page
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  updateDropzoneVisibility(event) {
    cov_1llus6ohot().f[4]++;
    cov_1llus6ohot().s[76]++;
    if (this.$dropButton.disabled) {
      cov_1llus6ohot().b[11][0]++;
      cov_1llus6ohot().s[77]++;
      return;
    } else {
      cov_1llus6ohot().b[11][1]++;
    }
    const {
      dropButtonClass
    } = (cov_1llus6ohot().s[78]++, this.config);

    // DOM interfaces only type `event.target` as `EventTarget`
    // so we first need to make sure it's a `Node`
    cov_1llus6ohot().s[79]++;
    if (event.target instanceof Node) {
      cov_1llus6ohot().b[12][0]++;
      cov_1llus6ohot().s[80]++;
      if (this.$dropZone.contains(event.target)) {
        cov_1llus6ohot().b[13][0]++;
        cov_1llus6ohot().s[81]++;
        if ((cov_1llus6ohot().b[15][0]++, event.dataTransfer) && (cov_1llus6ohot().b[15][1]++, this.canDrop(event.dataTransfer))) {
          cov_1llus6ohot().b[14][0]++;
          cov_1llus6ohot().s[82]++;
          // Only update the class and make the announcement if not already visible
          // to avoid repeated announcements on NVDA (2024.4) + Firefox (133)
          if (!this.$dropButton.classList.contains(`${dropButtonClass}--dragging`)) {
            cov_1llus6ohot().b[16][0]++;
            cov_1llus6ohot().s[83]++;
            this.showDraggingState();
            cov_1llus6ohot().s[84]++;
            this.$announcements.innerText = this.i18n.t('enteredDropZone');
          } else {
            cov_1llus6ohot().b[16][1]++;
          }
        } else {
          cov_1llus6ohot().b[14][1]++;
        }
      } else {
        cov_1llus6ohot().b[13][1]++;
        cov_1llus6ohot().s[85]++;
        if (this.$dropButton.classList.contains(`${dropButtonClass}--dragging`)) {
          cov_1llus6ohot().b[17][0]++;
          cov_1llus6ohot().s[86]++;
          // Only hide the dropzone if it is visible to prevent announcing user
          // left the drop zone when they enter the page but haven't reached yet
          // the file upload component
          this.hideDraggingState();
          cov_1llus6ohot().s[87]++;
          this.$announcements.innerText = this.i18n.t('leftDropZone');
        } else {
          cov_1llus6ohot().b[17][1]++;
        }
      }
    } else {
      cov_1llus6ohot().b[12][1]++;
    }
  }

  /**
   * Show the drop zone visually
   */
  showDraggingState() {
    cov_1llus6ohot().f[5]++;
    const {
      dropButtonClass
    } = (cov_1llus6ohot().s[88]++, this.config);
    cov_1llus6ohot().s[89]++;
    this.$dropButton.classList.add(`${dropButtonClass}--dragging`);
  }

  /**
   * Hides the drop zone visually
   */
  hideDraggingState() {
    cov_1llus6ohot().f[6]++;
    const {
      dropButtonClass
    } = (cov_1llus6ohot().s[90]++, this.config);
    cov_1llus6ohot().s[91]++;
    this.$dropButton.classList.remove(`${dropButtonClass}--dragging`);
  }

  /**
   * Handles user dropping on the component
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  onDrop(event) {
    cov_1llus6ohot().f[7]++;
    cov_1llus6ohot().s[92]++;
    event.preventDefault();
    cov_1llus6ohot().s[93]++;
    if ((cov_1llus6ohot().b[19][0]++, event.dataTransfer) && (cov_1llus6ohot().b[19][1]++, this.canFillInput(event.dataTransfer))) {
      cov_1llus6ohot().b[18][0]++;
      cov_1llus6ohot().s[94]++;
      this.$input.files = event.dataTransfer.files;

      // Dispatch a `change` event so external code that would rely on the `<input>`
      // dispatching an event when files are dropped still work.
      // Use a `CustomEvent` so our events are distinguishable from browser's native events
      cov_1llus6ohot().s[95]++;
      this.$input.dispatchEvent(new CustomEvent('change'));
      cov_1llus6ohot().s[96]++;
      this.hideDraggingState();
    } else {
      cov_1llus6ohot().b[18][1]++;
    }
  }

  /**
   * Confirms if enhanced `<input>` can be filled with files from the given `DataTransfer`
   *
   * @param {DataTransfer} dataTransfer - The `DataTransfer` being dropped
   * @returns {boolean} Whether the `DataTransfer` contains files, in number matching the `multiple` attribute of the original `<input>`
   */
  canFillInput(dataTransfer) {
    cov_1llus6ohot().f[8]++;
    cov_1llus6ohot().s[97]++;
    return this.matchesInputCapacity(dataTransfer.files.length);
  }

  /**
   * Confirms if the content of a `DataTransfer` dragged over component can be dropped
   *
   * Unfortunately, there's a certain level of uncertainty in Safari which does not
   * even provide a list of `items` while dragging (and seems to even miss the `types` sometimes)
   *
   * @param {DataTransfer} dataTransfer - The `DataTransfer` being dragged
   * @returns {boolean} Whether the `DataTransfer` looks OK for filling the input, false otherwise
   */
  canDrop(dataTransfer) {
    cov_1llus6ohot().f[9]++;
    cov_1llus6ohot().s[98]++;
    // If the browser is kind enough to give a list of items, we'll use that as source of truth
    if (dataTransfer.items.length) {
      cov_1llus6ohot().b[20][0]++;
      cov_1llus6ohot().s[99]++;
      return this.matchesInputCapacity(countFileItems(dataTransfer.items));
    } else {
      cov_1llus6ohot().b[20][1]++;
    }

    // If we have some type information, we'll use that
    cov_1llus6ohot().s[100]++;
    if (dataTransfer.types.length) {
      cov_1llus6ohot().b[21][0]++;
      cov_1llus6ohot().s[101]++;
      return dataTransfer.types.includes('Files');
    } else {
      cov_1llus6ohot().b[21][1]++;
    }

    // If we have nothing to go by, we'll assume things are OK
    // until we have a more accurate picture inside the `drop` event
    cov_1llus6ohot().s[102]++;
    return true;
  }

  /**
   * Confirms the given number of files matches that allowed by the enhanced `<input>`
   *
   * @param {number} numberOfFiles - The number of files
   * @returns {boolean} Whether the enhanced `<input>` can accept that number of files
   */
  matchesInputCapacity(numberOfFiles) {
    cov_1llus6ohot().f[10]++;
    cov_1llus6ohot().s[103]++;
    if (this.$input.multiple) {
      cov_1llus6ohot().b[22][0]++;
      cov_1llus6ohot().s[104]++;
      return numberOfFiles > 0;
    } else {
      cov_1llus6ohot().b[22][1]++;
    }
    cov_1llus6ohot().s[105]++;
    return numberOfFiles === 1;
  }

  /**
   * Check if the value of the underlying input has changed
   */
  onChange() {
    cov_1llus6ohot().f[11]++;
    const {
      dropButtonClass
    } = (cov_1llus6ohot().s[106]++, this.config);
    const {
      files
    } = (cov_1llus6ohot().s[107]++, this.$input);
    cov_1llus6ohot().s[108]++;
    if (!(files != null && files.length)) {
      cov_1llus6ohot().b[23][0]++;
      cov_1llus6ohot().s[109]++;
      // If there are no files, show the default selection text
      this.$status.innerText = this.formatStatusMessage(0);
      cov_1llus6ohot().s[110]++;
      this.$dropButton.classList.add(`${dropButtonClass}--empty`);
    } else {
      cov_1llus6ohot().b[23][1]++;
      cov_1llus6ohot().s[111]++;
      if (
      // If there is 1 file, just show the file name
      files.length === 1) {
        cov_1llus6ohot().b[24][0]++;
        cov_1llus6ohot().s[112]++;
        this.$status.innerText = files[0].name;
      } else {
        cov_1llus6ohot().b[24][1]++;
        cov_1llus6ohot().s[113]++;
        // Otherwise, tell the user how many files are selected
        this.$status.innerText = this.formatStatusMessage(files.length);
      }
      cov_1llus6ohot().s[114]++;
      this.$dropButton.classList.remove(`${dropButtonClass}--empty`);
    }
  }

  /**
   * Formats the message shown to users according to files chosen
   *
   * @param {number} fileCount - The number of files chosen
   * @returns {string} Status message
   */
  formatStatusMessage(fileCount) {
    cov_1llus6ohot().f[12]++;
    cov_1llus6ohot().s[115]++;
    if (fileCount === 0) {
      cov_1llus6ohot().b[25][0]++;
      cov_1llus6ohot().s[116]++;
      return this.i18n.t('noFileChosen');
    } else {
      cov_1llus6ohot().b[25][1]++;
    }
    cov_1llus6ohot().s[117]++;
    return this.i18n.t('multipleFilesChosen', {
      count: fileCount
    });
  }

  /**
   * Looks up the `<label>` element associated to the field
   *
   * @returns {HTMLElement} The `<label>` element associated to the field
   * @throws {ElementError} If the `<label>` cannot be found
   */
  findLabel() {
    cov_1llus6ohot().f[13]++;
    // Use `label` in the selector so TypeScript knows the type of `HTMLElement`
    const $label = (cov_1llus6ohot().s[118]++, document.querySelector(`label[for="${this.$input.id}"]`));
    cov_1llus6ohot().s[119]++;
    if (!$label) {
      cov_1llus6ohot().b[26][0]++;
      cov_1llus6ohot().s[120]++;
      throw new ElementError({
        component: FileUpload,
        identifier: `Field label (\`<label for=${this.$input.id}>\`)`
      });
    } else {
      cov_1llus6ohot().b[26][1]++;
    }
    cov_1llus6ohot().s[121]++;
    return $label;
  }

  /**
   * When the button is clicked, emulate clicking the actual, hidden file input
   */
  onClick() {
    cov_1llus6ohot().f[14]++;
    cov_1llus6ohot().s[122]++;
    this.$input.click();
  }

  /**
   * Create a mutation observer to check if the input's attributes altered.
   */
  observeDisabledState() {
    cov_1llus6ohot().f[15]++;
    const observer = (cov_1llus6ohot().s[123]++, new MutationObserver(mutationList => {
      cov_1llus6ohot().f[16]++;
      cov_1llus6ohot().s[124]++;
      for (const mutation of mutationList) {
        cov_1llus6ohot().s[125]++;
        if ((cov_1llus6ohot().b[28][0]++, mutation.type === 'attributes') && (cov_1llus6ohot().b[28][1]++, mutation.attributeName === 'disabled')) {
          cov_1llus6ohot().b[27][0]++;
          cov_1llus6ohot().s[126]++;
          this.updateDisabledState();
        } else {
          cov_1llus6ohot().b[27][1]++;
        }
      }
    }));
    cov_1llus6ohot().s[127]++;
    observer.observe(this.$input, {
      attributes: true
    });
  }

  /**
   * Synchronise the `disabled` state between the input and replacement button.
   */
  updateDisabledState() {
    cov_1llus6ohot().f[17]++;
    const {
      dropZoneClass
    } = (cov_1llus6ohot().s[128]++, this.config);
    const disabledStateClass = (cov_1llus6ohot().s[129]++, this.$root.classList.contains(dropZoneClass) ? (cov_1llus6ohot().b[29][0]++, `${dropZoneClass}--disabled`) : (cov_1llus6ohot().b[29][1]++, `${FileUpload.moduleName}--disabled`));
    cov_1llus6ohot().s[130]++;
    this.$dropButton.disabled = this.$input.disabled;
    cov_1llus6ohot().s[131]++;
    this.$root.classList.toggle(disabledStateClass, this.$dropButton.disabled);
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
}

/**
 * Counts the number of `DataTransferItem` whose kind is `file`
 *
 * @param {DataTransferItemList} list - The list
 * @returns {number} The number of items whose kind is `file` in the list
 */
FileUpload.moduleName = (cov_1llus6ohot().s[132]++, 'nhsuk-file-upload');
/**
 * File upload default config
 *
 * @see {@link FileUploadConfig}
 * @constant
 * @type {FileUploadConfig}
 */
FileUpload.defaults = (cov_1llus6ohot().s[133]++, Object.freeze({
  dropZoneClass: 'nhsuk-file-upload__drop-zone',
  dropButtonClass: 'nhsuk-file-upload__drop-button',
  dropButtonGroupClass: 'nhsuk-file-upload__drop-button-group',
  dropInstructionClass: 'nhsuk-file-upload__drop-instruction',
  chooseFilesButtonClass: 'nhsuk-file-upload__choose-files-button',
  announcementsClass: 'nhsuk-file-upload__announcements',
  statusClass: 'nhsuk-file-upload__status',
  i18n: {
    chooseFilesButton: 'Choose file',
    dropInstruction: 'or drop file',
    noFileChosen: 'No file chosen',
    multipleFilesChosen: {
      // the 'one' string isn't used as the component displays the filename
      // instead, however it's here for coverage's sake
      one: '%{count} file chosen',
      other: '%{count} files chosen'
    },
    enteredDropZone: 'Entered drop zone',
    leftDropZone: 'Left drop zone'
  }
}));
/**
 * File upload config schema
 *
 * @constant
 * @satisfies {Schema<FileUploadConfig>}
 */
FileUpload.schema = (cov_1llus6ohot().s[134]++, Object.freeze({
  properties: {
    dropZoneClass: {
      type: 'string'
    },
    dropButtonClass: {
      type: 'string'
    },
    dropButtonGroupClass: {
      type: 'string'
    },
    dropInstructionClass: {
      type: 'string'
    },
    chooseFilesButtonClass: {
      type: 'string'
    },
    announcementsClass: {
      type: 'string'
    },
    statusClass: {
      type: 'string'
    },
    i18n: {
      type: 'object'
    }
  }
}));
function countFileItems(list) {
  cov_1llus6ohot().f[18]++;
  let result = (cov_1llus6ohot().s[135]++, 0);

  // `DataTransferItemList` is not iterable
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  cov_1llus6ohot().s[136]++;
  for (let i = (cov_1llus6ohot().s[137]++, 0); i < list.length; i++) {
    cov_1llus6ohot().s[138]++;
    if (list[i].kind === 'file') {
      cov_1llus6ohot().b[30][0]++;
      cov_1llus6ohot().s[139]++;
      result++;
    } else {
      cov_1llus6ohot().b[30][1]++;
    }
  }
  cov_1llus6ohot().s[140]++;
  return result;
}

/**
 * Initialise file upload component
 *
 * @deprecated Use {@link createAll | `createAll(FileUpload, options)`} instead.
 * @param {InitOptions & Partial<FileUploadConfig>} [options]
 */
function initFileUploads(options) {
  cov_1llus6ohot().f[19]++;
  const {
    scope: $scope
  } = (cov_1llus6ohot().s[141]++, normaliseOptions(options));
  const $fileUploads = (cov_1llus6ohot().s[142]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${FileUpload.moduleName}"]`));
  cov_1llus6ohot().s[143]++;
  $fileUploads == null || $fileUploads.forEach($root => {
    cov_1llus6ohot().f[20]++;
    cov_1llus6ohot().s[144]++;
    new FileUpload($root, options);
  });
}

/**
 * File upload config
 *
 * @see {@link FileUpload.defaults}
 * @typedef {object} FileUploadConfig
 * @property {string} dropZoneClass - Drop zone class
 * @property {string} dropButtonClass - Drop button class
 * @property {string} dropButtonGroupClass - Drop button group class
 * @property {string} dropInstructionClass - Drop instruction class
 * @property {string} chooseFilesButtonClass - Choose files button class
 * @property {string} announcementsClass - Announcements class
 * @property {string} statusClass - Status class
 * @property {FileUploadTranslations} [i18n=FileUpload.defaults.i18n] - File upload translations
 */

/**
 * File upload translations
 *
 * @see {@link FileUpload.defaults.i18n}
 * @typedef {object} FileUploadTranslations
 *
 * Messages used by the component
 * @property {string} [chooseFilesButton] - The text of the button that opens the file picker
 * @property {string} [dropInstruction] - The text informing users they can drop files
 * @property {TranslationPluralForms} [multipleFilesChosen] - The text displayed when multiple files
 *   have been chosen by the user
 * @property {string} [noFileChosen] - The text to displayed when no file has been chosen by the user
 * @property {string} [enteredDropZone] - The text announced by assistive technology
 *   when user drags files and enters the drop zone
 * @property {string} [leftDropZone] - The text announced by assistive technology
 *   when user drags files and leaves the drop zone without dropping
 */

/**
 * @import { Schema } from '../../common/configuration/index.mjs'
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { TranslationPluralForms } from '../../i18n.mjs'
 */

export { FileUpload, initFileUploads };
//# sourceMappingURL=file-upload.mjs.map
