Ext.define('Test.store.Gebaar',{
    extend: 'Ext.data.Store',
    config:{
        model: 'Test.model.Gebaar',
        sorters: 'plaatje',
        autoLoad: true,

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
