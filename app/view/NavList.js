Ext.define('KinderGebaren.view.NavList', {
    extend: 'Ext.Container',
    xtype: 'navlist',

    requires: [
        'KinderGebaren.view.Gebarenlijst',
        'KinderGebaren.view.GebarenDetail'
    ],

    config: {
        layout: 'card',
//        title: '',
        iconCls: 'search',
//        id: 'navlistCardView',
        // useTitleForBackButtonText: 'true', // true causes the back tekst to be something else than "back"
        items: [{
            xtype: 'gebarenlijst'
        }, 
        {
            xtype: 'gebarendetail'
        }]
    }
});