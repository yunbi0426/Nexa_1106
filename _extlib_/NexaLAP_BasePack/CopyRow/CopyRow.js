//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.CopyRow		
// Group : Action		
//==============================================================================		
if (!nexacro.CopyRow)		
{		
    nexacro.CopyRow = function(id, parent)		
    {		
        nexacro.Action.call(this, id, parent);
    };		
        		
    nexacro.CopyRow.prototype = nexacro._createPrototype(nexacro.Action, nexacro.CopyRow);		
    nexacro.CopyRow.prototype._type_name = "CopyRow";		
	
	//===============================================================		
    // nexacro.CopyRow : Create & Destroy		
    //===============================================================		
    nexacro.CopyRow.prototype.destroy = function()		
	{	
		nexacro.Action.prototype.destroy.call(this);
	};	

    //===============================================================  
    // nexacro.CopyRow : properties stting
    //=============================================================== 

	//Popup parameta Dataset setting
	this._sourceDataset = "";
	nexacro.CopyRow.prototype.set_sourceDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._sourceDataset != v) {
			this._sourceDataset = v;
		}
	}; 

	//Popup parameta Dataset setting
	this._targetDataset = "";
	nexacro.CopyRow.prototype.set_targetDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._targetDataset != v) {
			this._targetDataset = v;
		}
	}; 
    //===============================================================		
    // nexacro.CopyRow : Method		
    //===============================================================		
    nexacro.CopyRow.prototype.run = function()		
	{	
        let oForm = this.gfnGetForm();
		let oSourceDs = oForm._findDataset(this._sourceDataset);		
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let bSucc = false;
		if(!this.gfnIsNull(oSourceDs) && !this.gfnIsNull(oTargetDs)){
			let nFromRow = oSourceDs.rowposition;
			let nToRow = oTargetDs.addRow();			
			bSucc = oTargetDs.copyRow(nToRow, oSourceDs, nFromRow);
		}

		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};	
	
	//===============================================================		
    // nexacro.CopyRow : Event		
    //===============================================================
	nexacro.CopyRow.prototype.on_fire_onsuccess = function (userdata)
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
	  
	nexacro.CopyRow.prototype.on_fire_onerror = function (userdata)
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
	