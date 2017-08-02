/**
 * @version 1.0.0
 */
sap.ui.define(["sap/fonterra/controller/BaseController", "sap/ui/model/json/JSONModel"],function(BaseController, JSONModel){
	"use strict";

	return BaseController.extend("sap.fonterra.controller.App",{
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
	});
});