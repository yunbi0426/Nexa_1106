//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.ClosePopup		
// Group : Action		
//==============================================================================		
if (!nexacro.ClosePopup)		
{		
    nexacro.ClosePopup = function(id, parent)		
    {		
        nexacro.Action.call(this, id, parent);
    };
        		
    nexacro.ClosePopup.prototype = nexacro._createPrototype(nexacro.Action, nexacro.ClosePopup);		
    nexacro.ClosePopup.prototype._type_name = "ClosePopup";
	
	//===============================================================		
    // nexacro.ClosePopup : Create & Destroy		
    //===============================================================		
    nexacro.ClosePopup.prototype.destroy = function()		
	{	
		nexacro.Action.prototype.destroy.call(this);
	};	
    //===============================================================  
    // nexacro.ClosePopup : properties stting
    //=============================================================== 

	this._returnDataFlag = "";
	nexacro.ClosePopup.prototype.set_returnDataFlag = function (v)
	{
		if (this._returnDataFlag != v) {
			this._returnDataFlag  = v;
		}
	};	
	
	this._returnDataset = "";
	nexacro.ClosePopup.prototype.set_returnDataset = function (v)
	{
		if (this._returnDataset != v) {
			this._returnDataset  = v;
		}
	};	
    //===============================================================		
    // nexacro.ClosePopup : Method		
    //===============================================================		
    nexacro.ClosePopup.prototype.run = function()		
	{			
		//Import the object set as TargetView			
		let objForm = this.gfnGetForm();
		let sRet = "";
			
		let objChildFrame	= objForm.getOwnerFrame();
		let objChildForm	= objChildFrame.form;
		
		let _oReturnDs = objForm._findDataset(this._returnDataset);
		// 팝업창 닫기
		if (!this.gfnIsNull(objChildForm.opener)){
			if(this._returnDataFlag == "true"){
				objChildForm.close(_oReturnDs.saveXML());
			} else {
				objChildForm.close("OK");
			}

		}
	};

	//===============================================================		
    // nexacro.ClosePopup : Event		
    //===============================================================
	nexacro.ClosePopup.prototype.on_fire_onsuccess = function (userdata)
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
	  
	nexacro.ClosePopup.prototype.on_fire_onerror = function (userdata)
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
	