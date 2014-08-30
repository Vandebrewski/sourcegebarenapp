Ext.define('Test.store.Gebaar',{
    extend: 'Ext.data.Store',
    config:{
        model: 'Test.model.Gebaar',
        sorters: 'Name',
//        grouper : function(record) {
//          return record.get('Id')[0];
//     },
       autoLoad: true,

        proxy:{
            type:'ajax',
            url:'resources/images/Gebaren.json',
            reader:{
                type: 'json',
                rootProperty: 'Gebaartje'
            }
        }

/*data: [
		{ Id: '1', Name: 'Aap', plaatje: 'aap'},
       	{ Id: '2', Name: 'Beer', plaatje: 'beer'},
        { Id: '3', Name: 'Paard', plaatje: 'paard'},
		{ Id: '4', Name: 'Geit', plaatje: 'geit'},        
        { Id: '5', Name: 'Hond', plaatje: 'hond'},
        { Id: '6', Name: 'Kip', plaatje: 'kip'},         
        { Id: '7', Name: 'Koe', plaatje: 'koe'},
        { Id: '8', Name: 'Konijn', plaatje: 'konijn'},
        { Id: '9', Name: 'Leeuw', plaatje: 'leeuw'},
        { Id: '10', Name: 'Olifant', plaatje: 'olifant'},               
        { Id: '11', Name: 'Poes', plaatje: 'poes'},
       	{ Id: '12', Name: 'Schaap', plaatje: 'schaap'},
        { Id: '13', Name: 'Tijger', plaatje: 'tijger'},
		{ Id: '14', Name: 'Vogel', plaatje: 'vogel'}

    ]*/
    }
});
