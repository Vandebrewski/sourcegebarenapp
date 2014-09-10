Ext.define('Test.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',
    fullscreen: true,

    config: {
        title: 'Welkom',
        iconCls: 'home',
        cls: 'tekstscreen',

        scrollable: false,
        height: 1024,
        
        layout: {
            type: 'vbox',
            pack: 'end',
            align: 'stretch'
        },

        items: [{
            xtype: 'image',
            cls: 'fade-in',
            flex: 1,
            src: 'resources/images/home-logo.png',
// This link to the cardpanel does not work and generates a warning
//			listeners: {
//                tap: function(){
//                    Ext.Viewport.setActiveItem({
//                        xtype: 'cardpanel'
//                    })
//                }
//            }
        }, {
            flex: 1,
            html: '<center><br /><h3>LITE versie 1.0 Beta</h3><h4><br />Leer op eenvoudige wijze gebaren. Er wordt op dit moment hard gewerkt aan een uitgebreide versie van deze app.</h4><br /><br /><img src="resources/images/nsdsk-klein.png"></center>'
        }]
    }
})

