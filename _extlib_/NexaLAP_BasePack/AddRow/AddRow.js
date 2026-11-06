//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.AddRow		
// Group : Action		
//==============================================================================		
if (!nexacro.AddRow)		
{		
    nexacro.AddRow = function(id, parent)		
    {		
        nexacro.Action.call(this, id, parent);
    };		
        		
    nexacro.AddRow.prototype = nexacro._createPrototype(nexacro.Action, nexacro.AddRow);		
    nexacro.AddRow.prototype._type_name = "AddRow";		
	
	//===============================================================		
    // nexacro.AddRow : Create & Destroy		
    //===============================================================		
    nexacro.AddRow.prototype.destroy = function()		
	{	
		nexacro.Action.prototype.destroy.call(this);
	};	

    //===============================================================  
    // nexacro.AddRow : properties stting
    //=============================================================== 
	this._targetDataset = "";
	nexacro.AddRow.prototype.set_targetDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._targetDataset != v) {
			this._targetDataset = v;
		}
	}; 
	
    //===============================================================		
    // nexacro.AddRow : Method		
    //===============================================================		
    nexacro.AddRow.prototype.run = function() {	
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		if (this.gfnIsNull(oTargetDs)){
			this.on_fire_onerror("error");
		} else {
			let nAddRow = oTargetDs.addRow();
			if(nAddRow >= 0){
				this.on_fire_onsuccess(nAddRow);
			} else {
				this.on_fire_onerror("error");
			}
		}
	};

	
	//===============================================================		
    // nexacro.AddRow : Event		
    //===============================================================
	nexacro.AddRow.prototype.on_fire_onsuccess = function (userdata)
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
	  
	nexacro.AddRow.prototype.on_fire_onerror = function (userdata)
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
	