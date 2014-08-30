Ext.define('Test.view.NavList', {
    extend: 'Ext.navigation.View',
    xtype: 'navlist',

    requires: [
        'Test.view.Gebarenlijst',
        'Test.view.GebarenDetail'
    ],

    config: {
        title: 'Gebaren',
        iconCls: 'search',
        id: 'navlistCardView',
        useTitleForBackButtonText: 'true', // true zorgt ervoor dat de back tekst wordt aangepast
        //		backText: '< terug',
        items: [{
            xtype: 'gebarenlijst'
        }]
    }
});