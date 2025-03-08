var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Max height",
      "code": "mht",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio<br>",
        "x": "Not Swerve"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Vortex<br>",
        "c": "Kraken<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "What is your average cycle time",
      "code": "act",
      "type": "number"
      "defaultValue": "0"
    },
    { "name": "Can your robot climb",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Deep<br>",
        "f": "Shallow<br>",
        "c": "None<br>", 
    },
    { "name": "What is your robots max speed (ft/s)",
      "code": "ms",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Does your robot use cameras to auto align",
      "code": "caa",
      "type": "bool"
    },
    { "name": "Can you play defense",
      "code": "pd",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
    { "name": "Can your robot score coral",
      "code": "cyn",
      "type": "bool"
    },
    { "name": "What levels can your robot score on",
      "code": "lvl",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "4": "Level 4<br>"
    },
    { "name": "Can your robot pick up coral off the ground",
      "code": "gi",
      "type": "bool"
    },
    { "name": "Can your robot take coral from the coral station",
      "code": "cs",
      "type": "bool"
    },
  ],
  "teleop": [
    { "name": "Can your robot take algae off the reef",
      "code": "tar",
      "type": "bool"
    },
    { "name": "Can your robot pick up algae off the floor",
      "code": "paf",
      "type": "bool"
    },
    { "name": "Can your robot score algae in the processor ",
      "code": "sap",
      "type": "bool"
    },
    { "name": "Can your robot score algae in the barge ",
      "code": "sab",
      "type": "bool"
    },
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
