//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.DeleteData		
// Group : Action		
//==============================================================================		
if (!nexacro.DeleteData)		
{		
    nexacro.DeleteData = function(id, parent)		
    {		
        nexacro.Action.call(this, id, parent);
    };		
        		
    nexacro.DeleteData.prototype = nexacro._createPrototype(nexacro.Action, nexacro.DeleteData);		
    nexacro.DeleteData.prototype._type_name = "DeleteData";		
	
	//===============================================================		
    // nexacro.DeleteData : Create & Destroy		
    //===============================================================		
    nexacro.DeleteData.prototype.destroy = function()		
	{	
		nexacro.Action.prototype.destroy.call(this);
	};	

    //===============================================================  
    // nexacro.DeleteData : properties stting
    //=============================================================== 
	//Popup parameta Dataset setting
	this._targetDataset = "";
	nexacro.DeleteData.prototype.set_targetDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._targetDataset != v) {
			this._targetDataset = v;
		}
	}; 
    //===============================================================		
    // nexacro.DeleteData : Method		
    //===============================================================		
    nexacro.DeleteData.prototype.run = function()		
	{	
		let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let nDeleteCnt = 0;
		if(!this.gfnIsNull(oTargetDs)){
			nDeleteCnt = oTargetDs.deleteAll();
		}

		if(nDeleteCnt >= 0) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};	

	//===============================================================		
    // nexacro.DeleteData : Event		
    //===============================================================
	nexacro.DeleteData.prototype.on_fire_onsuccess = function (userdata)
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
	  
	nexacro.DeleteData.prototype.on_fire_onerror = function (userdata)
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
	