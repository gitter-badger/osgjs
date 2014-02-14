__report = {
  "info": {
    "file": "js/osg/RenderBin.js",
    "fileShort": "/RenderBin.js",
    "fileSafe": "_RenderBin_js",
    "link": "files/_RenderBin_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 343,
          "logical": 248
        },
        "cyclomatic": 34,
        "halstead": {
          "operators": {
            "distinct": 23,
            "total": 615,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 120,
            "total": 741,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 1356,
          "vocabulary": 143,
          "difficulty": 71.0125,
          "volume": 9708.785532671496,
          "effort": 689445.1326388346,
          "bugs": 3.236261844223832,
          "time": 38302.50736882415
        }
      }
    },
    "functions": [
      {
        "name": "osg.RenderBin",
        "line": 1,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 9
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 53,
            "vocabulary": 21,
            "difficulty": 3.411764705882353,
            "volume": 232.7928234072743,
            "effort": 794.2343386836418,
            "bugs": 0.07759760780242476,
            "time": 44.12412992686899
          }
        }
      },
      {
        "name": "RenderBin",
        "line": 17,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 5,
            "vocabulary": 5,
            "difficulty": 1.5,
            "volume": 11.60964047443681,
            "effort": 17.414460711655217,
            "bugs": 0.0038698801581456034,
            "time": 0.9674700395364009
          }
        }
      },
      {
        "name": "DepthSortedBin",
        "line": 20,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 18,
            "vocabulary": 10,
            "difficulty": 4.5,
            "volume": 59.794705707972525,
            "effort": 269.07617568587636,
            "bugs": 0.019931568569324175,
            "time": 14.948676426993131
          }
        }
      },
      {
        "name": "_createRenderBin",
        "line": 28,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 33,
            "vocabulary": 11,
            "difficulty": 9.600000000000001,
            "volume": 114.16124341503082,
            "effort": 1095.9479367842962,
            "bugs": 0.03805374780501027,
            "time": 60.88599648801645
          }
        }
      },
      {
        "name": "getStateGraphList",
        "line": 34,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "copyLeavesFromStateGraphListToRenderLeafList",
        "line": 35,
        "complexity": {
          "sloc": {
            "physical": 23,
            "logical": 17
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 46,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 21,
              "total": 54,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 100,
            "vocabulary": 30,
            "difficulty": 11.571428571428573,
            "volume": 490.6890595608519,
            "effort": 5677.973403489858,
            "bugs": 0.1635630198536173,
            "time": 315.4429668605477
          }
        }
      },
      {
        "name": "sortBackToFront",
        "line": 59,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 16,
            "vocabulary": 11,
            "difficulty": 3.333333333333333,
            "volume": 55.350905898196764,
            "effort": 184.50301966065587,
            "bugs": 0.018450301966065587,
            "time": 10.250167758925326
          }
        }
      },
      {
        "name": "cmp",
        "line": 61,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 6,
            "difficulty": 3,
            "volume": 25.84962500721156,
            "effort": 77.54887502163469,
            "bugs": 0.00861654166907052,
            "time": 4.308270834535261
          }
        }
      },
      {
        "name": "sortImplementation",
        "line": 67,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 7
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 24,
            "vocabulary": 15,
            "difficulty": 4.8125,
            "volume": 93.76537429460444,
            "effort": 451.2458637927839,
            "bugs": 0.03125512476486815,
            "time": 25.06921465515466
          }
        }
      },
      {
        "name": "sort",
        "line": 79,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 10
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 49,
            "vocabulary": 22,
            "difficulty": 8.653846153846153,
            "volume": 218.51214931322758,
            "effort": 1890.970522902931,
            "bugs": 0.0728373831044092,
            "time": 105.05391793905171
          }
        }
      },
      {
        "name": "setParent",
        "line": 94,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "getParent",
        "line": 95,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "getBinNumber",
        "line": 96,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "findOrInsert",
        "line": 97,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 8
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 27,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 47,
            "vocabulary": 17,
            "difficulty": 9.450000000000001,
            "volume": 192.11075353876598,
            "effort": 1815.4466209413388,
            "bugs": 0.06403691784625533,
            "time": 100.85814560785215
          }
        }
      },
      {
        "name": "getStage",
        "line": 108,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "addStateGraph",
        "line": 109,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 8,
            "vocabulary": 6,
            "difficulty": 1.25,
            "volume": 20.67970000576925,
            "effort": 25.84962500721156,
            "bugs": 0.006893233335256416,
            "time": 1.43609027817842
          }
        }
      },
      {
        "name": "reset",
        "line": 110,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 5
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 32,
            "vocabulary": 13,
            "difficulty": 2.7,
            "volume": 118.41407098051495,
            "effort": 319.71799164739036,
            "bugs": 0.039471356993504986,
            "time": 17.762110647077243
          }
        }
      },
      {
        "name": "applyPositionedAttribute",
        "line": 117,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 56,
            "vocabulary": 21,
            "difficulty": 8,
            "volume": 245.9697756756106,
            "effort": 1967.7582054048848,
            "bugs": 0.08198992522520354,
            "time": 109.31990030027139
          }
        }
      },
      {
        "name": "drawImplementation",
        "line": 131,
        "complexity": {
          "sloc": {
            "physical": 37,
            "logical": 24
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 62,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 71,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 133,
            "vocabulary": 38,
            "difficulty": 18.46,
            "volume": 697.9743592879968,
            "effort": 12884.60667245642,
            "bugs": 0.2326581197626656,
            "time": 715.8114818031345
          }
        }
      },
      {
        "name": "cmp",
        "line": 140,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 6,
            "difficulty": 3,
            "volume": 25.84962500721156,
            "effort": 77.54887502163469,
            "bugs": 0.00861654166907052,
            "time": 4.308270834535261
          }
        }
      },
      {
        "name": "drawLeafs",
        "line": 169,
        "complexity": {
          "sloc": {
            "physical": 174,
            "logical": 117
          },
          "cyclomatic": 21,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 277,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 61,
              "total": 355,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 632,
            "vocabulary": 74,
            "difficulty": 37.82786885245901,
            "volume": 3924.374527077497,
            "effort": 148450.72493821842,
            "bugs": 1.3081248423591656,
            "time": 8247.26249656769
          }
        }
      }
    ],
    "maintainability": 59.3373716778325,
    "module": "/RenderBin.js"
  },
  "jshint": {
    "messages": []
  }
}