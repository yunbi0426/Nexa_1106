//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================  
// Object : nexacro.FormOpen 
// Group : Action 
//==============================================================================  
if (!nexacro.FormOpen) 
{
    nexacro.FormOpen = function(id, parent) 
	{
        nexacro.Action.call(this, id, parent);
    };  
              
    nexacro.FormOpen.prototype = nexacro._createPrototype(nexacro.Action, nexacro.FormOpen);  
    nexacro.FormOpen.prototype._type_name = "FormOpen";

    //===============================================================  
    // nexacro.FormOpen : Create & Destroy  
    //===============================================================  
    nexacro.FormOpen.prototype.destroy = function () 
	{
        nexacro.Action.prototype.destroy.call(this);
    };

    //===============================================================  
    // nexacro.FormOpen : properties stting
    //=============================================================== 
    this._formUrl = "";
	nexacro.FormOpen.prototype.set_formUrl = function (v)
	{
		v = nexacro._toString(v);
		if (this._formUrl != v) {
			this._formUrl = v;
		}
	};

    //===============================================================  
    // nexacro.FormOpen : Method  
    //===============================================================  
    nexacro.FormOpen.prototype.run = function () 
	{
        let bSucc = true;
        let oApp = nexacro.getApplication();

        let oWorkDiv = oApp.mainframe.WorkFrame.form.div_work;

        if(!this.gfnIsNull(this._formUrl)){
            oWorkDiv.set_url(this._formUrl);
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
    // nexacro.FormOpen : Event		
    //===============================================================
	nexacro.FormOpen.prototype.on_fire_onsuccess = function (userdata)
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
	  
	nexacro.FormOpen.prototype.on_fire_onerror = function (userdata)
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
