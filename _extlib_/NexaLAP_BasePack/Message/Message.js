//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.Message
// Group : Action
//==============================================================================
if (!nexacro.Message)
{
	nexacro.Message = function(id, parent)
	{
		nexacro.Action.call(this, id, parent);
	};
	
	nexacro.Message.prototype = nexacro._createPrototype(nexacro.Action, nexacro.Message);
	nexacro.Message.prototype._type_name = "Message";
	
	//===============================================================
	// nexacro.Message : Create & Destroy
	//===============================================================
	nexacro.Message.prototype.destroy = function()
	{
		nexacro.Action.prototype.destroy.call(this);
	};

    //===============================================================  
    // nexacro.Message : properties stting
    //=============================================================== 
	this.message = "";
	nexacro.Message.prototype.set_message = function (v)
	{
		v = nexacro._toString(v);
		if (this.message != v) {
			this.message = v;
		}
	};
	
	this.messagetype = "";
	nexacro.Message.prototype.set_messagetype = function (v)
	{
		v = nexacro._toString(v);
		if (this.messagetype != v) {
			this.messagetype = v;
		}
	};	
	//===============================================================
	// nexacro.Message : Method
	//===============================================================
	nexacro.Message.prototype.run = function()
	{
		//messagetype이 confirm일 경우
		if(this.messagetype=="confirm")
		{
			//Confirm 호출
			let rtn = confirm(this.message);
			
			//리턴값에 따라 onsuccess or onerror 이벤트 호출
			if(rtn==true) {
				this.on_fire_onsuccess("userdata");
			} else {
				this.on_fire_onerror("userdata");
			}
		} else {
			//messagetype이 alert일 경우			
			//Alert 호출
			window.alert(this.message);
			
			//onsuccess 이벤트 호출
			this.on_fire_onsuccess();
		}
	};

	//===============================================================		
    // nexacro.Message : Event		
    //===============================================================
	nexacro.Message.prototype.on_fire_onsuccess = function (userdata)
	{
		let event = this.onsuccess;
		if (event && event._has_handlers)
		{
			let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata);
			event._fireEvent(this, evt);
		}
	};
	
	nexacro.Message.prototype.on_fire_onerror = function (userdata)
	{
		let event = this.onerror;
		if (event && event._has_handlers)
		{
			let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata);
			event._fireEvent(this, evt);
		}
	};
	
}
	