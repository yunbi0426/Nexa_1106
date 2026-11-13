{
  "file": {
    "version": "1.0",
    "package": "model",
    "name": "svcTest",
    "alias": "svcTest",
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
        "name": "Dataset00",
        "description": "",
        "columns": [
          {
            "name": "Column0",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "Column1",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "Column2",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      }
    ]
  }
}