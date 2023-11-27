module.exports = (cds) =>{
    cds.on('hello',(req) =>{
        return "Welcom" + req.data.name + "Welcome to CAP";


    });

    const { ReadEmployeeSrv } = cds.entities;

    cds.on ('Read', ReadEmployeeSrv, () => {
        let aData =[];
        aData.push({
            "ID": "02BD2137-0890-1EEA-A6C2-BB55C19787DE",
            "nameFirst": "Gurappa",
            "nameMiddle": "Chemuduru"
        });
        aData.push({
            "ID": "02BD2137-0890-1EEA-A6C2-BB55C19787RR",
            "nameFirst": "Mansvi",
            "nameMiddle": "Yashwanth"
        });

        return aData;
    } );
}