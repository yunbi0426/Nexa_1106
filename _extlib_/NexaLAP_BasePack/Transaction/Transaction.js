//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.Transaction
// Group : Action
//==============================================================================
if (!nexacro.Transaction) {
	nexacro.Transaction = function (id, parent) {
		nexacro.Action.call(this, id, parent);
	};

	let _pTransaction = nexacro._createPrototype(nexacro.Action, nexacro.Transaction);
	
	nexacro.Transaction.prototype = _pTransaction;
	_pTransaction._type_name = "Transaction";

	/* default properties */
	_pTransaction.servicemodel = "";
	_pTransaction.serviceurl = "";

	/* internal variable */
	_pTransaction._contents = null;

	//===============================================================
	// nexacro.Transaction : Create & Destroy
	//===============================================================
	_pTransaction.destroy = function () {
		this._contents = null;

		nexacro.Action.prototype.destroy.call(this);
	};

    //===============================================================  
    // nexacro.Transaction : properties stting
    //=============================================================== 
	_pTransaction.set_servicemodel = function (v) {
		v = nexacro._toString(v);
		if (this.servicemodel != v) {
			this.servicemodel = v;
		}
	};

	_pTransaction.set_serviceurl = function (v) {
		v = nexacro._toString(v);
		if (this.serviceurl != v) {
			this.serviceurl = v;
		}
	};

	//===============================================================
	// nexacro.Transaction : Method
	//===============================================================
	_pTransaction.run = function () {

		let sInputDatasetStr = "";
		let sOutputDatasetStr = "";
		let sArgumentsStr = "";

		// Contents Parameters
		let objContents = this._contents;
		if (objContents) {
			sInputDatasetStr = this.fnBuildInputDatasetString(objContents.inputdatasets || []);
			sOutputDatasetStr = this.fnBuildOutputDatasetString(objContents.outputdatasets || []);
			sArgumentsStr = this.fnBuildArgumentsString(objContents.arguments || []);
		}

		// Get Parameters for Transaction
		// sSvcId is a random value generated automatically
		let sSvcId = this.gfnRandomID(this.id);
		let sServiceUrl = this.serviceurl;
		let sInDs = sInputDatasetStr;
		let sOutDs = sOutputDatasetStr;
		let sArgs = sArgumentsStr;
		let sCallback = this._TRAN_CALLBACK_NM;

		this.fnTransaction(sSvcId, sServiceUrl, sInDs, sOutDs, sArgs, sCallback);
	};

	_pTransaction.fnBuildInputDatasetString = function (arrInputDatasets) {
		let arrInputs = [];
		for (var i = 0; i < arrInputDatasets.length; i++) {
			let objInputDataset = arrInputDatasets[i];
			let sModelId = objInputDataset.modelid;
			let sDatasetId = objInputDataset.datasetid;
			let sType = objInputDataset.type;

			if (!sModelId || !sDatasetId) {
				continue;
			}


			if(sType == "C"){
				let oTarget = this.parent[sDatasetId];
				if(!this.gfnIsNull(oTarget)){
					let nCurRow = oTarget.rowposition;
					let _oParamDs = null;
					if(this.gfnIsNull(this.parent["_ds_inputParam"])){
						_oParamDs = 	new Dataset();
						_oParamDs.name = "_ds_inputParam";
						this.parent.addChild(_oParamDs.name, _oParamDs);
					} else {
						_oParamDs = this.parent["_ds_inputParam"];
					}
					_oParamDs.copyData(oTarget,true);
					_oParamDs.clearData();
					let nAddRow = _oParamDs.addRow();
					_oParamDs.copyRow(nAddRow, oTarget, nCurRow);

					sDatasetId = _oParamDs.name;
				}
			}

			let sInputStr = sModelId + "=" + sDatasetId;
			if (sType) {
				sInputStr += ":" + sType;
			}
			arrInputs.push(sInputStr);
		}
		return arrInputs.join(" ");
	};

	_pTransaction.fnBuildOutputDatasetString = function (arrOutputDatasets) {
		let arrOutputs = [];
		for (let i = 0; i < arrOutputDatasets.length; i++) {
			let objOutputDataset = arrOutputDatasets[i];
			let sModelId = objOutputDataset.modelid;
			let sDatasetId = objOutputDataset.datasetid;

			if (!sModelId || !sDatasetId) {
				continue;
			}

			arrOutputs.push(sDatasetId + "=" + sModelId);
		}
		return arrOutputs.join(" ");
	};

	_pTransaction.fnBuildArgumentsString = function (arrArguments) {
		let arrArgs = [];
		for (var i = 0; i < arrArguments.length; i++) {
			let objArgument = arrArguments[i];
			let arrKeys = [];

			for (let key in objArgument) {
				if (objArgument.hasOwnProperty(key)) {
					let value = objArgument[key];
					if (value != null && value !== "") {
						arrKeys.push(key + "=" + value);
					}
				}
			}

			if (arrKeys.length > 0) {
				arrArgs.push(arrKeys.join(" "));
			}
		}
		return arrArgs.join(" ");
	};

	_pTransaction.fnTransaction = function (sSvcId, sService, sInDs, sOutDs, sArgs, sCallback, bAsync) {
		if (this.gfnIsNull(sSvcId)) {
			this.gfnLog("Please check the service. : fnTransaction()", "error");
			return false;
		}

		if (this.gfnIsNull(sService)) {
			this.gfnLog("Please check the service url. : fnTransaction()", "error");
			return false;
		}

		// Set default value for callback function
		if (this.gfnIsNull(sCallback)) {
			sCallback = this._TRAN_CALLBACK_NM;
		}

		// Async
		if ((bAsync != true) && (bAsync != false)) {
			bAsync = true;
		}

		let objForm = this.gfnGetForm();

		// Log
		let dStartDate = new Date();
		let sStartTime = dStartDate.getTime();

		// Save service information for callback
		let objSvcId = {
			svcId: sSvcId
			, svcUrl: sService
			, callback: sCallback
			, isAsync: bAsync
			, startTime: sStartTime
			, servicemodel: this.servicemodel
		};

		// Set callback function
		objForm.fnTransactionCallback = this.fnTransactionCallback;

		// Set Action information to the form
		if (this.gfnIsNull(objForm.targetTranAction)) objForm.targetTranAction = {};
		objForm.targetTranAction[sSvcId] = this;

		// Create DataSet for NexacroLAPServer Service call
		let sServiceInfoDataset = this.gfnMakeBackendServiceInfoDataset(objForm, this.servicemodel);
		sInDs += ' _BackendServiceInfo=' + sServiceInfoDataset;

		// Call Transaction
		objForm.transaction(JSON.stringify(objSvcId), sService, sInDs, sOutDs, sArgs, sCallback, bAsync,0);
	};

	// Transaction Callback
	_pTransaction.fnTransactionCallback = function (svcId, nErrorCd, sErrorMsg) {
		let objSvcId = JSON.parse(svcId);
		let sSvcId = objSvcId.svcId;

		let dEndDate = new Date();
		let nElapseTime = (dEndDate.getTime() - objSvcId.startTime) / 1000;

		let objTarget = this.targetTranAction[sSvcId];
		if (objTarget == undefined || objTarget == null) return;

		// Transaction Log
		objTarget.gfnLog("ElapseTime >> " + nElapseTime + ", ErrorCd >> " + nErrorCd + ", ErrorMsg >> " + sErrorMsg);

		// If ErrorCode is greater than -1, call onsuccess event
		if (nErrorCd > -1) {
			objTarget.on_fire_onsuccess(sSvcId, nErrorCd, sErrorMsg);
		}
		// If ErrorCode is less than 0, call onerror event
		else {
			if(nErrorCd == -1 && sErrorMsg =="FAILED"){
				sErrorMsg = "서버와의 연결이 끊겼습니다.";
			}
			else if(objSvcId.servicemodel == "Model::base/blLoginSession"){
				return;
			}

			window.alert(sErrorMsg);
			
			if(nErrorCd == -99998){
				window.top.location.reload(true);
				return;
			}
			objTarget.on_fire_onerror(sSvcId, nErrorCd, sErrorMsg);
		}
	};
	
    //===============================================================  
    // nexacro.Transaction : onsuccess/onerror function
    //=============================================================== 
	_pTransaction.on_fire_onsuccess = function (sSvcId, nErrorCd, sErrorMsg) {
		let event = this.onsuccess;
		if (event && event._has_handlers) {
			let evt = new nexacro.TransactionSuccessEventInfo(this, "onsuccess", sSvcId, nErrorCd, sErrorMsg);
			event._fireEvent(this, evt);
		}
	};

	_pTransaction.on_fire_onerror = function (sSvcId, nErrorCd, sErrorMsg) {
		let event = this.onerror;
		if (event && event._has_handlers) {
			let evt = new nexacro.TransactionErrorEventInfo(this, "onerror", sSvcId, nErrorCd, sErrorMsg);
			event._fireEvent(this, evt);
		}
	};

	delete _pTransaction;
}
	