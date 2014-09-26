Ext.define('Test.view.NavList', {
    extend: 'Ext.navigation.View',
    xtype: 'navlist',

    requires: [
        'Test.view.Gebarenlijst',
        'Test.view.GebarenDetail'
    ],

    config: {
//        title: '',
        

        
        iconCls: 'search',
//        id: 'navlistCardView',
        useTitleForBackButtonText: 'true', // true causes the back tekst to be something else than "back"
        items: [{
            xtype: 'gebarenlijst'
        }]
    }
});