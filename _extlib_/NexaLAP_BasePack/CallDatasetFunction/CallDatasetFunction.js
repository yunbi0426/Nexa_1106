//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================  
// Object : nexacro.CallDatasetFunction 
// Group : Action 
//==============================================================================  
if (!nexacro.CallDatasetFunction) 
{
    nexacro.CallDatasetFunction = function(id, parent) 
	{
        nexacro.Action.call(this, id, parent);
    };  
              
    nexacro.CallDatasetFunction.prototype = nexacro._createPrototype(nexacro.Action, nexacro.CallDatasetFunction);  
    nexacro.CallDatasetFunction.prototype._type_name = "CallDatasetFunction";

    //===============================================================  
    // nexacro.CallDatasetFunction : Create & Destroy  
    //===============================================================  
    nexacro.CallDatasetFunction.prototype.destroy = function () 
	{
        nexacro.Action.prototype.destroy.call(this);
    };
	
    //===============================================================  
    // nexacro.CallDatasetFunction : properties stting
    //=============================================================== 
	//Popup title setting
	this._functionList = "";
	nexacro.CallDatasetFunction.prototype.set_functionList = function (v)
	{
		v = nexacro._toString(v);
		if (this._functionList != v) {
			this._functionList = v;
		}
	};

	//Popup  setting
	this._sourceDataset = "";
	nexacro.CallDatasetFunction.prototype.set_sourceDataset = function (v)
	{
		v = nexacro._toString(v);
        if (this._sourceDataset != v) {
            this._sourceDataset = v;
        }
	};

	//Popup parameta Dataset setting
	this._targetDataset = "";
	nexacro.CallDatasetFunction.prototype.set_targetDataset = function (v)
	{
		v = nexacro._toString(v);
		if (this._targetDataset != v) {
			this._targetDataset = v;
		}
	};    

	this._filterColumn = "";
	nexacro.CallDatasetFunction.prototype.set_filterColumn = function (v)
	{
		v = nexacro._toString(v);
		if (this._filterColumn != v) {
			this._filterColumn = v;
		}
	};

	this._filterValue = "";
	nexacro.CallDatasetFunction.prototype.set_filterValue = function (v)
	{
		v = nexacro._toString(v);
		if (this._filterValue != v) {
			this._filterValue = v;
		}
	};
    //===============================================================  
    // nexacro.CallDatasetFunction : Method  
    //===============================================================  
    nexacro.CallDatasetFunction.prototype.run = function () 
	{
        let sFunction = this._functionList;
        if(this.gfnIsNull(sFunction)){
            this.on_fire_onerror("error");
            return;
        }

        switch(sFunction){
            case "popupCopyData":
                this._fn_popupCopyData();
                break;
			case "addRow":
				this._fn_addRow();			
				break;
			case "insertRow":
				this._fn_insertRow();
				break;
			case "copyData":
				this._fn_copyData();
				break;
			case "copyRow":
				this._fn_copyRow();
				break;
			case "deleteData":
				this._fn_deleteData();
				break;
			case "deleteRow":
				this._fn_deleteRow();
				break;
			case "clearData":
				this._fn_clearData();
				break;
			case "filterData":
				this._fn_filterData();
				break;
        }
    };

	//popup param CopyData
    nexacro.CallDatasetFunction.prototype._fn_popupCopyData = function(){
        let oForm = this.gfnGetForm();
        let oSourceDs = oForm.getOwnerFrame().oParamDs;
		let oTargetDs = oForm._findDataset(this._targetDataset);

		if(!this.gfnIsNull(oSourceDs) && !this.gfnIsNull(oTargetDs)){
            oTargetDs.copyData(oSourceDs,true);
            this.on_fire_onsuccess("success");
        } else {
            this.on_fire_onerror("error");
        }


    };

	//addRow
    nexacro.CallDatasetFunction.prototype._fn_addRow = function(){
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let nRow = -1;
		if(!this.gfnIsNull(oTargetDs)){		
			nRow = oTargetDs.addRow();
		}
		if(nRow >= 0){
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}

	};

	//insertRow
	nexacro.CallDatasetFunction.prototype._fn_insertRow= function(){
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let nRow = -1;
		if(!this.gfnIsNull(oTargetDs)){
			let nCurrow = oTargetDs.rowposition;
			nRow = oTargetDs.insertRow(nCurrow);
		}
		if(nRow >= 0) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};

	//copyData
	nexacro.CallDatasetFunction.prototype._fn_copyData= function(){
        let oForm = this.gfnGetForm();
		let oSourceDs = oForm._findDataset(this._sourceDataset);		
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let nRowCnt = null;
		if(!this.gfnIsNull(oSourceDs) && !this.gfnIsNull(oTargetDs)){
			nRowCnt = oTargetDs.copyData(oSourceDs);
		}

		if(!this.gfnIsNull(nRowCnt)) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};

	//copyRow
	nexacro.CallDatasetFunction.prototype._fn_copyRow= function(){
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

	//deleteData
	nexacro.CallDatasetFunction.prototype._fn_deleteData= function(){
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

	//deleteRow
	nexacro.CallDatasetFunction.prototype._fn_deleteRow= function(){
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let bSucc = false;
		if(!this.gfnIsNull(oTargetDs)){
			let nCurrow = oTargetDs.rowposition;
			bSucc = oTargetDs.deleteRow(nCurrow);
		}
		
		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};

	nexacro.CallDatasetFunction.prototype._fn_clearData = function(){
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let bSucc = false;
		if(!this.gfnIsNull(oTargetDs)){
			let nRowCnt = oTargetDs.clearData();
            bSucc = true;
		}

		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	};

	nexacro.CallDatasetFunction.prototype._fn_filterData = function(){
        let oForm = this.gfnGetForm();
		let oTargetDs = oForm._findDataset(this._targetDataset);
		let bSucc = false;
		let sFilter;
		if(!this.gfnIsNull(oTargetDs)){
			if(!this.gfnIsNull(this._filterColumn)){
				if(!this.gfnIsNull(this._filterValue)){
					sFilter = this._filterColumn + "=='" + this._filterValue +"'";
				} else {
					sFilter="";
				}
			} else {
				sFilter = "";
			}
			oTargetDs.filter(sFilter);
			bSucc = true;			
		}

		if(bSucc == true) {
			this.on_fire_onsuccess("success");
		} else {
			this.on_fire_onerror("error");
		}
	}
    //===============================================================  
    // nexacro.CallDatasetFunction : onsuccess/onerror function
    //=============================================================== 
	nexacro.CallDatasetFunction.prototype.on_fire_onsuccess = function (userdata) {
		let event = this.onsuccess;
		if (this.parent) {
			this.parent.resetScroll();
		}
		
		if (event && event._has_handlers) {
			let evt = new nexacro.ActionSuccessEventInfo(this, "onsuccess", userdata);
			event._fireEvent(this, evt);
		}
	};

	nexacro.CallDatasetFunction.prototype.on_fire_onerror = function (userdata) {
		let event = this.onerror;
		if (event && event._has_handlers) {
			let evt = new nexacro.ActionErrorEventInfo(this, "onerror", userdata);
			event._fireEvent(this, evt);
		}
	}; 
}
