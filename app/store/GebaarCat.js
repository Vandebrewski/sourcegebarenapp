<<<<<<< HEAD
Ext.define('KinderGebaren.store.GebaarCat',{
    extend: 'Ext.data.Store',
    config: {
        fields:['cat','Id','plaatje'],
        autoLoad: true,
        storeId:'gebaarCatStore',
        method : 'GET',
        proxy: {
            type: 'ajax',
            url: 'resources/images/GebarenCat.json',
            reader:{
                type: 'json',
                rootProperty: 'Gebaartje'
            }
        }
    }
=======
Ext.define('KinderGebaren.store.GebaarCat',{
    extend: 'Ext.data.Store',
    config: {
        fields:['cat','Id','plaatje'],
        autoLoad: true,
        storeId:'gebaarCatStore',
        method : 'GET',
        proxy: {
            type: 'ajax',
            url: 'resources/images/GebarenCat.json',
            reader:{
                type: 'json',
                rootProperty: 'Gebaartje'
            }
        }
    }
>>>>>>> origin/master
});