using {anubhav.db.master,anubhav.db.transaction} from '../db/datamodels';

service CatalogService @(path: 'CatalogService', requires: 'authenticated-user'){

   entity EmployeeSet @(restrict: [ 
                        { grant: ['READ'], to: 'Viewer', where: 'bankName = $user.BankName' },
                        { grant: ['WRITE'], to: 'Admin' }
                        ])  as projection on master.employees; 
   entity BusinessPartnerSet as projection on master.businesspartner; 
   entity ProductSet as projection on master.product; 
   entity BPAdressSet as projection on master.address; 
   entity POs @(
      odata.draft.enabled : true
   ) as projection on transaction.purchaseorder{
      *,
      case OVERALL_STATUS
      when 'O' then 'Open'
      when 'D' then 'Delivered'
      when 'A' then 'Approved'
      when 'N' then 'New'
      when 'X' then 'Rejected'
      end as overalstatus : String(10),
       case OVERALL_STATUS
      when 'O' then 0
      when 'D' then 2
      when 'A' then 3
      when 'N' then 1
      when 'X' then 1
      end as Criticality : String(10)
   } 
    actions{
      @cds.odata.bindingparameter.name : '_anubhav'
      @Common.SideEffects : {
         TargetProperties : ['_anubhav/GROSS_AMOUNT']
      }
        action boost();
        function largestOrder() returns array of POs;
    };
   entity PurchaseOrderItemSet as projection on transaction.poitems; 

}