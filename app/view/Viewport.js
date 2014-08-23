Ext.define('Test.view.Viewport', {
    extend: 'Ext.TabPanel',

    config: {
        tabBarPosition: 'bottom',
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                duration: 250
            }
        },
        fullscreen: true,
        items: [{
            xtype: 'homepanel'
        }, {
            xtype: 'cardpanel'
        }, {
            xtype: 'navlist'
        }, {
            xtype: 'extrapanel'
        }]
    }
});
