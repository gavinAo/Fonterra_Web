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
			var oViewModel;
			oViewModel = new JSONModel();
			this.setModel(oViewModel, "appView");
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