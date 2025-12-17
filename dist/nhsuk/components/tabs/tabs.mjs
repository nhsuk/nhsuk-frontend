import '../../common/configuration/index.mjs';
import { getBreakpoint } from '../../common/index.mjs';
import { ConfigurableComponent } from '../../configurable-component.mjs';
import { ElementError } from '../../errors/index.mjs';
import { normaliseOptions } from '../../common/configuration/normalise-options.mjs';

function cov_1wazpneu5l() {
  var path = "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/tabs/tabs.mjs";
  var hash = "17ba21540f314ab67f41adf6bb7711495e153670";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/paulrobertlloyd/Sites/nhsuk-frontend/packages/nhsuk-frontend/src/nhsuk/components/tabs/tabs.mjs",
    statementMap: {
      "0": {
        start: {
          line: 14,
          column: 17
        },
        end: {
          line: 14,
          column: 22
        }
      },
      "1": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 25,
          column: 12
        }
      },
      "2": {
        start: {
          line: 32,
          column: 4
        },
        end: {
          line: 32,
          column: 24
        }
      },
      "3": {
        start: {
          line: 34,
          column: 51
        },
        end: {
          line: 34,
          column: 62
        }
      },
      "4": {
        start: {
          line: 36,
          column: 18
        },
        end: {
          line: 36,
          column: 62
        }
      },
      "5": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 42,
          column: 5
        }
      },
      "6": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 41,
          column: 8
        }
      },
      "7": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 22
        }
      },
      "8": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 51
        }
      },
      "9": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 48,
          column: 55
        }
      },
      "10": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 57
        }
      },
      "11": {
        start: {
          line: 51,
          column: 21
        },
        end: {
          line: 51,
          column: 64
        }
      },
      "12": {
        start: {
          line: 52,
          column: 26
        },
        end: {
          line: 52,
          column: 76
        }
      },
      "13": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "14": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 58,
          column: 8
        }
      },
      "15": {
        start: {
          line: 61,
          column: 4
        },
        end: {
          line: 66,
          column: 5
        }
      },
      "16": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 65,
          column: 8
        }
      },
      "17": {
        start: {
          line: 68,
          column: 4
        },
        end: {
          line: 68,
          column: 28
        }
      },
      "18": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 38
        }
      },
      "19": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 32
        }
      },
      "20": {
        start: {
          line: 78,
          column: 23
        },
        end: {
          line: 78,
          column: 46
        }
      },
      "21": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 85,
          column: 5
        }
      },
      "22": {
        start: {
          line: 81,
          column: 6
        },
        end: {
          line: 84,
          column: 8
        }
      },
      "23": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 68
        }
      },
      "24": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 98,
          column: 5
        }
      },
      "25": {
        start: {
          line: 93,
          column: 6
        },
        end: {
          line: 93,
          column: 65
        }
      },
      "26": {
        start: {
          line: 93,
          column: 48
        },
        end: {
          line: 93,
          column: 64
        }
      },
      "27": {
        start: {
          line: 97,
          column: 6
        },
        end: {
          line: 97,
          column: 50
        }
      },
      "28": {
        start: {
          line: 97,
          column: 33
        },
        end: {
          line: 97,
          column: 49
        }
      },
      "29": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 100,
          column: 20
        }
      },
      "30": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 111,
          column: 5
        }
      },
      "31": {
        start: {
          line: 108,
          column: 6
        },
        end: {
          line: 108,
          column: 18
        }
      },
      "32": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 21
        }
      },
      "33": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 118,
          column: 49
        }
      },
      "34": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 122,
          column: 6
        }
      },
      "35": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 48
        }
      },
      "36": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 134,
          column: 6
        }
      },
      "37": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 126,
          column: 30
        }
      },
      "38": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 62
        }
      },
      "39": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 130,
          column: 66
        }
      },
      "40": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 133,
          column: 24
        }
      },
      "41": {
        start: {
          line: 137,
          column: 23
        },
        end: {
          line: 137,
          column: 73
        }
      },
      "42": {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 139,
          column: 28
        }
      },
      "43": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 142,
          column: 71
        }
      },
      "44": {
        start: {
          line: 149,
          column: 4
        },
        end: {
          line: 149,
          column: 41
        }
      },
      "45": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 153,
          column: 6
        }
      },
      "46": {
        start: {
          line: 152,
          column: 6
        },
        end: {
          line: 152,
          column: 35
        }
      },
      "47": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 162,
          column: 6
        }
      },
      "48": {
        start: {
          line: 157,
          column: 6
        },
        end: {
          line: 157,
          column: 65
        }
      },
      "49": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 158,
          column: 69
        }
      },
      "50": {
        start: {
          line: 161,
          column: 6
        },
        end: {
          line: 161,
          column: 32
        }
      },
      "51": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 74
        }
      },
      "52": {
        start: {
          line: 174,
          column: 21
        },
        end: {
          line: 174,
          column: 36
        }
      },
      "53": {
        start: {
          line: 175,
          column: 25
        },
        end: {
          line: 175,
          column: 42
        }
      },
      "54": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 178,
          column: 5
        }
      },
      "55": {
        start: {
          line: 177,
          column: 6
        },
        end: {
          line: 177,
          column: 12
        }
      },
      "56": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 184,
          column: 5
        }
      },
      "57": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 31
        }
      },
      "58": {
        start: {
          line: 183,
          column: 6
        },
        end: {
          line: 183,
          column: 12
        }
      },
      "59": {
        start: {
          line: 187,
          column: 25
        },
        end: {
          line: 187,
          column: 45
        }
      },
      "60": {
        start: {
          line: 188,
          column: 4
        },
        end: {
          line: 190,
          column: 5
        }
      },
      "61": {
        start: {
          line: 189,
          column: 6
        },
        end: {
          line: 189,
          column: 12
        }
      },
      "62": {
        start: {
          line: 192,
          column: 4
        },
        end: {
          line: 192,
          column: 30
        }
      },
      "63": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 193,
          column: 30
        }
      },
      "64": {
        start: {
          line: 194,
          column: 4
        },
        end: {
          line: 194,
          column: 24
        }
      },
      "65": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 203,
          column: 29
        }
      },
      "66": {
        start: {
          line: 204,
          column: 4
        },
        end: {
          line: 204,
          column: 24
        }
      },
      "67": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 27
        }
      },
      "68": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 214,
          column: 24
        }
      },
      "69": {
        start: {
          line: 224,
          column: 25
        },
        end: {
          line: 224,
          column: 36
        }
      },
      "70": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 225,
          column: 68
        }
      },
      "71": {
        start: {
          line: 234,
          column: 20
        },
        end: {
          line: 234,
          column: 46
        }
      },
      "72": {
        start: {
          line: 235,
          column: 4
        },
        end: {
          line: 237,
          column: 5
        }
      },
      "73": {
        start: {
          line: 236,
          column: 6
        },
        end: {
          line: 236,
          column: 12
        }
      },
      "74": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 240,
          column: 45
        }
      },
      "75": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 241,
          column: 36
        }
      },
      "76": {
        start: {
          line: 242,
          column: 4
        },
        end: {
          line: 242,
          column: 47
        }
      },
      "77": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 243,
          column: 47
        }
      },
      "78": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 244,
          column: 39
        }
      },
      "79": {
        start: {
          line: 247,
          column: 19
        },
        end: {
          line: 247,
          column: 38
        }
      },
      "80": {
        start: {
          line: 248,
          column: 4
        },
        end: {
          line: 250,
          column: 5
        }
      },
      "81": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 12
        }
      },
      "82": {
        start: {
          line: 252,
          column: 27
        },
        end: {
          line: 252,
          column: 38
        }
      },
      "83": {
        start: {
          line: 254,
          column: 4
        },
        end: {
          line: 254,
          column: 43
        }
      },
      "84": {
        start: {
          line: 255,
          column: 4
        },
        end: {
          line: 255,
          column: 51
        }
      },
      "85": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 256,
          column: 71
        }
      },
      "86": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 266,
          column: 30
        }
      },
      "87": {
        start: {
          line: 267,
          column: 4
        },
        end: {
          line: 267,
          column: 32
        }
      },
      "88": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 268,
          column: 41
        }
      },
      "89": {
        start: {
          line: 269,
          column: 4
        },
        end: {
          line: 269,
          column: 41
        }
      },
      "90": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 270,
          column: 36
        }
      },
      "91": {
        start: {
          line: 273,
          column: 19
        },
        end: {
          line: 273,
          column: 38
        }
      },
      "92": {
        start: {
          line: 274,
          column: 4
        },
        end: {
          line: 276,
          column: 5
        }
      },
      "93": {
        start: {
          line: 275,
          column: 6
        },
        end: {
          line: 275,
          column: 12
        }
      },
      "94": {
        start: {
          line: 278,
          column: 27
        },
        end: {
          line: 278,
          column: 38
        }
      },
      "95": {
        start: {
          line: 280,
          column: 4
        },
        end: {
          line: 280,
          column: 34
        }
      },
      "96": {
        start: {
          line: 281,
          column: 4
        },
        end: {
          line: 281,
          column: 45
        }
      },
      "97": {
        start: {
          line: 282,
          column: 4
        },
        end: {
          line: 282,
          column: 74
        }
      },
      "98": {
        start: {
          line: 292,
          column: 24
        },
        end: {
          line: 292,
          column: 44
        }
      },
      "99": {
        start: {
          line: 293,
          column: 21
        },
        end: {
          line: 293,
          column: 40
        }
      },
      "100": {
        start: {
          line: 295,
          column: 4
        },
        end: {
          line: 297,
          column: 5
        }
      },
      "101": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 296,
          column: 12
        }
      },
      "102": {
        start: {
          line: 299,
          column: 4
        },
        end: {
          line: 299,
          column: 26
        }
      },
      "103": {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 301,
          column: 29
        }
      },
      "104": {
        start: {
          line: 302,
          column: 4
        },
        end: {
          line: 302,
          column: 26
        }
      },
      "105": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 303,
          column: 37
        }
      },
      "106": {
        start: {
          line: 315,
          column: 19
        },
        end: {
          line: 315,
          column: 38
        }
      },
      "107": {
        start: {
          line: 316,
          column: 4
        },
        end: {
          line: 318,
          column: 5
        }
      },
      "108": {
        start: {
          line: 317,
          column: 6
        },
        end: {
          line: 317,
          column: 12
        }
      },
      "109": {
        start: {
          line: 322,
          column: 20
        },
        end: {
          line: 322,
          column: 29
        }
      },
      "110": {
        start: {
          line: 323,
          column: 4
        },
        end: {
          line: 323,
          column: 18
        }
      },
      "111": {
        start: {
          line: 324,
          column: 4
        },
        end: {
          line: 324,
          column: 28
        }
      },
      "112": {
        start: {
          line: 325,
          column: 4
        },
        end: {
          line: 325,
          column: 34
        }
      },
      "113": {
        start: {
          line: 326,
          column: 4
        },
        end: {
          line: 326,
          column: 23
        }
      },
      "114": {
        start: {
          line: 338,
          column: 4
        },
        end: {
          line: 350,
          column: 5
        }
      },
      "115": {
        start: {
          line: 342,
          column: 8
        },
        end: {
          line: 342,
          column: 34
        }
      },
      "116": {
        start: {
          line: 343,
          column: 8
        },
        end: {
          line: 343,
          column: 30
        }
      },
      "117": {
        start: {
          line: 344,
          column: 8
        },
        end: {
          line: 344,
          column: 13
        }
      },
      "118": {
        start: {
          line: 347,
          column: 8
        },
        end: {
          line: 347,
          column: 30
        }
      },
      "119": {
        start: {
          line: 348,
          column: 8
        },
        end: {
          line: 348,
          column: 30
        }
      },
      "120": {
        start: {
          line: 349,
          column: 8
        },
        end: {
          line: 349,
          column: 13
        }
      },
      "121": {
        start: {
          line: 357,
          column: 24
        },
        end: {
          line: 357,
          column: 44
        }
      },
      "122": {
        start: {
          line: 358,
          column: 4
        },
        end: {
          line: 360,
          column: 5
        }
      },
      "123": {
        start: {
          line: 359,
          column: 6
        },
        end: {
          line: 359,
          column: 12
        }
      },
      "124": {
        start: {
          line: 362,
          column: 29
        },
        end: {
          line: 362,
          column: 73
        }
      },
      "125": {
        start: {
          line: 363,
          column: 4
        },
        end: {
          line: 365,
          column: 5
        }
      },
      "126": {
        start: {
          line: 364,
          column: 6
        },
        end: {
          line: 364,
          column: 12
        }
      },
      "127": {
        start: {
          line: 367,
          column: 25
        },
        end: {
          line: 367,
          column: 36
        }
      },
      "128": {
        start: {
          line: 369,
          column: 21
        },
        end: {
          line: 369,
          column: 68
        }
      },
      "129": {
        start: {
          line: 370,
          column: 4
        },
        end: {
          line: 372,
          column: 5
        }
      },
      "130": {
        start: {
          line: 371,
          column: 6
        },
        end: {
          line: 371,
          column: 12
        }
      },
      "131": {
        start: {
          line: 374,
          column: 4
        },
        end: {
          line: 374,
          column: 29
        }
      },
      "132": {
        start: {
          line: 375,
          column: 4
        },
        end: {
          line: 375,
          column: 26
        }
      },
      "133": {
        start: {
          line: 376,
          column: 4
        },
        end: {
          line: 376,
          column: 20
        }
      },
      "134": {
        start: {
          line: 377,
          column: 4
        },
        end: {
          line: 377,
          column: 37
        }
      },
      "135": {
        start: {
          line: 384,
          column: 24
        },
        end: {
          line: 384,
          column: 44
        }
      },
      "136": {
        start: {
          line: 385,
          column: 4
        },
        end: {
          line: 387,
          column: 5
        }
      },
      "137": {
        start: {
          line: 386,
          column: 6
        },
        end: {
          line: 386,
          column: 12
        }
      },
      "138": {
        start: {
          line: 390,
          column: 6
        },
        end: {
          line: 390,
          column: 54
        }
      },
      "139": {
        start: {
          line: 391,
          column: 4
        },
        end: {
          line: 393,
          column: 5
        }
      },
      "140": {
        start: {
          line: 392,
          column: 6
        },
        end: {
          line: 392,
          column: 12
        }
      },
      "141": {
        start: {
          line: 395,
          column: 25
        },
        end: {
          line: 395,
          column: 36
        }
      },
      "142": {
        start: {
          line: 397,
          column: 25
        },
        end: {
          line: 397,
          column: 76
        }
      },
      "143": {
        start: {
          line: 398,
          column: 4
        },
        end: {
          line: 400,
          column: 5
        }
      },
      "144": {
        start: {
          line: 399,
          column: 6
        },
        end: {
          line: 399,
          column: 12
        }
      },
      "145": {
        start: {
          line: 402,
          column: 4
        },
        end: {
          line: 402,
          column: 29
        }
      },
      "146": {
        start: {
          line: 403,
          column: 4
        },
        end: {
          line: 403,
          column: 30
        }
      },
      "147": {
        start: {
          line: 404,
          column: 4
        },
        end: {
          line: 404,
          column: 24
        }
      },
      "148": {
        start: {
          line: 405,
          column: 4
        },
        end: {
          line: 405,
          column: 41
        }
      },
      "149": {
        start: {
          line: 415,
          column: 20
        },
        end: {
          line: 415,
          column: 46
        }
      },
      "150": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 418,
          column: 5
        }
      },
      "151": {
        start: {
          line: 417,
          column: 6
        },
        end: {
          line: 417,
          column: 17
        }
      },
      "152": {
        start: {
          line: 420,
          column: 4
        },
        end: {
          line: 420,
          column: 50
        }
      },
      "153": {
        start: {
          line: 429,
          column: 19
        },
        end: {
          line: 429,
          column: 38
        }
      },
      "154": {
        start: {
          line: 430,
          column: 4
        },
        end: {
          line: 432,
          column: 5
        }
      },
      "155": {
        start: {
          line: 431,
          column: 6
        },
        end: {
          line: 431,
          column: 12
        }
      },
      "156": {
        start: {
          line: 434,
          column: 27
        },
        end: {
          line: 434,
          column: 38
        }
      },
      "157": {
        start: {
          line: 436,
          column: 4
        },
        end: {
          line: 436,
          column: 74
        }
      },
      "158": {
        start: {
          line: 445,
          column: 19
        },
        end: {
          line: 445,
          column: 38
        }
      },
      "159": {
        start: {
          line: 446,
          column: 4
        },
        end: {
          line: 448,
          column: 5
        }
      },
      "160": {
        start: {
          line: 447,
          column: 6
        },
        end: {
          line: 447,
          column: 12
        }
      },
      "161": {
        start: {
          line: 450,
          column: 27
        },
        end: {
          line: 450,
          column: 38
        }
      },
      "162": {
        start: {
          line: 452,
          column: 4
        },
        end: {
          line: 452,
          column: 71
        }
      },
      "163": {
        start: {
          line: 461,
          column: 4
        },
        end: {
          line: 463,
          column: 5
        }
      },
      "164": {
        start: {
          line: 462,
          column: 6
        },
        end: {
          line: 462,
          column: 12
        }
      },
      "165": {
        start: {
          line: 465,
          column: 30
        },
        end: {
          line: 465,
          column: 41
        }
      },
      "166": {
        start: {
          line: 467,
          column: 4
        },
        end: {
          line: 467,
          column: 47
        }
      },
      "167": {
        start: {
          line: 468,
          column: 4
        },
        end: {
          line: 468,
          column: 69
        }
      },
      "168": {
        start: {
          line: 469,
          column: 4
        },
        end: {
          line: 469,
          column: 39
        }
      },
      "169": {
        start: {
          line: 478,
          column: 4
        },
        end: {
          line: 480,
          column: 5
        }
      },
      "170": {
        start: {
          line: 479,
          column: 6
        },
        end: {
          line: 479,
          column: 12
        }
      },
      "171": {
        start: {
          line: 482,
          column: 30
        },
        end: {
          line: 482,
          column: 41
        }
      },
      "172": {
        start: {
          line: 484,
          column: 4
        },
        end: {
          line: 484,
          column: 46
        }
      },
      "173": {
        start: {
          line: 485,
          column: 4
        },
        end: {
          line: 485,
          column: 66
        }
      },
      "174": {
        start: {
          line: 486,
          column: 4
        },
        end: {
          line: 486,
          column: 38
        }
      },
      "175": {
        start: {
          line: 495,
          column: 40
        },
        end: {
          line: 495,
          column: 51
        }
      },
      "176": {
        start: {
          line: 496,
          column: 4
        },
        end: {
          line: 496,
          column: 80
        }
      },
      "177": {
        start: {
          line: 502,
          column: 22
        },
        end: {
          line: 502,
          column: 34
        }
      },
      "178": {
        start: {
          line: 511,
          column: 20
        },
        end: {
          line: 516,
          column: 4
        }
      },
      "179": {
        start: {
          line: 524,
          column: 18
        },
        end: {
          line: 531,
          column: 4
        }
      },
      "180": {
        start: {
          line: 541,
          column: 28
        },
        end: {
          line: 541,
          column: 53
        }
      },
      "181": {
        start: {
          line: 543,
          column: 16
        },
        end: {
          line: 543,
          column: 78
        }
      },
      "182": {
        start: {
          line: 545,
          column: 2
        },
        end: {
          line: 547,
          column: 4
        }
      },
      "183": {
        start: {
          line: 546,
          column: 4
        },
        end: {
          line: 546,
          column: 28
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 2
          },
          end: {
            line: 31,
            column: 3
          }
        },
        loc: {
          start: {
            line: 31,
            column: 34
          },
          end: {
            line: 72,
            column: 3
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 77,
            column: 3
          }
        },
        loc: {
          start: {
            line: 77,
            column: 26
          },
          end: {
            line: 101,
            column: 3
          }
        },
        line: 77
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 93,
            column: 42
          },
          end: {
            line: 93,
            column: 43
          }
        },
        loc: {
          start: {
            line: 93,
            column: 48
          },
          end: {
            line: 93,
            column: 64
          }
        },
        line: 93
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 97,
            column: 27
          },
          end: {
            line: 97,
            column: 28
          }
        },
        loc: {
          start: {
            line: 97,
            column: 33
          },
          end: {
            line: 97,
            column: 49
          }
        },
        line: 97
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        loc: {
          start: {
            line: 106,
            column: 14
          },
          end: {
            line: 112,
            column: 3
          }
        },
        line: 106
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 117,
            column: 2
          },
          end: {
            line: 117,
            column: 3
          }
        },
        loc: {
          start: {
            line: 117,
            column: 10
          },
          end: {
            line: 143,
            column: 3
          }
        },
        line: 117
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 120,
            column: 31
          },
          end: {
            line: 120,
            column: 32
          }
        },
        loc: {
          start: {
            line: 120,
            column: 42
          },
          end: {
            line: 122,
            column: 5
          }
        },
        line: 120
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 124,
            column: 23
          },
          end: {
            line: 124,
            column: 24
          }
        },
        loc: {
          start: {
            line: 124,
            column: 33
          },
          end: {
            line: 134,
            column: 5
          }
        },
        line: 124
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 148,
            column: 2
          },
          end: {
            line: 148,
            column: 3
          }
        },
        loc: {
          start: {
            line: 148,
            column: 13
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 148
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 151,
            column: 31
          },
          end: {
            line: 151,
            column: 32
          }
        },
        loc: {
          start: {
            line: 151,
            column: 42
          },
          end: {
            line: 153,
            column: 5
          }
        },
        line: 151
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 155,
            column: 23
          },
          end: {
            line: 155,
            column: 24
          }
        },
        loc: {
          start: {
            line: 155,
            column: 33
          },
          end: {
            line: 162,
            column: 5
          }
        },
        line: 155
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 173,
            column: 2
          },
          end: {
            line: 173,
            column: 3
          }
        },
        loc: {
          start: {
            line: 173,
            column: 17
          },
          end: {
            line: 195,
            column: 3
          }
        },
        line: 173
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 202,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        },
        loc: {
          start: {
            line: 202,
            column: 16
          },
          end: {
            line: 205,
            column: 3
          }
        },
        line: 202
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 212,
            column: 3
          }
        },
        loc: {
          start: {
            line: 212,
            column: 16
          },
          end: {
            line: 215,
            column: 3
          }
        },
        line: 212
      },
      "14": {
        name: "(anonymous_14)",
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
            column: 15
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 223
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 233,
            column: 2
          },
          end: {
            line: 233,
            column: 3
          }
        },
        loc: {
          start: {
            line: 233,
            column: 22
          },
          end: {
            line: 257,
            column: 3
          }
        },
        line: 233
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 264,
            column: 2
          },
          end: {
            line: 264,
            column: 3
          }
        },
        loc: {
          start: {
            line: 264,
            column: 24
          },
          end: {
            line: 283,
            column: 3
          }
        },
        line: 264
      },
      "17": {
        name: "(anonymous_17)",
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
            column: 20
          },
          end: {
            line: 304,
            column: 3
          }
        },
        line: 291
      },
      "18": {
        name: "(anonymous_18)",
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
            column: 27
          },
          end: {
            line: 327,
            column: 3
          }
        },
        line: 314
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 337,
            column: 2
          },
          end: {
            line: 337,
            column: 3
          }
        },
        loc: {
          start: {
            line: 337,
            column: 22
          },
          end: {
            line: 351,
            column: 3
          }
        },
        line: 337
      },
      "20": {
        name: "(anonymous_20)",
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
            column: 20
          },
          end: {
            line: 378,
            column: 3
          }
        },
        line: 356
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 383,
            column: 2
          },
          end: {
            line: 383,
            column: 3
          }
        },
        loc: {
          start: {
            line: 383,
            column: 24
          },
          end: {
            line: 406,
            column: 3
          }
        },
        line: 383
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 414,
            column: 2
          },
          end: {
            line: 414,
            column: 3
          }
        },
        loc: {
          start: {
            line: 414,
            column: 17
          },
          end: {
            line: 421,
            column: 3
          }
        },
        line: 414
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 428,
            column: 2
          },
          end: {
            line: 428,
            column: 3
          }
        },
        loc: {
          start: {
            line: 428,
            column: 18
          },
          end: {
            line: 437,
            column: 3
          }
        },
        line: 428
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 444,
            column: 2
          },
          end: {
            line: 444,
            column: 3
          }
        },
        loc: {
          start: {
            line: 444,
            column: 18
          },
          end: {
            line: 453,
            column: 3
          }
        },
        line: 444
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 460,
            column: 2
          },
          end: {
            line: 460,
            column: 3
          }
        },
        loc: {
          start: {
            line: 460,
            column: 23
          },
          end: {
            line: 470,
            column: 3
          }
        },
        line: 460
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 477,
            column: 2
          },
          end: {
            line: 477,
            column: 3
          }
        },
        loc: {
          start: {
            line: 477,
            column: 21
          },
          end: {
            line: 487,
            column: 3
          }
        },
        line: 477
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 494,
            column: 2
          },
          end: {
            line: 494,
            column: 3
          }
        },
        loc: {
          start: {
            line: 494,
            column: 18
          },
          end: {
            line: 497,
            column: 3
          }
        },
        line: 494
      },
      "28": {
        name: "initTabs",
        decl: {
          start: {
            line: 540,
            column: 16
          },
          end: {
            line: 540,
            column: 24
          }
        },
        loc: {
          start: {
            line: 540,
            column: 34
          },
          end: {
            line: 548,
            column: 1
          }
        },
        line: 540
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 545,
            column: 17
          },
          end: {
            line: 545,
            column: 18
          }
        },
        loc: {
          start: {
            line: 545,
            column: 28
          },
          end: {
            line: 547,
            column: 3
          }
        },
        line: 545
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 31,
            column: 21
          },
          end: {
            line: 31,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 31,
            column: 30
          },
          end: {
            line: 31,
            column: 32
          }
        }],
        line: 31
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 42,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 42,
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
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 54,
            column: 4
          },
          end: {
            line: 59,
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
        line: 54
      },
      "3": {
        loc: {
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 4
          },
          end: {
            line: 66,
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
        line: 61
      },
      "4": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 85,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 85,
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
        line: 80
      },
      "5": {
        loc: {
          start: {
            line: 92,
            column: 4
          },
          end: {
            line: 98,
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
            line: 98,
            column: 5
          }
        }, {
          start: {
            line: 94,
            column: 11
          },
          end: {
            line: 98,
            column: 5
          }
        }],
        line: 92
      },
      "6": {
        loc: {
          start: {
            line: 107,
            column: 4
          },
          end: {
            line: 111,
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
            line: 111,
            column: 5
          }
        }, {
          start: {
            line: 109,
            column: 11
          },
          end: {
            line: 111,
            column: 5
          }
        }],
        line: 107
      },
      "7": {
        loc: {
          start: {
            line: 137,
            column: 23
          },
          end: {
            line: 137,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 137,
            column: 23
          },
          end: {
            line: 137,
            column: 56
          }
        }, {
          start: {
            line: 137,
            column: 60
          },
          end: {
            line: 137,
            column: 73
          }
        }],
        line: 137
      },
      "8": {
        loc: {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 178,
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
        line: 176
      },
      "9": {
        loc: {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 184,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 184,
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
        line: 181
      },
      "10": {
        loc: {
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 190,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 4
          },
          end: {
            line: 190,
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
        line: 188
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
            line: 248,
            column: 4
          },
          end: {
            line: 250,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 250,
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
        line: 248
      },
      "13": {
        loc: {
          start: {
            line: 256,
            column: 25
          },
          end: {
            line: 256,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 256,
            column: 25
          },
          end: {
            line: 256,
            column: 43
          }
        }, {
          start: {
            line: 256,
            column: 47
          },
          end: {
            line: 256,
            column: 70
          }
        }],
        line: 256
      },
      "14": {
        loc: {
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 274,
            column: 4
          },
          end: {
            line: 276,
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
        line: 274
      },
      "15": {
        loc: {
          start: {
            line: 282,
            column: 28
          },
          end: {
            line: 282,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 282,
            column: 28
          },
          end: {
            line: 282,
            column: 46
          }
        }, {
          start: {
            line: 282,
            column: 50
          },
          end: {
            line: 282,
            column: 73
          }
        }],
        line: 282
      },
      "16": {
        loc: {
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 297,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 297,
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
        line: 295
      },
      "17": {
        loc: {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 20
          }
        }, {
          start: {
            line: 295,
            column: 24
          },
          end: {
            line: 295,
            column: 64
          }
        }],
        line: 295
      },
      "18": {
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
      "19": {
        loc: {
          start: {
            line: 338,
            column: 4
          },
          end: {
            line: 350,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 340,
            column: 23
          }
        }, {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 344,
            column: 13
          }
        }, {
          start: {
            line: 345,
            column: 6
          },
          end: {
            line: 345,
            column: 24
          }
        }, {
          start: {
            line: 346,
            column: 6
          },
          end: {
            line: 349,
            column: 13
          }
        }],
        line: 338
      },
      "20": {
        loc: {
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 360,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 358,
            column: 4
          },
          end: {
            line: 360,
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
        line: 358
      },
      "21": {
        loc: {
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 365,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 363,
            column: 4
          },
          end: {
            line: 365,
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
        line: 363
      },
      "22": {
        loc: {
          start: {
            line: 370,
            column: 4
          },
          end: {
            line: 372,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 370,
            column: 4
          },
          end: {
            line: 372,
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
        line: 370
      },
      "23": {
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
      "24": {
        loc: {
          start: {
            line: 391,
            column: 4
          },
          end: {
            line: 393,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 391,
            column: 4
          },
          end: {
            line: 393,
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
        line: 391
      },
      "25": {
        loc: {
          start: {
            line: 398,
            column: 4
          },
          end: {
            line: 400,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 398,
            column: 4
          },
          end: {
            line: 400,
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
        line: 398
      },
      "26": {
        loc: {
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 418,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 416,
            column: 4
          },
          end: {
            line: 418,
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
        line: 416
      },
      "27": {
        loc: {
          start: {
            line: 430,
            column: 4
          },
          end: {
            line: 432,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 430,
            column: 4
          },
          end: {
            line: 432,
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
        line: 430
      },
      "28": {
        loc: {
          start: {
            line: 436,
            column: 28
          },
          end: {
            line: 436,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 436,
            column: 28
          },
          end: {
            line: 436,
            column: 46
          }
        }, {
          start: {
            line: 436,
            column: 50
          },
          end: {
            line: 436,
            column: 73
          }
        }],
        line: 436
      },
      "29": {
        loc: {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
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
        line: 446
      },
      "30": {
        loc: {
          start: {
            line: 452,
            column: 25
          },
          end: {
            line: 452,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 452,
            column: 25
          },
          end: {
            line: 452,
            column: 43
          }
        }, {
          start: {
            line: 452,
            column: 47
          },
          end: {
            line: 452,
            column: 70
          }
        }],
        line: 452
      },
      "31": {
        loc: {
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 463,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 461,
            column: 4
          },
          end: {
            line: 463,
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
        line: 461
      },
      "32": {
        loc: {
          start: {
            line: 478,
            column: 4
          },
          end: {
            line: 480,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 478,
            column: 4
          },
          end: {
            line: 480,
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
        line: 478
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
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0
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
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0
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
      "19": [0, 0, 0, 0],
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
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "17ba21540f314ab67f41adf6bb7711495e153670"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wazpneu5l = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1wazpneu5l();

/**
 * Tabs component
 *
 * @augments {ConfigurableComponent<TabsConfig>}
 */
class Tabs extends ConfigurableComponent {
  /**
   * @param {Element | null} $root - HTML element to use for component
   * @param {Partial<TabsConfig>} [config] - Tabs config
   */
  constructor($root, config = (cov_1wazpneu5l().b[0][0]++, {})) {
    cov_1wazpneu5l().f[0]++;
    cov_1wazpneu5l().s[2]++;
    super($root, config);
    this.changingHash = (cov_1wazpneu5l().s[0]++, false);
    /**
     * @type {string | undefined}
     * @deprecated Use {@link Tabs.panelClass} instead.
     */
    this.jsHiddenClass = void 0;
    /**
     * @type {MediaQueryList | null}
     */
    this.mql = (cov_1wazpneu5l().s[1]++, null);
    const {
      listClass,
      listItemClass,
      tabClass
    } = (cov_1wazpneu5l().s[3]++, this.config);
    const $tabs = (cov_1wazpneu5l().s[4]++, this.$root.querySelectorAll(`a.${tabClass}`));
    cov_1wazpneu5l().s[5]++;
    if (!$tabs.length) {
      cov_1wazpneu5l().b[1][0]++;
      cov_1wazpneu5l().s[6]++;
      throw new ElementError({
        component: Tabs,
        identifier: `Links (\`<a class="${tabClass}">\`)`
      });
    } else {
      cov_1wazpneu5l().b[1][1]++;
    }
    cov_1wazpneu5l().s[7]++;
    this.$tabs = $tabs;

    // Save bound functions so we can remove event listeners during teardown
    cov_1wazpneu5l().s[8]++;
    this.boundTabClick = this.onTabClick.bind(this);
    cov_1wazpneu5l().s[9]++;
    this.boundTabKeydown = this.onTabKeydown.bind(this);
    cov_1wazpneu5l().s[10]++;
    this.boundOnHashChange = this.onHashChange.bind(this);
    const $tabList = (cov_1wazpneu5l().s[11]++, this.$root.querySelector(`ul.${listClass}`));
    const $tabListItems = (cov_1wazpneu5l().s[12]++, this.$root.querySelectorAll(`li.${listItemClass}`));
    cov_1wazpneu5l().s[13]++;
    if (!$tabList) {
      cov_1wazpneu5l().b[2][0]++;
      cov_1wazpneu5l().s[14]++;
      throw new ElementError({
        component: Tabs,
        identifier: `List (\`<ul class="${listClass}">\`)`
      });
    } else {
      cov_1wazpneu5l().b[2][1]++;
    }
    cov_1wazpneu5l().s[15]++;
    if (!$tabListItems.length) {
      cov_1wazpneu5l().b[3][0]++;
      cov_1wazpneu5l().s[16]++;
      throw new ElementError({
        component: Tabs,
        identifier: `List items (\`<li class="${listItemClass}">\`)`
      });
    } else {
      cov_1wazpneu5l().b[3][1]++;
    }
    cov_1wazpneu5l().s[17]++;
    this.$tabList = $tabList;
    cov_1wazpneu5l().s[18]++;
    this.$tabListItems = $tabListItems;
    cov_1wazpneu5l().s[19]++;
    this.setupResponsiveChecks();
  }

  /**
   * Setup viewport resize check
   */
  setupResponsiveChecks() {
    cov_1wazpneu5l().f[1]++;
    const breakpoint = (cov_1wazpneu5l().s[20]++, getBreakpoint('tablet'));
    cov_1wazpneu5l().s[21]++;
    if (!breakpoint.value) {
      cov_1wazpneu5l().b[4][0]++;
      cov_1wazpneu5l().s[22]++;
      throw new ElementError({
        component: Tabs,
        identifier: `CSS custom property (\`${breakpoint.property}\`) on pseudo-class \`:root\``
      });
    } else {
      cov_1wazpneu5l().b[4][1]++;
    }

    // Media query list for NHS.UK frontend tablet breakpoint
    cov_1wazpneu5l().s[23]++;
    this.mql = window.matchMedia(`(min-width: ${breakpoint.value})`);

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    cov_1wazpneu5l().s[24]++;
    if ('addEventListener' in this.mql) {
      cov_1wazpneu5l().b[5][0]++;
      cov_1wazpneu5l().s[25]++;
      this.mql.addEventListener('change', () => {
        cov_1wazpneu5l().f[2]++;
        cov_1wazpneu5l().s[26]++;
        return this.checkMode();
      });
    } else {
      cov_1wazpneu5l().b[5][1]++;
      cov_1wazpneu5l().s[27]++;
      // @ts-expect-error Property 'addListener' does not exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      this.mql.addListener(() => {
        cov_1wazpneu5l().f[3]++;
        cov_1wazpneu5l().s[28]++;
        return this.checkMode();
      });
    }
    cov_1wazpneu5l().s[29]++;
    this.checkMode();
  }

  /**
   * Setup or teardown handler for viewport resize check
   */
  checkMode() {
    var _this$mql;
    cov_1wazpneu5l().f[4]++;
    cov_1wazpneu5l().s[30]++;
    if ((_this$mql = this.mql) != null && _this$mql.matches) {
      cov_1wazpneu5l().b[6][0]++;
      cov_1wazpneu5l().s[31]++;
      this.setup();
    } else {
      cov_1wazpneu5l().b[6][1]++;
      cov_1wazpneu5l().s[32]++;
      this.teardown();
    }
  }

  /**
   * Setup tab component
   */
  setup() {
    var _ref;
    cov_1wazpneu5l().f[5]++;
    cov_1wazpneu5l().s[33]++;
    this.$tabList.setAttribute('role', 'tablist');
    cov_1wazpneu5l().s[34]++;
    this.$tabListItems.forEach($item => {
      cov_1wazpneu5l().f[6]++;
      cov_1wazpneu5l().s[35]++;
      $item.setAttribute('role', 'presentation');
    });
    cov_1wazpneu5l().s[36]++;
    this.$tabs.forEach($tab => {
      cov_1wazpneu5l().f[7]++;
      cov_1wazpneu5l().s[37]++;
      // Set HTML attributes
      this.setAttributes($tab);

      // Handle events
      cov_1wazpneu5l().s[38]++;
      $tab.addEventListener('click', this.boundTabClick, true);
      cov_1wazpneu5l().s[39]++;
      $tab.addEventListener('keydown', this.boundTabKeydown, true);

      // Remove old active panels
      cov_1wazpneu5l().s[40]++;
      this.hideTab($tab);
    });

    // Show either the active tab according to the URL's hash or the first tab
    const $activeTab = (cov_1wazpneu5l().s[41]++, (_ref = (cov_1wazpneu5l().b[7][0]++, this.getTab(window.location.hash))) != null ? _ref : (cov_1wazpneu5l().b[7][1]++, this.$tabs[0]));
    cov_1wazpneu5l().s[42]++;
    this.showTab($activeTab);

    // Handle hashchange events
    cov_1wazpneu5l().s[43]++;
    window.addEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Teardown tab component
   */
  teardown() {
    cov_1wazpneu5l().f[8]++;
    cov_1wazpneu5l().s[44]++;
    this.$tabList.removeAttribute('role');
    cov_1wazpneu5l().s[45]++;
    this.$tabListItems.forEach($item => {
      cov_1wazpneu5l().f[9]++;
      cov_1wazpneu5l().s[46]++;
      $item.removeAttribute('role');
    });
    cov_1wazpneu5l().s[47]++;
    this.$tabs.forEach($tab => {
      cov_1wazpneu5l().f[10]++;
      cov_1wazpneu5l().s[48]++;
      // Remove events
      $tab.removeEventListener('click', this.boundTabClick, true);
      cov_1wazpneu5l().s[49]++;
      $tab.removeEventListener('keydown', this.boundTabKeydown, true);

      // Unset HTML attributes
      cov_1wazpneu5l().s[50]++;
      this.unsetAttributes($tab);
    });

    // Remove hashchange event handler
    cov_1wazpneu5l().s[51]++;
    window.removeEventListener('hashchange', this.boundOnHashChange, true);
  }

  /**
   * Handle hashchange event
   *
   * @returns {void} Returns void when prevented
   */
  onHashChange() {
    cov_1wazpneu5l().f[11]++;
    const {
      hash
    } = (cov_1wazpneu5l().s[52]++, window.location);
    const $tabWithHash = (cov_1wazpneu5l().s[53]++, this.getTab(hash));
    cov_1wazpneu5l().s[54]++;
    if (!$tabWithHash) {
      cov_1wazpneu5l().b[8][0]++;
      cov_1wazpneu5l().s[55]++;
      return;
    } else {
      cov_1wazpneu5l().b[8][1]++;
    }

    // Prevent changing the hash
    cov_1wazpneu5l().s[56]++;
    if (this.changingHash) {
      cov_1wazpneu5l().b[9][0]++;
      cov_1wazpneu5l().s[57]++;
      this.changingHash = false;
      cov_1wazpneu5l().s[58]++;
      return;
    } else {
      cov_1wazpneu5l().b[9][1]++;
    }

    // Show either the active tab according to the URL's hash or the first tab
    const $previousTab = (cov_1wazpneu5l().s[59]++, this.getCurrentTab());
    cov_1wazpneu5l().s[60]++;
    if (!$previousTab) {
      cov_1wazpneu5l().b[10][0]++;
      cov_1wazpneu5l().s[61]++;
      return;
    } else {
      cov_1wazpneu5l().b[10][1]++;
    }
    cov_1wazpneu5l().s[62]++;
    this.hideTab($previousTab);
    cov_1wazpneu5l().s[63]++;
    this.showTab($tabWithHash);
    cov_1wazpneu5l().s[64]++;
    $tabWithHash.focus();
  }

  /**
   * Hide panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hideTab($tab) {
    cov_1wazpneu5l().f[12]++;
    cov_1wazpneu5l().s[65]++;
    this.unhighlightTab($tab);
    cov_1wazpneu5l().s[66]++;
    this.hidePanel($tab);
  }

  /**
   * Show panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showTab($tab) {
    cov_1wazpneu5l().f[13]++;
    cov_1wazpneu5l().s[67]++;
    this.highlightTab($tab);
    cov_1wazpneu5l().s[68]++;
    this.showPanel($tab);
  }

  /**
   * Get tab link by hash
   *
   * @param {string} hash - Hash fragment including #
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getTab(hash) {
    cov_1wazpneu5l().f[14]++;
    const {
      tabClass
    } = (cov_1wazpneu5l().s[69]++, this.config);
    cov_1wazpneu5l().s[70]++;
    return this.$root.querySelector(`a.${tabClass}[href="${hash}"]`);
  }

  /**
   * Set tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  setAttributes($tab) {
    var _ref2;
    cov_1wazpneu5l().f[15]++;
    const panelId = (cov_1wazpneu5l().s[71]++, $tab.hash.replace('#', ''));
    cov_1wazpneu5l().s[72]++;
    if (!panelId) {
      cov_1wazpneu5l().b[11][0]++;
      cov_1wazpneu5l().s[73]++;
      return;
    } else {
      cov_1wazpneu5l().b[11][1]++;
    }

    // Set tab attributes
    cov_1wazpneu5l().s[74]++;
    $tab.setAttribute('id', `tab_${panelId}`);
    cov_1wazpneu5l().s[75]++;
    $tab.setAttribute('role', 'tab');
    cov_1wazpneu5l().s[76]++;
    $tab.setAttribute('aria-controls', panelId);
    cov_1wazpneu5l().s[77]++;
    $tab.setAttribute('aria-selected', 'false');
    cov_1wazpneu5l().s[78]++;
    $tab.setAttribute('tabindex', '-1');

    // Set panel attributes
    const $panel = (cov_1wazpneu5l().s[79]++, this.getPanel($tab));
    cov_1wazpneu5l().s[80]++;
    if (!$panel) {
      cov_1wazpneu5l().b[12][0]++;
      cov_1wazpneu5l().s[81]++;
      return;
    } else {
      cov_1wazpneu5l().b[12][1]++;
    }
    const {
      panelClass
    } = (cov_1wazpneu5l().s[82]++, this.config);
    cov_1wazpneu5l().s[83]++;
    $panel.setAttribute('role', 'tabpanel');
    cov_1wazpneu5l().s[84]++;
    $panel.setAttribute('aria-labelledby', $tab.id);
    cov_1wazpneu5l().s[85]++;
    $panel.classList.add((_ref2 = (cov_1wazpneu5l().b[13][0]++, this.jsHiddenClass)) != null ? _ref2 : (cov_1wazpneu5l().b[13][1]++, `${panelClass}--hidden`));
  }

  /**
   * Unset tab link and panel attributes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unsetAttributes($tab) {
    var _ref3;
    cov_1wazpneu5l().f[16]++;
    cov_1wazpneu5l().s[86]++;
    // unset tab attributes
    $tab.removeAttribute('id');
    cov_1wazpneu5l().s[87]++;
    $tab.removeAttribute('role');
    cov_1wazpneu5l().s[88]++;
    $tab.removeAttribute('aria-controls');
    cov_1wazpneu5l().s[89]++;
    $tab.removeAttribute('aria-selected');
    cov_1wazpneu5l().s[90]++;
    $tab.removeAttribute('tabindex');

    // unset panel attributes
    const $panel = (cov_1wazpneu5l().s[91]++, this.getPanel($tab));
    cov_1wazpneu5l().s[92]++;
    if (!$panel) {
      cov_1wazpneu5l().b[14][0]++;
      cov_1wazpneu5l().s[93]++;
      return;
    } else {
      cov_1wazpneu5l().b[14][1]++;
    }
    const {
      panelClass
    } = (cov_1wazpneu5l().s[94]++, this.config);
    cov_1wazpneu5l().s[95]++;
    $panel.removeAttribute('role');
    cov_1wazpneu5l().s[96]++;
    $panel.removeAttribute('aria-labelledby');
    cov_1wazpneu5l().s[97]++;
    $panel.classList.remove((_ref3 = (cov_1wazpneu5l().b[15][0]++, this.jsHiddenClass)) != null ? _ref3 : (cov_1wazpneu5l().b[15][1]++, `${panelClass}--hidden`));
  }

  /**
   * Handle tab link clicks
   *
   * @param {MouseEvent} event - Mouse click event
   * @returns {void} Returns void
   */
  onTabClick(event) {
    cov_1wazpneu5l().f[17]++;
    const $currentTab = (cov_1wazpneu5l().s[98]++, this.getCurrentTab());
    const $nextTab = (cov_1wazpneu5l().s[99]++, event.currentTarget);
    cov_1wazpneu5l().s[100]++;
    if ((cov_1wazpneu5l().b[17][0]++, !$currentTab) || (cov_1wazpneu5l().b[17][1]++, !($nextTab instanceof HTMLAnchorElement))) {
      cov_1wazpneu5l().b[16][0]++;
      cov_1wazpneu5l().s[101]++;
      return;
    } else {
      cov_1wazpneu5l().b[16][1]++;
    }
    cov_1wazpneu5l().s[102]++;
    event.preventDefault();
    cov_1wazpneu5l().s[103]++;
    this.hideTab($currentTab);
    cov_1wazpneu5l().s[104]++;
    this.showTab($nextTab);
    cov_1wazpneu5l().s[105]++;
    this.createHistoryEntry($nextTab);
  }

  /**
   * Update browser URL hash fragment for tab
   *
   * - Allows back/forward to navigate tabs
   * - Avoids page jump when hash changes
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  createHistoryEntry($tab) {
    cov_1wazpneu5l().f[18]++;
    const $panel = (cov_1wazpneu5l().s[106]++, this.getPanel($tab));
    cov_1wazpneu5l().s[107]++;
    if (!$panel) {
      cov_1wazpneu5l().b[18][0]++;
      cov_1wazpneu5l().s[108]++;
      return;
    } else {
      cov_1wazpneu5l().b[18][1]++;
    }

    // Save and restore the id so the page doesn't jump when a user clicks a tab
    // (which changes the hash)
    const panelId = (cov_1wazpneu5l().s[109]++, $panel.id);
    cov_1wazpneu5l().s[110]++;
    $panel.id = '';
    cov_1wazpneu5l().s[111]++;
    this.changingHash = true;
    cov_1wazpneu5l().s[112]++;
    window.location.hash = panelId;
    cov_1wazpneu5l().s[113]++;
    $panel.id = panelId;
  }

  /**
   * Handle tab keydown event
   *
   * - Press right arrow for next tab
   * - Press left arrow for previous tab
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  onTabKeydown(event) {
    cov_1wazpneu5l().f[19]++;
    cov_1wazpneu5l().s[114]++;
    switch (event.key) {
      // 'Left' and 'Right' required for Edge 16 support.
      case 'ArrowLeft':
        cov_1wazpneu5l().b[19][0]++;
      case 'Left':
        cov_1wazpneu5l().b[19][1]++;
        cov_1wazpneu5l().s[115]++;
        this.activatePreviousTab();
        cov_1wazpneu5l().s[116]++;
        event.preventDefault();
        cov_1wazpneu5l().s[117]++;
        break;
      case 'ArrowRight':
        cov_1wazpneu5l().b[19][2]++;
      case 'Right':
        cov_1wazpneu5l().b[19][3]++;
        cov_1wazpneu5l().s[118]++;
        this.activateNextTab();
        cov_1wazpneu5l().s[119]++;
        event.preventDefault();
        cov_1wazpneu5l().s[120]++;
        break;
    }
  }

  /**
   * Activate next tab
   */
  activateNextTab() {
    cov_1wazpneu5l().f[20]++;
    const $currentTab = (cov_1wazpneu5l().s[121]++, this.getCurrentTab());
    cov_1wazpneu5l().s[122]++;
    if (!($currentTab != null && $currentTab.parentElement)) {
      cov_1wazpneu5l().b[20][0]++;
      cov_1wazpneu5l().s[123]++;
      return;
    } else {
      cov_1wazpneu5l().b[20][1]++;
    }
    const $nextTabListItem = (cov_1wazpneu5l().s[124]++, $currentTab.parentElement.nextElementSibling);
    cov_1wazpneu5l().s[125]++;
    if (!$nextTabListItem) {
      cov_1wazpneu5l().b[21][0]++;
      cov_1wazpneu5l().s[126]++;
      return;
    } else {
      cov_1wazpneu5l().b[21][1]++;
    }
    const {
      tabClass
    } = (cov_1wazpneu5l().s[127]++, this.config);
    const $nextTab = (cov_1wazpneu5l().s[128]++, $nextTabListItem.querySelector(`a.${tabClass}`));
    cov_1wazpneu5l().s[129]++;
    if (!$nextTab) {
      cov_1wazpneu5l().b[22][0]++;
      cov_1wazpneu5l().s[130]++;
      return;
    } else {
      cov_1wazpneu5l().b[22][1]++;
    }
    cov_1wazpneu5l().s[131]++;
    this.hideTab($currentTab);
    cov_1wazpneu5l().s[132]++;
    this.showTab($nextTab);
    cov_1wazpneu5l().s[133]++;
    $nextTab.focus();
    cov_1wazpneu5l().s[134]++;
    this.createHistoryEntry($nextTab);
  }

  /**
   * Activate previous tab
   */
  activatePreviousTab() {
    cov_1wazpneu5l().f[21]++;
    const $currentTab = (cov_1wazpneu5l().s[135]++, this.getCurrentTab());
    cov_1wazpneu5l().s[136]++;
    if (!($currentTab != null && $currentTab.parentElement)) {
      cov_1wazpneu5l().b[23][0]++;
      cov_1wazpneu5l().s[137]++;
      return;
    } else {
      cov_1wazpneu5l().b[23][1]++;
    }
    const $previousTabListItem = (cov_1wazpneu5l().s[138]++, $currentTab.parentElement.previousElementSibling);
    cov_1wazpneu5l().s[139]++;
    if (!$previousTabListItem) {
      cov_1wazpneu5l().b[24][0]++;
      cov_1wazpneu5l().s[140]++;
      return;
    } else {
      cov_1wazpneu5l().b[24][1]++;
    }
    const {
      tabClass
    } = (cov_1wazpneu5l().s[141]++, this.config);
    const $previousTab = (cov_1wazpneu5l().s[142]++, $previousTabListItem.querySelector(`a.${tabClass}`));
    cov_1wazpneu5l().s[143]++;
    if (!$previousTab) {
      cov_1wazpneu5l().b[25][0]++;
      cov_1wazpneu5l().s[144]++;
      return;
    } else {
      cov_1wazpneu5l().b[25][1]++;
    }
    cov_1wazpneu5l().s[145]++;
    this.hideTab($currentTab);
    cov_1wazpneu5l().s[146]++;
    this.showTab($previousTab);
    cov_1wazpneu5l().s[147]++;
    $previousTab.focus();
    cov_1wazpneu5l().s[148]++;
    this.createHistoryEntry($previousTab);
  }

  /**
   * Get tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   * @returns {Element | null} Tab panel
   */
  getPanel($tab) {
    cov_1wazpneu5l().f[22]++;
    const panelId = (cov_1wazpneu5l().s[149]++, $tab.hash.replace('#', ''));
    cov_1wazpneu5l().s[150]++;
    if (!panelId) {
      cov_1wazpneu5l().b[26][0]++;
      cov_1wazpneu5l().s[151]++;
      return null;
    } else {
      cov_1wazpneu5l().b[26][1]++;
    }
    cov_1wazpneu5l().s[152]++;
    return this.$root.querySelector(`#${panelId}`);
  }

  /**
   * Show tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  showPanel($tab) {
    var _ref4;
    cov_1wazpneu5l().f[23]++;
    const $panel = (cov_1wazpneu5l().s[153]++, this.getPanel($tab));
    cov_1wazpneu5l().s[154]++;
    if (!$panel) {
      cov_1wazpneu5l().b[27][0]++;
      cov_1wazpneu5l().s[155]++;
      return;
    } else {
      cov_1wazpneu5l().b[27][1]++;
    }
    const {
      panelClass
    } = (cov_1wazpneu5l().s[156]++, this.config);
    cov_1wazpneu5l().s[157]++;
    $panel.classList.remove((_ref4 = (cov_1wazpneu5l().b[28][0]++, this.jsHiddenClass)) != null ? _ref4 : (cov_1wazpneu5l().b[28][1]++, `${panelClass}--hidden`));
  }

  /**
   * Hide tab panel for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  hidePanel($tab) {
    var _ref5;
    cov_1wazpneu5l().f[24]++;
    const $panel = (cov_1wazpneu5l().s[158]++, this.getPanel($tab));
    cov_1wazpneu5l().s[159]++;
    if (!$panel) {
      cov_1wazpneu5l().b[29][0]++;
      cov_1wazpneu5l().s[160]++;
      return;
    } else {
      cov_1wazpneu5l().b[29][1]++;
    }
    const {
      panelClass
    } = (cov_1wazpneu5l().s[161]++, this.config);
    cov_1wazpneu5l().s[162]++;
    $panel.classList.add((_ref5 = (cov_1wazpneu5l().b[30][0]++, this.jsHiddenClass)) != null ? _ref5 : (cov_1wazpneu5l().b[30][1]++, `${panelClass}--hidden`));
  }

  /**
   * Unset 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  unhighlightTab($tab) {
    cov_1wazpneu5l().f[25]++;
    cov_1wazpneu5l().s[163]++;
    if (!$tab.parentElement) {
      cov_1wazpneu5l().b[31][0]++;
      cov_1wazpneu5l().s[164]++;
      return;
    } else {
      cov_1wazpneu5l().b[31][1]++;
    }
    const {
      listItemClass
    } = (cov_1wazpneu5l().s[165]++, this.config);
    cov_1wazpneu5l().s[166]++;
    $tab.setAttribute('aria-selected', 'false');
    cov_1wazpneu5l().s[167]++;
    $tab.parentElement.classList.remove(`${listItemClass}--selected`);
    cov_1wazpneu5l().s[168]++;
    $tab.setAttribute('tabindex', '-1');
  }

  /**
   * Set 'selected' state for tab link
   *
   * @param {HTMLAnchorElement} $tab - Tab link
   */
  highlightTab($tab) {
    cov_1wazpneu5l().f[26]++;
    cov_1wazpneu5l().s[169]++;
    if (!$tab.parentElement) {
      cov_1wazpneu5l().b[32][0]++;
      cov_1wazpneu5l().s[170]++;
      return;
    } else {
      cov_1wazpneu5l().b[32][1]++;
    }
    const {
      listItemClass
    } = (cov_1wazpneu5l().s[171]++, this.config);
    cov_1wazpneu5l().s[172]++;
    $tab.setAttribute('aria-selected', 'true');
    cov_1wazpneu5l().s[173]++;
    $tab.parentElement.classList.add(`${listItemClass}--selected`);
    cov_1wazpneu5l().s[174]++;
    $tab.setAttribute('tabindex', '0');
  }

  /**
   * Get current tab link
   *
   * @returns {HTMLAnchorElement | null} Tab link
   */
  getCurrentTab() {
    cov_1wazpneu5l().f[27]++;
    const {
      listItemClass,
      tabClass
    } = (cov_1wazpneu5l().s[175]++, this.config);
    cov_1wazpneu5l().s[176]++;
    return this.$root.querySelector(`.${listItemClass}--selected a.${tabClass}`);
  }

  /**
   * Name for the component used when initialising using data-module attributes
   */
}

/**
 * Initialise tabs component
 *
 * @deprecated Use {@link createAll | `createAll(Tabs, options)`} instead.
 * @param {InitOptions & Partial<TabsConfig>} [options]
 */
Tabs.moduleName = (cov_1wazpneu5l().s[177]++, 'nhsuk-tabs');
/**
 * Tabs default config
 *
 * @see {@link TabsConfig}
 * @constant
 * @type {TabsConfig}
 */
Tabs.defaults = (cov_1wazpneu5l().s[178]++, Object.freeze({
  panelClass: 'nhsuk-tabs__panel',
  listClass: 'nhsuk-tabs__list',
  listItemClass: 'nhsuk-tabs__list-item',
  tabClass: 'nhsuk-tabs__tab'
}));
/**
 * Tabs config schema
 *
 * @constant
 * @satisfies {Schema<TabsConfig>}
 */
Tabs.schema = (cov_1wazpneu5l().s[179]++, Object.freeze({
  properties: {
    panelClass: {
      type: 'string'
    },
    listClass: {
      type: 'string'
    },
    listItemClass: {
      type: 'string'
    },
    tabClass: {
      type: 'string'
    }
  }
}));
function initTabs(options) {
  cov_1wazpneu5l().f[28]++;
  const {
    scope: $scope
  } = (cov_1wazpneu5l().s[180]++, normaliseOptions(options));
  const $tabs = (cov_1wazpneu5l().s[181]++, $scope == null ? void 0 : $scope.querySelectorAll(`[data-module="${Tabs.moduleName}"]`));
  cov_1wazpneu5l().s[182]++;
  $tabs == null || $tabs.forEach($root => {
    cov_1wazpneu5l().f[29]++;
    cov_1wazpneu5l().s[183]++;
    new Tabs($root, options);
  });
}

/**
 * Tabs config
 *
 * @typedef {object} TabsConfig
 * @property {string} panelClass - Tabs panel class
 * @property {string} listClass - Tabs list class
 * @property {string} listItemClass - Tabs list item class
 * @property {string} tabClass - Tabs link class
 */

/**
 * @import { createAll, InitOptions } from '../../index.mjs'
 * @import { Schema } from '../../common/configuration/index.mjs'
 */

export { Tabs, initTabs };
//# sourceMappingURL=tabs.mjs.map
