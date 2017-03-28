
Ext.define('KinderGebaren.view.NavList', {
    extend: 'Ext.Container',
    xtype: 'navlist',
    fullscreen: true, // fix scroll issue?

    requires: [
        'KinderGebaren.view.Gebarenlijst',
        'KinderGebaren.view.GebarenDetail',
        'KinderGebaren.view.GebarenView'
    ],

    config: {
        layout: 'card',
//        title: '',
        iconCls: 'search',
//        layout: 'fit', // fix scroll issue? No this breaks things
        fullscreen: true, // fix scroll issue?
        scrollable: false,
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