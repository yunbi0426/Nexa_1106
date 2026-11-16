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
        "x": 2990,
        "y": 225
      }
    },
    {
      "alias": "SQL1",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1080,
        "y": 225
      },
      "name": "Select1",
      "next": "Procedure1",
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
      "alias": "Procedure1",
      "description": "",
      "type": "procedure",
      "position": {
        "x": 2320,
        "y": 225
      },
      "name": "Procedure1",
      "next": "end",
      "datasource": "",
      "target": "",
      "sql": "",
      "request": [],
      "response": {
        "columnmapping": []
      },
      "nodesize": {
        "width": 550,
        "height": 0
      }
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