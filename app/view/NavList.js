Ext.define('KinderGebaren.view.NavList', {
    extend: 'Ext.Container',
    xtype: 'navlist',
//    fullscreen: true,

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
//        items: [
//        {
//                xtype: 'gebarenlijst',
//                flex: 1 // seems needed to diplay properly?
//            }
            // Old code before dynamic list
            
            // {
            //     xtype: 'gebarenlijst'
            // }, 
            // {
            //     xtype: 'gebarendetail'
            // }
//        ]
    }
});