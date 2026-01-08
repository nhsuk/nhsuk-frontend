import { closestAttributeValue } from '../../common/closest-attribute-value.mjs';
import '../../common/configuration/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { I18n } from '../../i18n.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_ku40ithfn() {
  var path = "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs";
  var hash = "3f642d8172a298b2fa7f7069e33980233818514c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/colin/Sites/NHS/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/file-upload/file-upload.mjs",
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
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 19
        }
      },
      "11": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 71,
          column: 6
        }
      },
      "12": {
        start: {
          line: 73,
          column: 19
        },
        end: {
          line: 73,
          column: 35
        }
      },
      "13": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 78,
          column: 5
        }
      },
      "14": {
        start: {
          line: 77,
          column: 6
        },
        end: {
          line: 77,
          column: 36
        }
      },
      "15": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 39
        }
      },
      "16": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 42
        }
      },
      "17": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 91,
          column: 37
        }
      },
      "18": {
        start: {
          line: 93,
          column: 4
        },
        end: {
          line: 95,
          column: 5
        }
      },
      "19": {
        start: {
          line: 94,
          column: 6
        },
        end: {
          line: 94,
          column: 49
        }
      },
      "20": {
        start: {
          line: 98,
          column: 4
        },
        end: {
          line: 98,
          column: 55
        }
      },
      "21": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 51
        }
      },
      "22": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 36
        }
      },
      "23": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 33
        }
      },
      "24": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 102,
          column: 63
        }
      },
      "25": {
        start: {
          line: 106,
          column: 28
        },
        end: {
          line: 106,
          column: 72
        }
      },
      "26": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "27": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 72
        }
      },
      "28": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 49
        }
      },
      "29": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 113,
          column: 57
        }
      },
      "30": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 52
        }
      },
      "31": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 115,
          column: 56
        }
      },
      "32": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 117,
          column: 46
        }
      },
      "33": {
        start: {
          line: 119,
          column: 25
        },
        end: {
          line: 119,
          column: 55
        }
      },
      "34": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 57
        }
      },
      "35": {
        start: {
          line: 121,
          column: 4
        },
        end: {
          line: 121,
          column: 33
        }
      },
      "36": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 40
        }
      },
      "37": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 124,
          column: 46
        }
      },
      "38": {
        start: {
          line: 126,
          column: 29
        },
        end: {
          line: 126,
          column: 59
        }
      },
      "39": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 56
        }
      },
      "40": {
        start: {
          line: 129,
          column: 31
        },
        end: {
          line: 129,
          column: 61
        }
      },
      "41": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 134,
          column: 5
        }
      },
      "42": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 67
        }
      },
      "43": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 52
        }
      },
      "44": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 32
        }
      },
      "45": {
        start: {
          line: 143,
          column: 29
        },
        end: {
          line: 143,
          column: 59
        }
      },
      "46": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 70
        }
      },
      "47": {
        start: {
          line: 145,
          column: 4
        },
        end: {
          line: 145,
          column: 63
        }
      },
      "48": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 50
        }
      },
      "49": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 149,
          column: 50
        }
      },
      "50": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 153,
          column: 5
        }
      },
      "51": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 71
        }
      },
      "52": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 158,
          column: 6
        }
      },
      "53": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 157,
          column: 28
        }
      },
      "54": {
        start: {
          line: 162,
          column: 4
        },
        end: {
          line: 165,
          column: 5
        }
      },
      "55": {
        start: {
          line: 163,
          column: 6
        },
        end: {
          line: 163,
          column: 74
        }
      },
      "56": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 45
        }
      },
      "57": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 168,
          column: 72
        }
      },
      "58": {
        start: {
          line: 170,
          column: 4
        },
        end: {
          line: 170,
          column: 46
        }
      },
      "59": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 51
        }
      },
      "60": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 68
        }
      },
      "61": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 30
        }
      },
      "62": {
        start: {
          line: 178,
          column: 4
        },
        end: {
          line: 178,
          column: 31
        }
      },
      "63": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 56
        }
      },
      "64": {
        start: {
          line: 183,
          column: 4
        },
        end: {
          line: 186,
          column: 5
        }
      },
      "65": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 187,
          column: 62
        }
      },
      "66": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 188,
          column: 73
        }
      },
      "67": {
        start: {
          line: 192,
          column: 4
        },
        end: {
          line: 192,
          column: 69
        }
      },
      "68": {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 208,
          column: 5
        }
      },
      "69": {
        start: {
          line: 216,
          column: 4
        },
        end: {
          line: 218,
          column: 6
        }
      },
      "70": {
        start: {
          line: 217,
          column: 6
        },
        end: {
          line: 217,
          column: 39
        }
      },
      "71": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 227,
          column: 6
        }
      },
      "72": {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 224,
          column: 7
        }
      },
      "73": {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 222,
          column: 32
        }
      },
      "74": {
        start: {
          line: 223,
          column: 8
        },
        end: {
          line: 223,
          column: 67
        }
      },
      "75": {
        start: {
          line: 226,
          column: 6
        },
        end: {
          line: 226,
          column: 40
        }
      },
      "76": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 238,
          column: 5
        }
      },
      "77": {
        start: {
          line: 237,
          column: 6
        },
        end: {
          line: 237,
          column: 12
        }
      },
      "78": {
        start: {
          line: 240,
          column: 32
        },
        end: {
          line: 240,
          column: 43
        }
      },
      "79": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 265,
          column: 5
        }
      },
      "80": {
        start: {
          line: 245,
          column: 6
        },
        end: {
          line: 264,
          column: 7
        }
      },
      "81": {
        start: {
          line: 246,
          column: 8
        },
        end: {
          line: 255,
          column: 9
        }
      },
      "82": {
        start: {
          line: 249,
          column: 10
        },
        end: {
          line: 254,
          column: 11
        }
      },
      "83": {
        start: {
          line: 252,
          column: 12
        },
        end: {
          line: 252,
          column: 36
        }
      },
      "84": {
        start: {
          line: 253,
          column: 12
        },
        end: {
          line: 253,
          column: 74
        }
      },
      "85": {
        start: {
          line: 256,
          column: 13
        },
        end: {
          line: 264,
          column: 7
        }
      },
      "86": {
        start: {
          line: 262,
          column: 8
        },
        end: {
          line: 262,
          column: 32
        }
      },
      "87": {
        start: {
          line: 263,
          column: 8
        },
        end: {
          line: 263,
          column: 67
        }
      },
      "88": {
        start: {
          line: 272,
          column: 32
        },
        end: {
          line: 272,
          column: 43
        }
      },
      "89": {
        start: {
          line: 273,
          column: 4
        },
        end: {
          line: 273,
          column: 66
        }
      },
      "90": {
        start: {
          line: 280,
          column: 32
        },
        end: {
          line: 280,
          column: 43
        }
      },
      "91": {
        start: {
          line: 281,
          column: 4
        },
        end: {
          line: 281,
          column: 69
        }
      },
      "92": {
        start: {
          line: 290,
          column: 4
        },
        end: {
          line: 290,
          column: 26
        }
      },
      "93": {
        start: {
          line: 292,
          column: 4
        },
        end: {
          line: 301,
          column: 5
        }
      },
      "94": {
        start: {
          line: 293,
          column: 6
        },
        end: {
          line: 293,
          column: 50
        }
      },
      "95": {
        start: {
          line: 298,
          column: 6
        },
        end: {
          line: 298,
          column: 58
        }
      },
      "96": {
        start: {
          line: 300,
          column: 6
        },
        end: {
          line: 300,
          column: 30
        }
      },
      "97": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 311,
          column: 63
        }
      },
      "98": {
        start: {
          line: 325,
          column: 4
        },
        end: {
          line: 327,
          column: 5
        }
      },
      "99": {
        start: {
          line: 326,
          column: 6
        },
        end: {
          line: 326,
          column: 74
        }
      },
      "100": {
        start: {
          line: 330,
          column: 4
        },
        end: {
          line: 332,
          column: 5
        }
      },
      "101": {
        start: {
          line: 331,
          column: 6
        },
        end: {
          line: 331,
          column: 49
        }
      },
      "102": {
        start: {
          line: 336,
          column: 4
        },
        end: {
          line: 336,
          column: 15
        }
      },
      "103": {
        start: {
          line: 346,
          column: 4
        },
        end: {
          line: 348,
          column: 5
        }
      },
      "104": {
        start: {
          line: 347,
          column: 6
        },
        end: {
          line: 347,
          column: 30
        }
      },
      "105": {
        start: {
          line: 350,
          column: 4
        },
        end: {
          line: 350,
          column: 30
        }
      },
      "106": {
        start: {
          line: 357,
          column: 32
        },
        end: {
          line: 357,
          column: 43
        }
      },
      "107": {
        start: {
          line: 358,
          column: 22
        },
        end: {
          line: 358,
          column: 33
        }
      },
      "108": {
        start: {
          line: 360,
          column: 4
        },
        end: {
          line: 376,
          column: 5
        }
      },
      "109": {
        start: {
          line: 362,
          column: 6
        },
        end: {
          line: 362,
          column: 58
        }
      },
      "110": {
        start: {
          line: 363,
          column: 6
        },
        end: {
          line: 363,
          column: 65
        }
      },
      "111": {
        start: {
          line: 365,
          column: 6
        },
        end: {
          line: 373,
          column: 7
        }
      },
      "112": {
        start: {
          line: 369,
          column: 8
        },
        end: {
          line: 369,
          column: 46
        }
      },
      "113": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 71
        }
      },
      "114": {
        start: {
          line: 375,
          column: 6
        },
        end: {
          line: 375,
          column: 68
        }
      },
      "115": {
        start: {
          line: 386,
          column: 4
        },
        end: {
          line: 388,
          column: 5
        }
      },
      "116": {
        start: {
          line: 387,
          column: 6
        },
        end: {
          line: 387,
          column: 40
        }
      },
      "117": {
        start: {
          line: 390,
          column: 4
        },
        end: {
          line: 390,
          column: 67
        }
      },
      "118": {
        start: {
          line: 401,
          column: 19
        },
        end: {
          line: 401,
          column: 75
        }
      },
      "119": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 408,
          column: 5
        }
      },
      "120": {
        start: {
          line: 404,
          column: 6
        },
        end: {
          line: 407,
          column: 8
        }
      },
      "121": {
        start: {
          line: 410,
          column: 4
        },
        end: {
          line: 410,
          column: 17
        }
      },
      "122": {
        start: {
          line: 417,
          column: 4
        },
        end: {
          line: 417,
          column: 23
        }
      },
      "123": {
        start: {
          line: 424,
          column: 21
        },
        end: {
          line: 433,
          column: 6
        }
      },
      "124": {
        start: {
          line: 425,
          column: 6
        },
        end: {
          line: 432,
          column: 7
        }
      },
      "125": {
        start: {
          line: 426,
          column: 8
        },
        end: {
          line: 431,
          column: 9
        }
      },
      "126": {
        start: {
          line: 430,
          column: 10
        },
        end: {
          line: 430,
          column: 36
        }
      },
      "127": {
        start: {
          line: 435,
          column: 4
        },
        end: {
          line: 437,
          column: 6
        }
      },
      "128": {
        start: {
          line: 444,
          column: 30
        },
        end: {
          line: 444,
          column: 41
        }
      },
      "129": {
        start: {
          line: 446,
          column: 31
        },
        end: {
          line: 448,
          column: 44
        }
      },
      "130": {
        start: {
          line: 450,
          column: 4
        },
        end: {
          line: 450,
          column: 52
        }
      },
      "131": {
        start: {
          line: 451,
          column: 4
        },
        end: {
          line: 451,
          column: 78
        }
      },
      "132": {
        start: {
          line: 457,
          column: 22
        },
        end: {
          line: 457,
          column: 41
        }
      },
      "133": {
        start: {
          line: 466,
          column: 20
        },
        end: {
          line: 488,
          column: 4
        }
      },
      "134": {
        start: {
          line: 496,
          column: 18
        },
        end: {
          line: 508,
          column: 4
        }
      },
      "135": {
        start: {
          line: 518,
          column: 15
        },
        end: {
          line: 518,
          column: 16
        }
      },
      "136": {
        start: {
          line: 522,
          column: 2
        },
        end: {
          line: 526,
          column: 3
        }
      },
      "137": {
        start: {
          line: 522,
          column: 15
        },
        end: {
          line: 522,
          column: 16
        }
      },
      "138": {
        start: {
          line: 523,
          column: 4
        },
        end: {
          line: 525,
          column: 5
        }
      },
      "139": {
        start: {
          line: 524,
          column: 6
        },
        end: {
          line: 524,
          column: 14
        }
      },
      "140": {
        start: {
          line: 527,
          column: 2
        },
        end: {
          line: 527,
          column: 15
        }
      },
      "141": {
        start: {
          line: 537,
          column: 28
        },
        end: {
          line: 537,
          column: 53
        }
      },
      "142": {
        start: {
          line: 539,
          column: 23
        },
        end: {
          line: 541,
          column: 3
        }
      },
      "143": {
        start: {
          line: 543,
          column: 2
        },
        end: {
          line: 545,
          column: 4
        }
      },
      "144": {
        start: {
          line: 544,
          column: 4
        },
        end: {
          line: 544,
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
            line: 228,
            column: 3
          }
        },
        line: 22
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 155,
            column: 50
          },
          end: {
            line: 155,
            column: 51
          }
        },
        loc: {
          start: {
            line: 155,
            column: 61
          },
          end: {
            line: 158,
            column: 5
          }
        },
        line: 155
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 216,
            column: 43
          },
          end: {
            line: 216,
            column: 44
          }
        },
        loc: {
          start: {
            line: 216,
            column: 49
          },
          end: {
            line: 218,
            column: 5
          }
        },
        line: 216
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 220,
            column: 43
          },
          end: {
            line: 220,
            column: 44
          }
        },
        loc: {
          start: {
            line: 220,
            column: 49
          },
          end: {
            line: 227,
            column: 5
          }
        },
        line: 220
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 235,
            column: 3
          }
        },
        loc: {
          start: {
            line: 235,
            column: 34
          },
          end: {
            line: 266,
            column: 3
          }
        },
        line: 235
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 271,
            column: 2
          },
          end: {
            line: 271,
            column: 3
          }
        },
        loc: {
          start: {
            line: 271,
            column: 22
          },
          end: {
            line: 274,
            column: 3
          }
        },
        line: 271
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 279,
            column: 2
          },
          end: {
            line: 279,
            column: 3
          }
        },
        loc: {
          start: {
            line: 279,
            column: 22
          },
          end: {
            line: 282,
            column: 3
          }
        },
        line: 279
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 289,
            column: 2
          },
          end: {
            line: 289,
            column: 3
          }
        },
        loc: {
          start: {
            line: 289,
            column: 16
          },
          end: {
            line: 302,
            column: 3
          }
        },
        line: 289
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 310,
            column: 2
          },
          end: {
            line: 310,
            column: 3
          }
        },
        loc: {
          start: {
            line: 310,
            column: 29
          },
          end: {
            line: 312,
            column: 3
          }
        },
        line: 310
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 323,
            column: 2
          },
          end: {
            line: 323,
            column: 3
          }
        },
        loc: {
          start: {
            line: 323,
            column: 24
          },
          end: {
            line: 337,
            column: 3
          }
        },
        line: 323
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 345,
            column: 2
          },
          end: {
            line: 345,
            column: 3
          }
        },
        loc: {
          start: {
            line: 345,
            column: 38
          },
          end: {
            line: 351,
            column: 3
          }
        },
        line: 345
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 356,
            column: 2
          },
          end: {
            line: 356,
            column: 3
          }
        },
        loc: {
          start: {
            line: 356,
            column: 13
          },
          end: {
            line: 377,
            column: 3
          }
        },
        line: 356
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 385,
            column: 2
          },
          end: {
            line: 385,
            column: 3
          }
        },
        loc: {
          start: {
            line: 385,
            column: 33
          },
          end: {
            line: 391,
            column: 3
          }
        },
        line: 385
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 399,
            column: 2
          },
          end: {
            line: 399,
            column: 3
          }
        },
        loc: {
          start: {
            line: 399,
            column: 14
          },
          end: {
            line: 411,
            column: 3
          }
        },
        line: 399
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 416,
            column: 2
          },
          end: {
            line: 416,
            column: 3
          }
        },
        loc: {
          start: {
            line: 416,
            column: 12
          },
          end: {
            line: 418,
            column: 3
          }
        },
        line: 416
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 423,
            column: 2
          },
          end: {
            line: 423,
            column: 3
          }
        },
        loc: {
          start: {
            line: 423,
            column: 25
          },
          end: {
            line: 438,
            column: 3
          }
        },
        line: 423
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 424,
            column: 42
          },
          end: {
            line: 424,
            column: 43
          }
        },
        loc: {
          start: {
            line: 424,
            column: 60
          },
          end: {
            line: 433,
            column: 5
          }
        },
        line: 424
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 443,
            column: 2
          },
          end: {
            line: 443,
            column: 3
          }
        },
        loc: {
          start: {
            line: 443,
            column: 24
          },
          end: {
            line: 452,
            column: 3
          }
        },
        line: 443
      },
      "18": {
        name: "countFileItems",
        decl: {
          start: {
            line: 517,
            column: 9
          },
          end: {
            line: 517,
            column: 23
          }
        },
        loc: {
          start: {
            line: 517,
            column: 30
          },
          end: {
            line: 528,
            column: 1
          }
        },
        line: 517
      },
      "19": {
        name: "initFileUploads",
        decl: {
          start: {
            line: 536,
            column: 16
          },
          end: {
            line: 536,
            column: 31
          }
        },
        loc: {
          start: {
            line: 536,
            column: 41
          },
          end: {
            line: 546,
            column: 1
          }
        },
        line: 536
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 543,
            column: 24
          },
          end: {
            line: 543,
            column: 25
          }
        },
        loc: {
          start: {
            line: 543,
            column: 35
          },
          end: {
            line: 545,
            column: 3
          }
        },
        line: 543
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
            line: 76,
            column: 4
          },
          end: {
            line: 78,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 4
          },
          end: {
            line: 78,
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
        line: 76
      },
      "5": {
        loc: {
          start: {
            line: 89,
            column: 21
          },
          end: {
            line: 91,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 90,
            column: 8
          },
          end: {
            line: 90,
            column: 18
          }
        }, {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 91,
            column: 37
          }
        }],
        line: 89
      },
      "6": {
        loc: {
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 93,
            column: 4
          },
          end: {
            line: 95,
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
        line: 93
      },
      "7": {
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 109,
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
        line: 107
      },
      "8": {
        loc: {
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 165,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 162,
            column: 4
          },
          end: {
            line: 165,
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
        line: 162
      },
      "9": {
        loc: {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 224,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 224,
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
        line: 221
      },
      "10": {
        loc: {
          start: {
            line: 221,
            column: 10
          },
          end: {
            line: 221,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 221,
            column: 10
          },
          end: {
            line: 221,
            column: 37
          }
        }, {
          start: {
            line: 221,
            column: 41
          },
          end: {
            line: 221,
            column: 67
          }
        }],
        line: 221
      },
      "11": {
        loc: {
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 238,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 236,
            column: 4
          },
          end: {
            line: 238,
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
        line: 236
      },
      "12": {
        loc: {
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 265,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 244,
            column: 4
          },
          end: {
            line: 265,
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
        line: 244
      },
      "13": {
        loc: {
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 264,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 245,
            column: 6
          },
          end: {
            line: 264,
            column: 7
          }
        }, {
          start: {
            line: 256,
            column: 13
          },
          end: {
            line: 264,
            column: 7
          }
        }],
        line: 245
      },
      "14": {
        loc: {
          start: {
            line: 246,
            column: 8
          },
          end: {
            line: 255,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 246,
            column: 8
          },
          end: {
            line: 255,
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
        line: 246
      },
      "15": {
        loc: {
          start: {
            line: 246,
            column: 12
          },
          end: {
            line: 246,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 246,
            column: 12
          },
          end: {
            line: 246,
            column: 30
          }
        }, {
          start: {
            line: 246,
            column: 34
          },
          end: {
            line: 246,
            column: 66
          }
        }],
        line: 246
      },
      "16": {
        loc: {
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 254,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 254,
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
        line: 249
      },
      "17": {
        loc: {
          start: {
            line: 256,
            column: 13
          },
          end: {
            line: 264,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 256,
            column: 13
          },
          end: {
            line: 264,
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
        line: 256
      },
      "18": {
        loc: {
          start: {
            line: 292,
            column: 4
          },
          end: {
            line: 301,
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
            line: 301,
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
      "19": {
        loc: {
          start: {
            line: 292,
            column: 8
          },
          end: {
            line: 292,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 292,
            column: 8
          },
          end: {
            line: 292,
            column: 26
          }
        }, {
          start: {
            line: 292,
            column: 30
          },
          end: {
            line: 292,
            column: 67
          }
        }],
        line: 292
      },
      "20": {
        loc: {
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 327,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 325,
            column: 4
          },
          end: {
            line: 327,
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
        line: 325
      },
      "21": {
        loc: {
          start: {
            line: 330,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 330,
            column: 4
          },
          end: {
            line: 332,
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
        line: 330
      },
      "22": {
        loc: {
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 348,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 346,
            column: 4
          },
          end: {
            line: 348,
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
        line: 346
      },
      "23": {
        loc: {
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 360,
            column: 4
          },
          end: {
            line: 376,
            column: 5
          }
        }, {
          start: {
            line: 364,
            column: 11
          },
          end: {
            line: 376,
            column: 5
          }
        }],
        line: 360
      },
      "24": {
        loc: {
          start: {
            line: 365,
            column: 6
          },
          end: {
            line: 373,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 365,
            column: 6
          },
          end: {
            line: 373,
            column: 7
          }
        }, {
          start: {
            line: 370,
            column: 13
          },
          end: {
            line: 373,
            column: 7
          }
        }],
        line: 365
      },
      "25": {
        loc: {
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 388,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 386,
            column: 4
          },
          end: {
            line: 388,
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
        line: 386
      },
      "26": {
        loc: {
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 408,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 403,
            column: 4
          },
          end: {
            line: 408,
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
        line: 403
      },
      "27": {
        loc: {
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 431,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 426,
            column: 8
          },
          end: {
            line: 431,
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
        line: 426
      },
      "28": {
        loc: {
          start: {
            line: 427,
            column: 10
          },
          end: {
            line: 428,
            column: 47
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 427,
            column: 10
          },
          end: {
            line: 427,
            column: 40
          }
        }, {
          start: {
            line: 428,
            column: 10
          },
          end: {
            line: 428,
            column: 47
          }
        }],
        line: 427
      },
      "29": {
        loc: {
          start: {
            line: 446,
            column: 31
          },
          end: {
            line: 448,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 447,
            column: 8
          },
          end: {
            line: 447,
            column: 36
          }
        }, {
          start: {
            line: 448,
            column: 8
          },
          end: {
            line: 448,
            column: 44
          }
        }],
        line: 446
      },
      "30": {
        loc: {
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 525,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 523,
            column: 4
          },
          end: {
            line: 525,
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
        line: 523
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
    hash: "3f642d8172a298b2fa7f7069e33980233818514c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ku40ithfn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ku40ithfn();

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
  constructor($root, config = (cov_ku40ithfn().b[0][0]++, {})) {
    cov_ku40ithfn().f[0]++;
    cov_ku40ithfn().s[0]++;
    super($root, config);
    /**
     * @type {boolean | undefined}
     */
    this.enteredAnotherElement = void 0;
    const $input = (cov_ku40ithfn().s[1]++, this.$root.querySelector('input'));
    cov_ku40ithfn().s[2]++;
    if (!($input instanceof HTMLInputElement)) {
      cov_ku40ithfn().b[1][0]++;
      cov_ku40ithfn().s[3]++;
      throw new ElementError({
        component: FileUpload,
        element: $input,
        expectedType: 'HTMLInputElement',
        identifier: 'Form field (`<input>`)'
      });
    } else {
      cov_ku40ithfn().b[1][1]++;
    }
    cov_ku40ithfn().s[4]++;
    if ($input.type !== 'file') {
      cov_ku40ithfn().b[2][0]++;
      cov_ku40ithfn().s[5]++;
      throw new ElementError({
        component: FileUpload,
        element: $input,
        identifier: 'Form field (`<input>`)',
        expectedType: 'HTMLInputElement with attribute (`type="file"`)'
      });
    } else {
      cov_ku40ithfn().b[2][1]++;
    }
    cov_ku40ithfn().s[6]++;
    this.$input = $input;
    cov_ku40ithfn().s[7]++;
    if (!this.$input.id) {
      cov_ku40ithfn().b[3][0]++;
      cov_ku40ithfn().s[8]++;
      throw new ElementError({
        component: FileUpload,
        identifier: 'File input (`<input type="file">`) attribute (`id`)'
      });
    } else {
      cov_ku40ithfn().b[3][1]++;
    }
    cov_ku40ithfn().s[9]++;
    this.id = this.$input.id;
    const {
      i18n,
      dropZoneClass,
      dropButtonClass,
      dropButtonGroupClass,
      dropInstructionClass,
      chooseFilesButtonClass,
      chooseFilesButtonClassList,
      announcementsClass,
      statusClass
    } = (cov_ku40ithfn().s[10]++, this.config);
    cov_ku40ithfn().s[11]++;
    this.i18n = new I18n(i18n, {
      // Read the fallback if necessary rather than have it set in the defaults
      locale: closestAttributeValue(this.$root, 'lang')
    });
    const $label = (cov_ku40ithfn().s[12]++, this.findLabel());
    // Add an ID to the label if it doesn't have one already
    // so it can be referenced by `aria-labelledby`
    cov_ku40ithfn().s[13]++;
    if (!$label.id) {
      cov_ku40ithfn().b[4][0]++;
      cov_ku40ithfn().s[14]++;
      $label.id = `${this.id}-label`;
    } else {
      cov_ku40ithfn().b[4][1]++;
    }

    // We need to copy the 'id' of the root element
    // to the new button replacement element
    // so that focus will work in the error summary
    cov_ku40ithfn().s[15]++;
    this.$input.id = `${this.id}-input`;

    // Hide the native input
    cov_ku40ithfn().s[16]++;
    this.$input.setAttribute('hidden', '');

    // Locate or create the file drop zone
    cov_ku40ithfn().s[17]++;
    this.$dropZone = this.$root.classList.contains(dropZoneClass) ? (cov_ku40ithfn().b[5][0]++, this.$root) : (cov_ku40ithfn().b[5][1]++, document.createElement('div'));
    cov_ku40ithfn().s[18]++;
    if (this.$root !== this.$dropZone) {
      cov_ku40ithfn().b[6][0]++;
      cov_ku40ithfn().s[19]++;
      this.$dropZone.classList.add(dropZoneClass);
    } else {
      cov_ku40ithfn().b[6][1]++;
    }

    // Create the file selection button
    cov_ku40ithfn().s[20]++;
    this.$dropButton = document.createElement('button');
    cov_ku40ithfn().s[21]++;
    this.$dropButton.classList.add(dropButtonClass);
    cov_ku40ithfn().s[22]++;
    this.$dropButton.type = 'button';
    cov_ku40ithfn().s[23]++;
    this.$dropButton.id = this.id;
    cov_ku40ithfn().s[24]++;
    this.$dropButton.classList.add(`${dropButtonClass}--empty`);

    // Copy `aria-describedby` if present so hints and errors
    // are associated to the `<button>`
    const ariaDescribedBy = (cov_ku40ithfn().s[25]++, this.$input.getAttribute('aria-describedby'));
    cov_ku40ithfn().s[26]++;
    if (ariaDescribedBy) {
      cov_ku40ithfn().b[7][0]++;
      cov_ku40ithfn().s[27]++;
      this.$dropButton.setAttribute('aria-describedby', ariaDescribedBy);
    } else {
      cov_ku40ithfn().b[7][1]++;
    }

    // Create status element that shows what/how many files are selected
    cov_ku40ithfn().s[28]++;
    this.$status = document.createElement('span');
    cov_ku40ithfn().s[29]++;
    this.$status.classList.add('nhsuk-body', statusClass);
    cov_ku40ithfn().s[30]++;
    this.$status.setAttribute('aria-live', 'polite');
    cov_ku40ithfn().s[31]++;
    this.$status.innerText = this.formatStatusMessage(0);
    cov_ku40ithfn().s[32]++;
    this.$dropButton.appendChild(this.$status);
    const $statusComma = (cov_ku40ithfn().s[33]++, document.createElement('span'));
    cov_ku40ithfn().s[34]++;
    $statusComma.classList.add('nhsuk-u-visually-hidden');
    cov_ku40ithfn().s[35]++;
    $statusComma.innerText = ', ';
    cov_ku40ithfn().s[36]++;
    $statusComma.id = `${this.id}-comma`;
    cov_ku40ithfn().s[37]++;
    this.$dropButton.appendChild($statusComma);
    const $dropButtonGroup = (cov_ku40ithfn().s[38]++, document.createElement('span'));
    cov_ku40ithfn().s[39]++;
    $dropButtonGroup.classList.add(dropButtonGroupClass);
    const $chooseFilesButton = (cov_ku40ithfn().s[40]++, document.createElement('span'));
    cov_ku40ithfn().s[41]++;
    $chooseFilesButton.classList.add('nhsuk-button', chooseFilesButtonClass, ...chooseFilesButtonClassList);
    cov_ku40ithfn().s[42]++;
    $chooseFilesButton.innerText = this.i18n.t('chooseFilesButton');
    cov_ku40ithfn().s[43]++;
    $dropButtonGroup.appendChild($chooseFilesButton);

    // Add a space so the button and instruction read correctly
    // when CSS is disabled
    cov_ku40ithfn().s[44]++;
    $dropButtonGroup.append(' ');
    const $dropInstruction = (cov_ku40ithfn().s[45]++, document.createElement('span'));
    cov_ku40ithfn().s[46]++;
    $dropInstruction.classList.add('nhsuk-body', dropInstructionClass);
    cov_ku40ithfn().s[47]++;
    $dropInstruction.innerText = this.i18n.t('dropInstruction');
    cov_ku40ithfn().s[48]++;
    $dropButtonGroup.appendChild($dropInstruction);
    cov_ku40ithfn().s[49]++;
    this.$dropButton.appendChild($dropButtonGroup);
    cov_ku40ithfn().s[50]++;
    this.$dropButton.setAttribute('aria-labelledby', `${$label.id} ${$statusComma.id} ${this.$dropButton.id}`);
    cov_ku40ithfn().s[51]++;
    this.$dropButton.addEventListener('click', this.onClick.bind(this));
    cov_ku40ithfn().s[52]++;
    this.$dropButton.addEventListener('dragover', event => {
      cov_ku40ithfn().f[1]++;
      cov_ku40ithfn().s[53]++;
      // prevent default to allow drop
      event.preventDefault();
    });

    // For backwards compatibility with GOV.UK Frontend, optionally replace
    // the native input with the drop zone unless already in the HTML
    cov_ku40ithfn().s[54]++;
    if (!this.$dropZone.parentElement) {
      var _this$$input$parentEl;
      cov_ku40ithfn().b[8][0]++;
      cov_ku40ithfn().s[55]++;
      (_this$$input$parentEl = this.$input.parentElement) == null || _this$$input$parentEl.insertBefore(this.$dropZone, this.$input);
      cov_ku40ithfn().s[56]++;
      this.$dropZone.appendChild(this.$input);
    } else {
      cov_ku40ithfn().b[8][1]++;
    }

    // Assemble these all together
    cov_ku40ithfn().s[57]++;
    this.$dropZone.insertAdjacentElement('afterbegin', this.$dropButton);
    cov_ku40ithfn().s[58]++;
    this.$input.setAttribute('tabindex', '-1');
    cov_ku40ithfn().s[59]++;
    this.$input.setAttribute('aria-hidden', 'true');

    // Bind change event to the underlying input
    cov_ku40ithfn().s[60]++;
    this.$input.addEventListener('change', this.onChange.bind(this));

    // Synchronise the `disabled` state between the button and underlying input
    cov_ku40ithfn().s[61]++;
    this.updateDisabledState();
    cov_ku40ithfn().s[62]++;
    this.observeDisabledState();

    // Handle drop zone visibility
    // A live region to announce when users enter or leave the drop zone
    cov_ku40ithfn().s[63]++;
    this.$announcements = document.createElement('span');
    cov_ku40ithfn().s[64]++;
    this.$announcements.classList.add(announcementsClass, 'nhsuk-u-visually-hidden');
    cov_ku40ithfn().s[65]++;
    this.$announcements.setAttribute('aria-live', 'assertive');
    cov_ku40ithfn().s[66]++;
    this.$dropZone.insertAdjacentElement('afterend', this.$announcements);

    // if there is no CSS and input is hidden
    // button will need to handle drop event
    cov_ku40ithfn().s[67]++;
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
    cov_ku40ithfn().s[68]++;
    document.addEventListener('dragenter', this.updateDropzoneVisibility.bind(this));

    // To detect if we're outside the document, we can track if there was a
    // `dragenter` event preceding a `dragleave`. If there wasn't, this means
    // we're outside the document.
    //
    // The order of events is guaranteed by the HTML specs:
    // https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model
    cov_ku40ithfn().s[69]++;
    document.addEventListener('dragenter', () => {
      cov_ku40ithfn().f[2]++;
      cov_ku40ithfn().s[70]++;
      this.enteredAnotherElement = true;
    });
    cov_ku40ithfn().s[71]++;
    document.addEventListener('dragleave', () => {
      cov_ku40ithfn().f[3]++;
      cov_ku40ithfn().s[72]++;
      if ((cov_ku40ithfn().b[10][0]++, !this.enteredAnotherElement) && (cov_ku40ithfn().b[10][1]++, !this.$dropButton.disabled)) {
        cov_ku40ithfn().b[9][0]++;
        cov_ku40ithfn().s[73]++;
        this.hideDraggingState();
        cov_ku40ithfn().s[74]++;
        this.$announcements.innerText = this.i18n.t('leftDropZone');
      } else {
        cov_ku40ithfn().b[9][1]++;
      }
      cov_ku40ithfn().s[75]++;
      this.enteredAnotherElement = false;
    });
  }

  /**
   * Updates the visibility of the dropzone as users enters the various elements on the page
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  updateDropzoneVisibility(event) {
    cov_ku40ithfn().f[4]++;
    cov_ku40ithfn().s[76]++;
    if (this.$dropButton.disabled) {
      cov_ku40ithfn().b[11][0]++;
      cov_ku40ithfn().s[77]++;
      return;
    } else {
      cov_ku40ithfn().b[11][1]++;
    }
    const {
      dropButtonClass
    } = (cov_ku40ithfn().s[78]++, this.config);

    // DOM interfaces only type `event.target` as `EventTarget`
    // so we first need to make sure it's a `Node`
    cov_ku40ithfn().s[79]++;
    if (event.target instanceof Node) {
      cov_ku40ithfn().b[12][0]++;
      cov_ku40ithfn().s[80]++;
      if (this.$dropZone.contains(event.target)) {
        cov_ku40ithfn().b[13][0]++;
        cov_ku40ithfn().s[81]++;
        if ((cov_ku40ithfn().b[15][0]++, event.dataTransfer) && (cov_ku40ithfn().b[15][1]++, this.canDrop(event.dataTransfer))) {
          cov_ku40ithfn().b[14][0]++;
          cov_ku40ithfn().s[82]++;
          // Only update the class and make the announcement if not already visible
          // to avoid repeated announcements on NVDA (2024.4) + Firefox (133)
          if (!this.$dropButton.classList.contains(`${dropButtonClass}--dragging`)) {
            cov_ku40ithfn().b[16][0]++;
            cov_ku40ithfn().s[83]++;
            this.showDraggingState();
            cov_ku40ithfn().s[84]++;
            this.$announcements.innerText = this.i18n.t('enteredDropZone');
          } else {
            cov_ku40ithfn().b[16][1]++;
          }
        } else {
          cov_ku40ithfn().b[14][1]++;
        }
      } else {
        cov_ku40ithfn().b[13][1]++;
        cov_ku40ithfn().s[85]++;
        if (this.$dropButton.classList.contains(`${dropButtonClass}--dragging`)) {
          cov_ku40ithfn().b[17][0]++;
          cov_ku40ithfn().s[86]++;
          // Only hide the dropzone if it is visible to prevent announcing user
          // left the drop zone when they enter the page but haven't reached yet
          // the file upload component
          this.hideDraggingState();
          cov_ku40ithfn().s[87]++;
          this.$announcements.innerText = this.i18n.t('leftDropZone');
        } else {
          cov_ku40ithfn().b[17][1]++;
        }
      }
    } else {
      cov_ku40ithfn().b[12][1]++;
    }
  }

  /**
   * Show the drop zone visually
   */
  showDraggingState() {
    cov_ku40ithfn().f[5]++;
    const {
      dropButtonClass
    } = (cov_ku40ithfn().s[88]++, this.config);
    cov_ku40ithfn().s[89]++;
    this.$dropButton.classList.add(`${dropButtonClass}--dragging`);
  }

  /**
   * Hides the drop zone visually
   */
  hideDraggingState() {
    cov_ku40ithfn().f[6]++;
    const {
      dropButtonClass
    } = (cov_ku40ithfn().s[90]++, this.config);
    cov_ku40ithfn().s[91]++;
    this.$dropButton.classList.remove(`${dropButtonClass}--dragging`);
  }

  /**
   * Handles user dropping on the component
   *
   * @param {DragEvent} event - The `dragenter` event
   */
  onDrop(event) {
    cov_ku40ithfn().f[7]++;
    cov_ku40ithfn().s[92]++;
    event.preventDefault();
    cov_ku40ithfn().s[93]++;
    if ((cov_ku40ithfn().b[19][0]++, event.dataTransfer) && (cov_ku40ithfn().b[19][1]++, this.canFillInput(event.dataTransfer))) {
      cov_ku40ithfn().b[18][0]++;
      cov_ku40ithfn().s[94]++;
      this.$input.files = event.dataTransfer.files;

      // Dispatch a `change` event so external code that would rely on the `<input>`
      // dispatching an event when files are dropped still work.
      // Use a `CustomEvent` so our events are distinguishable from browser's native events
      cov_ku40ithfn().s[95]++;
      this.$input.dispatchEvent(new CustomEvent('change'));
      cov_ku40ithfn().s[96]++;
      this.hideDraggingState();
    } else {
      cov_ku40ithfn().b[18][1]++;
    }
  }

  /**
   * Confirms if enhanced `<input>` can be filled with files from the given `DataTransfer`
   *
   * @param {DataTransfer} dataTransfer - The `DataTransfer` being dropped
   * @returns {boolean} Whether the `DataTransfer` contains files, in number matching the `multiple` attribute of the original `<input>`
   */
  canFillInput(dataTransfer) {
    cov_ku40ithfn().f[8]++;
    cov_ku40ithfn().s[97]++;
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
    cov_ku40ithfn().f[9]++;
    cov_ku40ithfn().s[98]++;
    // If the browser is kind enough to give a list of items, we'll use that as source of truth
    if (dataTransfer.items.length) {
      cov_ku40ithfn().b[20][0]++;
      cov_ku40ithfn().s[99]++;
      return this.matchesInputCapacity(countFileItems(dataTransfer.items));
    } else {
      cov_ku40ithfn().b[20][1]++;
    }

    // If we have some type information, we'll use that
    cov_ku40ithfn().s[100]++;
    if (dataTransfer.types.length) {
      cov_ku40ithfn().b[21][0]++;
      cov_ku40ithfn().s[101]++;
      return dataTransfer.types.includes('Files');
    } else {
      cov_ku40ithfn().b[21][1]++;
    }

    // If we have nothing to go by, we'll assume things are OK
    // until we have a more accurate picture inside the `drop` event
    cov_ku40ithfn().s[102]++;
    return true;
  }

  /**
   * Confirms the given number of files matches that allowed by the enhanced `<input>`
   *
   * @param {number} numberOfFiles - The number of files
   * @returns {boolean} Whether the enhanced `<input>` can accept that number of files
   */
  matchesInputCapacity(numberOfFiles) {
    cov_ku40ithfn().f[10]++;
    cov_ku40ithfn().s[103]++;
    if (this.$input.multiple) {
      cov_ku40ithfn().b[22][0]++;
      cov_ku40ithfn().s[104]++;
      return numberOfFiles > 0;
    } else {
      cov_ku40ithfn().b[22][1]++;
    }
    cov_ku40ithfn().s[105]++;
    return numberOfFiles === 1;
  }

  /**
   * Check if the value of the underlying input has changed
   */
  onChange() {
    cov_ku40ithfn().f[11]++;
    const {
      dropButtonClass
    } = (cov_ku40ithfn().s[106]++, this.config);
    const {
      files
    } = (cov_ku40ithfn().s[107]++, this.$input);
    cov_ku40ithfn().s[108]++;
    if (!(files != null && files.length)) {
      cov_ku40ithfn().b[23][0]++;
      cov_ku40ithfn().s[109]++;
      // If there are no files, show the default selection text
      this.$status.innerText = this.formatStatusMessage(0);
      cov_ku40ithfn().s[110]++;
      this.$dropButton.classList.add(`${dropButtonClass}--empty`);
    } else {
      cov_ku40ithfn().b[23][1]++;
      cov_ku40ithfn().s[111]++;
      if (
      // If there is 1 file, just show the file name
      files.length === 1) {
        cov_ku40ithfn().b[24][0]++;
        cov_ku40ithfn().s[112]++;
        this.$status.innerText = files[0].name;
      } else {
        cov_ku40ithfn().b[24][1]++;
        cov_ku40ithfn().s[113]++;
        // Otherwise, tell the user how many files are selected
        this.$status.innerText = this.formatStatusMessage(files.length);
      }
      cov_ku40ithfn().s[114]++;
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
    cov_ku40ithfn().f[12]++;
    cov_ku40ithfn().s[115]++;
    if (fileCount === 0) {
      cov_ku40ithfn().b[25][0]++;
      cov_ku40ithfn().s[116]++;
      return this.i18n.t('noFileChosen');
    } else {
      cov_ku40ithfn().b[25][1]++;
    }
    cov_ku40ithfn().s[117]++;
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
    cov_ku40ithfn().f[13]++;
    // Use `label` in the selector so TypeScript knows the type of `HTMLElement`
    const $label = (cov_ku40ithfn().s[118]++, document.querySelector(`label[for="${this.$input.id}"]`));
    cov_ku40ithfn().s[119]++;
    if (!$label) {
      cov_ku40ithfn().b[26][0]++;
      cov_ku40ithfn().s[120]++;
      throw new ElementError({
        component: FileUpload,
        identifier: `Field label (\`<label for=${this.$input.id}>\`)`
      });
    } else {
      cov_ku40ithfn().b[26][1]++;
    }
    cov_ku40ithfn().s[121]++;
    return $label;
  }

  /**
   * When the button is clicked, emulate clicking the actual, hidden file input
   */
  onClick() {
    cov_ku40ithfn().f[14]++;
    cov_ku40ithfn().s[122]++;
    this.$input.click();
  }

  /**
   * Create a mutation observer to check if the input's attributes altered.
   */
  observeDisabledState() {
    cov_ku40ithfn().f[15]++;
    const observer = (cov_ku40ithfn().s[123]++, new MutationObserver(mutationList => {
      cov_ku40ithfn().f[16]++;
      cov_ku40ithfn().s[124]++;
      for (const mutation of mutationList) {
        cov_ku40ithfn().s[125]++;
        if ((cov_ku40ithfn().b[28][0]++, mutation.type === 'attributes') && (cov_ku40ithfn().b[28][1]++, mutation.attributeName === 'disabled')) {
          cov_ku40ithfn().b[27][0]++;
          cov_ku40ithfn().s[126]++;
          this.updateDisabledState();
        } else {
          cov_ku40ithfn().b[27][1]++;
        }
      }
    }));
    cov_ku40ithfn().s[127]++;
    observer.observe(this.$input, {
      attributes: true
    });
  }

  /**
   * Synchronise the `disabled` state between the input and replacement button.
   */
  updateDisabledState() {
    cov_ku40ithfn().f[17]++;
    const {
      dropZoneClass
    } = (cov_ku40ithfn().s[128]++, this.config);
    const disabledStateClass = (cov_ku40ithfn().s[129]++, this.$root.classList.contains(dropZoneClass) ? (cov_ku40ithfn().b[29][0]++, `${dropZoneClass}--disabled`) : (cov_ku40ithfn().b[29][1]++, `${FileUpload.moduleName}--disabled`));
    cov_ku40ithfn().s[130]++;
    this.$dropButton.disabled = this.$input.disabled;
    cov_ku40ithfn().s[131]++;
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
FileUpload.moduleName = (cov_ku40ithfn().s[132]++, 'nhsuk-file-upload');
/**
 * File upload default config
 *
 * @see {@link FileUploadConfig}
 * @constant
 * @type {FileUploadConfig}
 */
FileUpload.defaults = (cov_ku40ithfn().s[133]++, Object.freeze({
  dropZoneClass: 'nhsuk-file-upload__drop-zone',
  dropButtonClass: 'nhsuk-file-upload__drop-button',
  dropButtonGroupClass: 'nhsuk-file-upload__drop-button-group',
  dropInstructionClass: 'nhsuk-file-upload__drop-instruction',
  chooseFilesButtonClass: 'nhsuk-file-upload__choose-files-button',
  chooseFilesButtonClassList: ['nhsuk-button--secondary'],
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
FileUpload.schema = (cov_ku40ithfn().s[134]++, Object.freeze({
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
    chooseFilesButtonClassList: {
      type: 'array'
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
  cov_ku40ithfn().f[18]++;
  let result = (cov_ku40ithfn().s[135]++, 0);

  // `DataTransferItemList` is not iterable
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  cov_ku40ithfn().s[136]++;
  for (let i = (cov_ku40ithfn().s[137]++, 0); i < list.length; i++) {
    cov_ku40ithfn().s[138]++;
    if (list[i].kind === 'file') {
      cov_ku40ithfn().b[30][0]++;
      cov_ku40ithfn().s[139]++;
      result++;
    } else {
      cov_ku40ithfn().b[30][1]++;
    }
  }
  cov_ku40ithfn().s[140]++;
  return result;
}

/**
 * Initialise file upload component
 *
 * @deprecated Use {@link createAll | `createAll(FileUpload, options)`} instead.
 * @param {InitOptions & Partial<FileUploadConfig>} [options]
 */
function initFileUploads(options) {
  cov_ku40ithfn().f[19]++;
  const {
    scope: $scope
  } = (cov_ku40ithfn().s[141]++, normaliseOptions(options));
  const $fileUploads = (cov_ku40ithfn().s[142]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${FileUpload.moduleName}"]`));
  cov_ku40ithfn().s[143]++;
  $fileUploads == null || $fileUploads.forEach($root => {
    cov_ku40ithfn().f[20]++;
    cov_ku40ithfn().s[144]++;
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
 * @property {string[]} chooseFilesButtonClassList - Choose files button modifier classes
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
