sap.ui.controller("ZFI_0266_RPR.zfi_0266_rpr.ext.controller.ListReportExt", {
	onAfterRendering: function () {
		this.goButton = this.getView().byId(
			"ZFI_0266_RPR.zfi_0266_rpr::sap.suite.ui.generic.template.ListReport.view.ListReport::zfi_cov_revenueSet--listReportFilter-btnGo");
		this.goButton.attachPress(this._onGo, this);
	},

	_onGo: function () {
		var smartFilterID =
			"ZFI_0266_RPR.zfi_0266_rpr::sap.suite.ui.generic.template.ListReport.view.ListReport::zfi_cov_revenueSet--listReportFilter";
		var smartTableId =
			"ZFI_0266_RPR.zfi_0266_rpr::sap.suite.ui.generic.template.ListReport.view.ListReport::zfi_cov_revenueSet--listReport";
		var messageMdl = this.getOwnerComponent().getModel("i18n");
		var filterData = this.getView().byId(smartFilterID).getFilterData();
		if (Object.keys(filterData)[0] !== "$Parameter.p_fiscalyear") {
		//	var nYear = new Date().getFullYear();
			var nYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).getFullYear();
			this.getView().byId(smartFilterID).setFilterData({
				"$Parameter.p_fiscalyear": nYear.toString()
			});
		}if( Object.keys(filterData)[1] !== "$Parameter.p_postingperiod"){
			var nPeriod = new Date().getMonth() + 1;
				nPeriod = nPeriod === 1 ? nPeriod = 12 : nPeriod - 1;
			this.getView().byId(smartFilterID).setFilterData({
				"$Parameter.p_postingperiod": nPeriod.toString()
			});
			sap.m.MessageToast.show(messageMdl.getProperty("DefaultFilterMsg"));
			this.byId(smartTableId).rebindTable();
		}
	}
});