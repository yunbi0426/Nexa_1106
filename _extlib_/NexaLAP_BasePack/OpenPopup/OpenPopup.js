//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================  
// Object : nexacro.OpenPopup 
// Group : Action 
//==============================================================================  
if (!nexacro.OpenPopup) 
{
    nexacro.OpenPopup = function(id, parent) 
	{
        nexacro.Action.call(this, id, parent);
    };  
              
    nexacro.OpenPopup.prototype = nexacro._createPrototype(nexacro.Action, nexacro.OpenPopup);  
    nexacro.OpenPopup.prototype._type_name = "OpenPopup";

    //===============================================================  
    // nexacro.OpenPopup : Create & Destroy  
    //===============================================================  
    nexacro.OpenPopup.prototype.destroy = function () 
	{
        nexacro.Action.prototype.destroy.call(this);
    };

	//===============================================================
	// nexacro.OpenPopup : Properties setting Area
	//===============================================================
	//Popup form Url setting
	this.formurl = "";
	nexacro.OpenPopup.prototype.set_formurl = function (v)
	{
		v = nexacro._toString(v);
		if (this.formurl != v) {
			this.formurl = v;
		}
	};

	//Popup title setting
	this.title = "";
	nexacro.OpenPopup.prototype.set_title = function (v)
	{
		v = nexacro._toString(v);
		if (this.title != v) {
			this.title = v;
		}
	};
	
	//Popup autoSize setting
	this._autosize = "";
	nexacro.OpenPopup.prototype.set_autosize = function (v)
	{
		v = nexacro._toString(v);
		if (this._autosize != v) {
			this._autosize = v;
		}
	};

	//Popup  setting
	this._popupStyle = "";
	nexacro.OpenPopup.prototype.set_popupStyle = function (v)
	{
		v = nexacro._toString(v);
		if (this._popupStyle != v) {
			this._popupStyle = v;
		}
	};

	//Popup parameta Dataset setting
	this._paramDataset = "";
	nexacro.OpenPopup.prototype.set_paramDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._paramDataset != v) {
			this._paramDataset = v;
		}
	};

	//Popup return Dataset setting
	this._returnDataset = "";
	nexacro.OpenPopup.prototype.set_returnDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._returnDataset != v) {
			this._returnDataset = v;
		}
	};	

    //===============================================================  
    // nexacro.OpenPopup : Method  
    //===============================================================  
    nexacro.OpenPopup.prototype.run = function () {
		//TargetView로 설정된 오브젝트 가져오기
		let oForm = this.gfnGetForm();

		//팝업 호출시 사용할 Param정보 가져오기
		// sPopupId random값으로 자동발급
		let sPopupId = this.gfnRandomID(this.id);
		let sFormUrl = this.formurl;
		//let sTitle = this.title;

		//ARGUMENT 처리
		let oArg = {};
		let _oParamDs = oForm._findDataset(this._paramDataset);
		if(!this.gfnIsNull(_oParamDs)){
			let oDs;
			if(this.gfnIsNull(oForm.dsParam)){
				oDs = new Dataset;
				oForm.addChild("dsParam",oDs);
			} else {
				oDs = oForm.dsParam;
			}
			oDs.assign(_oParamDs);
			oDs.clearData();
			
			let nNewRow = oDs.addRow();
			let nRow = _oParamDs.rowposition;
			oDs.copyRow(nNewRow, _oParamDs, nRow);
			oArg.oParamDs = oDs;
		}

		if (this.gfnIsNull(sPopupId))
		{
			this.gfnLog("A popupid is required.","error");
			this.on_fire_onerror("error");
			return;
		}

		if (this.gfnIsNull(sFormUrl))
		{
			this.gfnLog("Select the form you want to pop up.","error");
			this.on_fire_onerror("error");
			return;
		}

		sPopupStyle =this.popupStyle;

		//Action Scope에 있는 CallBack 함수가 호출되도록 설정
		oForm.fnPopupCallback = this.fnPopupCallback;

		// Action정보를 폼에 설정
		if (this.gfnIsNull(oForm.targetPopup)){
			oForm.targetPopup = {};
		}

		oForm.targetPopup[sPopupId] = this;

		// 팝업 호출
		this.fnOpenPopup(sPopupStyle, sPopupId, sFormUrl, oArg, oForm, this._POPUP_CALLBACK);
	};

	//===============================================================
    // nexacro.OpenPopup : success/error Event
    //===============================================================
	nexacro.OpenPopup.prototype.on_fire_onsuccess = function (userdata)
	{
		let event = this.onsuccess;
		if (event && event._has_handlers)
		{
			let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata);
			event._fireEvent(this, evt);
		}
	};

	nexacro.OpenPopup.prototype.on_fire_onerror = function (userdata)
	{
		let event = this.onerror;
		if (event && event._has_handlers)
		{
			let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata);
			event._fireEvent(this, evt);
		}
	};

	//===============================================================
    // nexacro.OpenPopup : 공통함수 전환부분
    //===============================================================
	nexacro.OpenPopup.prototype.fnOpenPopup = function (sPopupStyle, sPopupId, sFormUrl, objArgs, oForm, sCallback)
	{
		let objApp = nexacro.getApplication();

		//부모 Frame 정보 가져오기
		let objOwnerFrame = oForm.getOwnerFrame();
		let sOpenAlignType = "";
		let bAutoSize = this.autosize;
		let sTitle = this.title;
		let bTitle = true;

		let nLeft = -1;
		let nTop = -1;
		let nWidth = -1;
		let nHeight = -1;

		// 중복팝업 체크
		let arrPopFrame = nexacro.getPopupFrames();
		if (arrPopFrame[sPopupId]) {
			if (system.navigatorname == "nexacro") {
				arrPopFrame[sPopupId].setFocus();
			} else {
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
			return;
		}

		sOpenAlignType = "center middle";

		nLeft = 0 ;
		nTop = 0;
		if(bAutoSize=="false"){
			nWidth = objApp.mainframe.width;
			nHeight = objApp.mainframe.height;
		} else {
			bAutoSize ="true"
		}

		if(sPopupStyle == "modeless")
		{
			let sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize=" + bAutoSize +" titletext="+sTitle;

			nexacro.open(sPopupId, sFormUrl, objOwnerFrame, objArgs, sOpenStyle, nLeft, nTop, nWidth, nHeight, oForm);
		} else {
			let newChild = new nexacro.ChildFrame;
			if(bAutoSize !="false"){
				bAutoSize ="true"
			}
			newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sFormUrl);

			//newChild.set_dragmovetype("none");
			newChild.set_showcascadetitletext(false);
			newChild.set_titlebarheight(50);
			newChild.set_showtitlebar(bTitle);
			newChild.set_autosize(bAutoSize);
			newChild.set_resizable(false);			//resizable 안됨

			newChild.set_titletext(sTitle);
			newChild.set_showstatusbar(false);		//statusbar는 안보임
			newChild.set_openalign(sOpenAlignType);
			newChild.showModal(objOwnerFrame, objArgs, oForm, this.fnPopupCallback, true);
		}
	};

	// PopupCallback 함수
	nexacro.OpenPopup.prototype.fnPopupCallback = function (sId, sParam) {
		let oOwnerFrame = this.getOwnerFrame();

		let objTarget = this.targetPopup[sId];
		if (objTarget == undefined || objTarget == null) {
			return;
		}

		let _oParamDs = null;
		if(!oOwnerFrame.form._gfn_isNull(this._paramDataset)){
			_oParamDs = oOwnerFrame.form[this._paramDataset];
		}

		if(!oOwnerFrame.form._gfn_isNull(sParam)){
			if(sParam != "OK"){
				_oParamDs.loadXML(sParam);
			}
			objTarget.on_fire_onsuccess(sParam);										
		} else {
			objTarget.on_fire_onerror("");
		}
	};
}
