/**
 * @version 1.0.0
 */
sap.ui.define(["sap/fonterra/controller/BaseController"],function(BaseController){
	"use strict";

	return BaseController.extend("sap.fonterra.Create",{
		/**
		 * @function
		 * @name onInit
		 * @private
		 * @description init the create page
		 */
		onInit:function(){
			var oRouter = this.getRouter();
			oRouter.getRoute("creat").attachRouteMatched(this._onRouteMatched, this);
		},
		/**
		 * @function
		 * @name _onRouteMatched
		 * @private
		 * @description trigger when routematched
		 */
		_onRouteMatched:function(oEvent){

		},
		/**
		 * @function
		 * @name onBeforeRendering
		 * @private
		 * @description trigger before page rendering
		 */
		 onBeforeRendering:function(){

		 },		
		/**
		 * @function
		 * @name onAfterRendering
		 * @private
		 * @description trigger after page rendering
		 */
		 onAfterRendering:function(){

		 }  
	})
})