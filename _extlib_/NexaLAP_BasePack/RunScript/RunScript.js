//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.RunScript		
// Group : Action		
//==============================================================================		
if (!nexacro.RunScript) {
	nexacro.RunScript = function (id, parent) {
		nexacro.Action.call(this, id, parent);
		this.addEvent("canrun");
	};

	let _pRunScript = nexacro._createPrototype(nexacro.Action, nexacro.RunScript);
	nexacro.RunScript.prototype = _pRunScript;
	_pRunScript._type_name = "RunScript";

	/* default properties */
	_pRunScript._p_contents = "";

	//===============================================================		
	// nexacro.RunScript : Create & Destroy		
	//===============================================================		
	_pRunScript.destroy = function () {
		this._p_contents = "";

		nexacro.Action.prototype.destroy.call(this);
	};
	
    //===============================================================  
    // nexacro.RunScript : properties stting
    //=============================================================== 
	_pRunScript._setContents = function (contents) {
		this._p_contents = contents || "";
	};

	//===============================================================		
	// nexacro.RunScript : Method		
	//===============================================================		
	_pRunScript.run = function () {
		let objForm = this.parent;
		if (!objForm) {
			this.on_fire_onerror("userdata");
			return;
		}

		objForm._current_action = this;

		try {
			let objFunc = new Function(this._p_contents);
			let sRet = objFunc.call(objForm);
			if (sRet == false) {
				this.on_fire_onerror("userdata");
			} else {
				this.on_fire_onsuccess("userdata");
			}
		} catch (e) {
			if (e && e.message && trace) {
				if (e.message) {
					trace("> Error message : " + e.message);
				}
				
				if (Array.isArray(e.stack)) {
					e.stack.forEach((site) => {
						const stackMessage = `> Error file: ${site.getFileName()}, line: ${site.getLineNumber()}, column: ${site.getColumnNumber()}, function: ${site.getFunctionName()}`;
						trace(stackMessage);
					});
				}
			}
			this.on_fire_onerror("userdata");
		}
	};
	
    //===============================================================  
    // nexacro.RunScript : onsuccess/onerror function
    //=============================================================== 
	_pRunScript.on_fire_onsuccess = function (userdata) {
		let event = this.onsuccess;
		if (this.parent) {
			this.parent.resetScroll();
		}
		
		if (event && event._has_handlers) {
			let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata);
			event._fireEvent(this, evt);
		}
	};

	_pRunScript.on_fire_onerror = function (userdata) {
		let event = this.onerror;
		if (event && event._has_handlers) {
			let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata);
			event._fireEvent(this, evt);
		}
	};

	delete _pRunScript;
};	