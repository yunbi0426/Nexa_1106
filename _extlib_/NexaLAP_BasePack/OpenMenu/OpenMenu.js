//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================  
// Object : nexacro.OpenMenu 
// Group : Action 
//==============================================================================  
if (!nexacro.OpenMenu) 
{
    nexacro.OpenMenu = function(id, parent) 
	{
        nexacro.Action.call(this, id, parent);
    };  
              
    nexacro.OpenMenu.prototype = nexacro._createPrototype(nexacro.Action, nexacro.OpenMenu);  
    nexacro.OpenMenu.prototype._type_name = "OpenMenu";

    //===============================================================  
    // nexacro.OpenMenu : Create & Destroy  
    //===============================================================  
    nexacro.OpenMenu.prototype.destroy = function () 
	{
        nexacro.Action.prototype.destroy.call(this);
    };

    //===============================================================  
    // nexacro.OpenMenu : properties stting
    //=============================================================== 
	this._menuDataset = "";
	nexacro.OpenMenu.prototype.set_menuDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._menuDataset != v) {
			this._menuDataset = v;
		}
	}; 

    this._urlField = "MENU_URL";
	nexacro.OpenMenu.prototype.set_urlField = function (v)
	{
		v = nexacro._toString(v);
		if (this._urlField != v) {
			this._urlField = v;
		}
	};

    //===============================================================  
    // nexacro.OpenMenu : Method  
    //===============================================================  
    nexacro.OpenMenu.prototype.run = function () 
	{
        let bSucc = true;
        let oApp = nexacro.getApplication();
		let oForm = this.gfnGetForm();

		// get menu form url
		let sFormURL = "";

		let oMenuDs = oForm._findDataset(this._menuDataset);
		if (this.gfnIsNull(oMenuDs) || this.gfnIsNull(this._urlField)){
			this.on_fire_onerror("error");
		} else {
			let nCurrow = oMenuDs.rowposition;
			sFormURL = oMenuDs.getColumn(nCurrow, this._urlField);
		}

        let oWorkDiv = oApp.mainframe.WorkFrame.form.div_work;

        if(!this.gfnIsNull(sFormURL)){
			oWorkDiv.set_url(sFormURL);
        } else {
            bSucc = false;
        }

		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}      
    };
	
	//===============================================================		
    // nexacro.filterData : Event		
    //===============================================================
	nexacro.OpenMenu.prototype.on_fire_onsuccess = function (userdata)
	{
		let event = this.onsuccess;
		
		//이벤트가 존재하고 사용자가 정의한 이벤트 핸들러 함수가 있을 경우
		if (event && event._has_handlers)
		{
		  //ActionSuccessEventInfo 생성
		  let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata); //TODO
		  
		  //리턴값이 필요 없으므로 _fireEvent 함수 실행
		  event._fireEvent(this, evt);
		}
	};
	  
	nexacro.OpenMenu.prototype.on_fire_onerror = function (userdata)
	{
		let event = this.onerror;
		
		//이벤트가 존재하고 사용자가 정의한 이벤트 핸들러 함수가 있을 경우
		if (event && event._has_handlers)
		{
		  //ActionErrorEventInfo 생성
		  let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata); //TODO
		  
		  //리턴값이 필요 없으므로 _fireEvent 함수 실행
		  event._fireEvent(this, evt);
		}
	};
}
