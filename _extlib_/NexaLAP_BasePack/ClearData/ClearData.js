//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================  
// Object : nexacro.ClearData 
// Group : Action 
//==============================================================================  
if (!nexacro.ClearData) 
{
    nexacro.ClearData = function(id, parent) 
	{
        nexacro.Action.call(this, id, parent);
    };  
              
    nexacro.ClearData.prototype = nexacro._createPrototype(nexacro.Action, nexacro.ClearData);  
    nexacro.ClearData.prototype._type_name = "ClearData";

    //===============================================================  
    // nexacro.ClearData : Create & Destroy  
    //===============================================================  
    nexacro.ClearData.prototype.destroy = function () 
	{
        nexacro.Action.prototype.destroy.call(this);
    };

    //===============================================================  
    // nexacro.ClearData : properties stting
    //=============================================================== 
	//Popup parameta Dataset setting
	this._targetDataset = "";
	nexacro.ClearData.prototype.set_targetDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._targetDataset != v) {
			this._targetDataset = v;
		}
	}; 

    //===============================================================  
    // nexacro.ClearData : Method  
    //===============================================================  
    nexacro.ClearData.prototype.run = function () 
	{
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let bSucc = false;
		if(!this.gfnIsNull(oTargetDs)){
			let nRowCnt = oTargetDs.clearData();
            bSucc = true;
		}

		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};	
	
	//===============================================================		
    // nexacro.ClearData : Event		
    //===============================================================
	nexacro.ClearData.prototype.on_fire_onsuccess = function (userdata)
	{
		let event = this.onsuccess;
		
		//이벤트가 존재하고 사용자가 정의한 이벤트 핸들러 함수가 있을 경우
		if (event && event._has_handlers)
		{
		  //ActionSuccessEventInfo 생성
		  let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata);
		  
		  //리턴값이 필요 없으므로 _fireEvent 함수 실행
		  event._fireEvent(this, evt);
		}
	};
	  
	nexacro.ClearData.prototype.on_fire_onerror = function (userdata)
	{
		let event = this.onerror;
		
		//이벤트가 존재하고 사용자가 정의한 이벤트 핸들러 함수가 있을 경우
		if (event && event._has_handlers)
		{
		  //ActionErrorEventInfo 생성
		  let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata);
		  
		  //리턴값이 필요 없으므로 _fireEvent 함수 실행
		  event._fireEvent(this, evt);
		}
	};
}
