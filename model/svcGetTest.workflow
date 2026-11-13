{
  "file": {
    "version": "1.0",
    "package": "model",
    "name": "svcGetTest",
    "alias": "svcGetTest",
    "description": ""
  },
  "workflow": [
    {
      "name": "start",
      "type": "start",
      "alias": "Start",
      "description": "",
      "next": "end",
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
        "x": 510,
        "y": 225
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
    "datasets": [
      {
        "name": "gdsTest",
        "description": "",
        "columns": [
          {
            "name": "Column0",
            "type": "STRING",
            "datasize": 80,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "Column1",
            "type": "STRING",
            "datasize": 80,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      }
    ]
  }
}