Ext.define('Test.view.Gebarenlijst', {
    extend: 'Ext.List',
    xtype: 'gebarenlijst',

    config: {
        cls: 'gebarenlijst',
        title: 'Dieren',
        scrollable: false,  
        height: 1024,

        store: 'gebaarStore',//Ext.create('Test.store.Gebaar'),
        itemTpl: '<img src="resources/images/{plaatje}-klein.png"></img><span><br /><br />{plaatje}</span>'
//        onItemDisclosure: true // not needed anumore
    }
});

