Ext.define('Test.view.Gebarenlijst', {
    extend: 'Ext.List',
    xtype: 'gebarenlijst',

    config: {
        cls: 'gebarenlijst',
        title: 'Dieren',
        scrollable: false,  
        height: 1024,
       bufferSize: 0, //keep 1 card in memory
       autoDestroy: true, // this is deafult so can be removed
      

        
        store: Ext.create('Test.store.Gebaar'),
        itemTpl: '<img src="resources/images/{plaatje}-klein.png"></img><span><br /><br />{plaatje}</span>',
        onItemDisclosure: true
    }
});

