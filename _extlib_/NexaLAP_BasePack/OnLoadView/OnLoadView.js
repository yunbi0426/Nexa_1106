//==============================================================================
//	Define the Action.
//==============================================================================
//==============================================================================		
// Object : nexacro.OnLoadView		
// Group : Action		
//==============================================================================		
if (!nexacro.OnLoadView)		
{		
    nexacro.OnLoadView = function(id, parent)		
    {		
        nexacro.Action.call(this, id, parent);		
    };		
        		
    nexacro.OnLoadView.prototype = nexacro._createPrototype(nexacro.Action, nexacro.OnLoadView);		
    nexacro.OnLoadView.prototype._type_name = "OnLoadView";		
	
	//===============================================================		
    // nexacro.OnLoadView : Create & Destroy		
    //===============================================================		
    nexacro.OnLoadView.prototype.destroy = function()		
	{	
		nexacro.Action.prototype.destroy.call(this);
	};	
		
    //===============================================================		
    // nexacro.OnLoadView : Method		
    //===============================================================		
    nexacro.OnLoadView.prototype.run = function()		
	{	
		let objForm = this.parent;
		
		this.fnCallOnLoadView(objForm);
	};	
	
	nexacro.OnLoadView.prototype.fnCallOnLoadView = function(objForm)
	{
		let objComps = objForm.components;
		let nLength = objComps.length;
		let objTargetComp;
		
		for(let i=0;i<nLength;i++)
		{
			objTargetComp = objComps[i];
			
			if(objTargetComp instanceof nexacro.View)
			{
				if(objTargetComp.form._fnViewOnLoad)
				{
					objTargetComp.form._fnViewOnLoad(objForm);
				}
			}
		}
		
		
	}
}
  