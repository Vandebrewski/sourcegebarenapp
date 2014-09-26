Ext.define('Test.view.Home', {
    extend: 'Ext.Container',
    xtype: 'homepanel',
    fullscreen: true,

    config: {
//        title: 'Home', // there doesn't need to be a title
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
            flex: 2,
            src: 'resources/images/home-logo.png',
            height: '564',
            width: '768'
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
            html: '<center><br /><h3>LITE versie 1.0 Beta</h3><h4><br />Leer op eenvoudige wijze gebaren. Er wordt op dit moment hard gewerkt <br />aan een uitgebreide versie van deze pilot app.</h4><br /><br /><img src="resources/images/nsdsk-klein.png"></center>'
        }]
    }
})

