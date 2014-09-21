Ext.define('Test.store.Gebaar',{
    extend: 'Ext.data.Store',
    config:{
        model: 'Test.model.Gebaar',
        autoLoad: true,
        sorters: 'plaatje',

        method : 'GET', // is this helpful?

        proxy:{
            type:'ajax',
            url:'resources/images/Gebaren.json',
            reader:{
                type: 'json',
                rootProperty: 'Gebaartje'
            }
        }


    }
});
