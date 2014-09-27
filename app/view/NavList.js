Ext.define('Test.view.NavList', {
    extend: 'Ext.Container',
    xtype: 'navlist',

    requires: [
        'Test.view.Gebarenlijst',
        'Test.view.GebarenDetail'
    ],

    config: {
        layout: 'card',
//        title: '',
        iconCls: 'search',
//        id: 'navlistCardView',
        // useTitleForBackButtonText: 'true', // true causes the back tekst to be something else than "back"
        items: [{
            xtype: 'gebarenlijst'
        }, {
            xtype: 'gebarendetail'
        }]
    }
});