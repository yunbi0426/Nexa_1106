{
  "file": {
    "version": "1.0",
    "package": "model",
    "name": "svcMac01",
    "alias": "svcMac01",
    "description": ""
  },
  "workflow": [
    {
      "name": "start",
      "type": "start",
      "alias": "Start",
      "description": "",
      "next": "Select1",
      "position": {
        "x": 300,
        "y": 225
      }
    },
    {
      "name": "end",
      "type": "end",
      "alias": "End",
      "description": "",
      "position": {
        "x": 1750,
        "y": 225
      }
    },
    {
      "alias": "SQL1",
      "description": "",
      "type": "sql",
      "position": {
        "x": 510,
        "y": 225
      },
      "name": "Select1",
      "next": "If1",
      "usecurrentrow": true,
      "datasource": "",
      "target": "",
      "output": "",
      "sql": "",
      "insertquery": "",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "all",
      "modulename": "workflow.Select",
      "actiontype": "query",
      "sqltype": "select",
      "_designer": {
        "mode": "designer",
        "isCustomSql": false,
        "designerModel": {
          "activeTab": "select",
          "selectedColumns": [],
          "joins": [],
          "conditions": [],
          "orderBy": [],
          "tableSearch": "",
          "tablePanelsExpanded": true,
          "conditionLogical": "AND"
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 582
      }
    },
    {
      "alias": "If1",
      "description": "",
      "type": "if",
      "position": {
        "x": 1180,
        "y": 225
      },
      "name": "If1",
      "conditions": [
        {
          "conditiontype": "if",
          "condition": "",
          "description": "",
          "next": "end"
        },
        {
          "conditiontype": "else",
          "condition": "",
          "description": "",
          "next": ""
        }
      ]
    }
  ],
  "comments": [],
  "localvariables": {
    "variables": [],
    "datasets": []
  },
  "request": {
    "variables": [],
    "datasets": []
  },
  "response": {
    "variables": [],
    "datasets": []
  }
}