Ext.define('Test.view.Gebarenlijst', {
    extend: 'Ext.List',
    xtype: 'gebarenlijst',

    config: {
        cls: 'gebarenlijst',
        title: 'Dieren',
        store: Ext.create('Test.store.Gebaar'),
        itemTpl: '<img src="resources/images/{plaatje}-klein.png" class="thumbpie"></img><span>{Name}</span>',
        onItemDisclosure: true
    }
});

