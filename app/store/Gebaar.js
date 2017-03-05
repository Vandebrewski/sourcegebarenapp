Ext.define('KinderGebaren.store.Gebaar',{
    extend: 'Ext.data.Store',
    config: {
        model: 'KinderGebaren.model.Gebaar',
        
//        sorters: 'cat',
        
       grouper: {
            property: 'cat',
            direction:'ASC'
        },
        
//       sorters: [{
//            property: 'Id',
//            direction: 'ASC'
//        }],
        
        autoLoad: true,
        storeId:'gebaarStore',
        method : 'GET',
        

        proxy: {
            type: 'ajax',
            url: 'resources/images/Gebaren.json',
            reader:{
                type: 'json',
                rootProperty: 'Gebaartje'
            }
        }
    }
});
