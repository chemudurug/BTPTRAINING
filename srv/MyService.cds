using {anubhav.db.master  } from '../db/datamodels';


service MyService {

    function hello(name : String(10))
    returns String;
    @readonly
    entity ReadEmployeeSrv as projection on master.employees;

    

}