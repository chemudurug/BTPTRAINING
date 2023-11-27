sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'anubhav/app/purchaseorderapp/test/integration/FirstJourney',
		'anubhav/app/purchaseorderapp/test/integration/pages/POsList',
		'anubhav/app/purchaseorderapp/test/integration/pages/POsObjectPage',
		'anubhav/app/purchaseorderapp/test/integration/pages/PurchaseOrderItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, PurchaseOrderItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('anubhav/app/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePurchaseOrderItemSetObjectPage: PurchaseOrderItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);