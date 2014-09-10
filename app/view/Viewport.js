Ext.define('Test.view.Viewport', {
    extend: 'Ext.TabPanel',

    config: {
        tabBarPosition: 'bottom',
        layout: {
//            type: 'card', does not have to be here
            animation: {
                type: 'slide',
                duration: 300
            }
        },
        fullscreen: true,
        items: [
        {xtype: 'homepanel'}, 
        {xtype: 'cardpanel'}, 
        {xtype: 'navlist'}, 
        {xtype: 'extrapanel'}
        ]
    }
});
