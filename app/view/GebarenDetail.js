Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Panel',
    xtype: 'gebarendetail',
    fullscreen: true,

    config: {
        cls: 'gebarendetail',
        layout: {
            type: 'vbox',
            pack: 'end',
            align: 'stretch'
        },
        items: [{
            xtype: 'image',
            id: 'listDetailImage',
            width: 768,
            height: 436,
            flex: 1
        }, {
            xtype: 'button',
            iconCls: 'sound',
            ui: 'action',
            id: 'listDetailButton',
            text: '',
            handler: function () {
                var container = this.getParent(),
                audio = container.down('audio');
                audio.play();
            }
        }, {
            xtype: 'audio',
            id: 'listDetailAudio',
            hidden: true,
//            handler: function () {
//                var container = this.getParent().getParent(),
//                audio = container.down('audio');
//                audio.toggle();
//            }
        }, {
            xtype: 'video',
            id: 'listDetailVideo',
            posterUrl: 'resources/images/bekijkgebaar.png',
            flex: 1,
            width: 768,
            height: 432,            
            enableControls: false,
            listeners: {
           		tap: {
               	fn: function () {
					if (this.isPlaying())						                    
						this.pause();						                        
							else
						    	this.play();
                             	},
                            element: 'element'
                            }
                           }

        }]
    }
});

