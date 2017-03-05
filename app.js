// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides
Ext.application({
    name: 'KinderGebaren',
    requires: [
        'Ext.MessageBox',
        'KinderGebaren.store.Gebaar',
        'KinderGebaren.view.Viewport',
        'KinderGebaren.overrides.Video',
        'KinderGebaren.overrides.SizeMonitor',
        'KinderGebaren.overrides.PaintMonitor',
        'Ext.Img',
        'Ext.Video',
        'Ext.Audio',
        'Ext.Button',
		'Ext.Menu',
		'Ext.Carousel',
        'Ext.data.proxy.JsonP'
    ],

    controllers: ['Main', 'Quiz'],

    eventPublishers: {
        touchGesture: {
            recognizers: {
                doubleTap : null,
                longPress : null,
                pinch : null,
                rotate : null
            }
        }
    },

    launch: function () {
        Ext.Viewport.add({
            xtype: 'main-view'
        });


        // Create native side menu
        var sideMenu = Ext.create('Ext.Menu', {
            layout: 'fit',
            width: 150,
            id: 'nav-menu',
            items: [

            {
                xtype: 'list',
                itemTpl: '{title}',
                scrollable: false, //warning: This container is set to scrollable: false but has no specified height. You may need to set the container to scrollable: null or provide a height.
                data: [
                {
                    title: '<div class="menu-icon-big1">&#xe901;</div>gebaren',
                    itemIndex: 1
                },
                {
                    title: '<div class="menu-icon-big">&#xe023;</div>quiz',
                    itemIndex: 2
                },
                {
                    title: '<div class="menu-abc">abc</div>',
                    itemIndex: 4
                },
                {
                    title: '<div class="menu-icon-small">&#xe904;</div>',
                    itemIndex: 3
                },
                {
                    title: '<div class="menu-icon-small">&#xe905;</div>',
                    itemIndex: 0
                }
                ]
            }]
        });

        // Add side menu to viewport
        Ext.Viewport.setMenu(sideMenu, {
            side: 'left',
            reveal: true
        });
    } //, // End launch
});
