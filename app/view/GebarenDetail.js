Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Container',
    xtype: 'gebarendetail',

    config: {
        cls: 'gebarendetail',
    
        layout: {
            type: 'vbox',
            pack: 'end'
        },
        items: [
            {
                xtype: 'button',
                itemId: 'backButton',
    			cls: 'backButton',
    			text: 'TERUG'
            }, 
            {
                xtype: 'button',
                itemId: 'listDetailButton', 
                cls: 'audioButton',  
                handler: function () {
                    var container = this.getParent(),
                    audio = container.down('audio');
                    audio.play();
        		}
            },
            {
                layout: 'card',
                width: 768,
                height: 436,
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/play-video.png',
                        width: 768,
                        height: 432,         
                        listeners: {
                            tap: function() {
                                var me = this,
                                    video = me.getParent().child('video');

                                video.media.dom.addEventListener('playing', function() {
                                    me.getParent().setActiveItem(1);
                                }, true);

                                video.play();
                            }
                        }
                    },
                    {
                        xclass: 'Test.view.Video',
                        name: 'listDetailVideo',
                        posterUrl: 'resources/images/play-video.png',
                        width: 768,
                        height: 432,           
                        enableControls: false,
                        listeners: {
                            tap: {
                                fn: function () {
                                    if (this.isPlaying()) {                                       
                                       this.pause();
                                    } else {                                  
                                       this.play();
                                    }
                                },
                                element: 'element'
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'audio',
                name: 'listDetailAudio',
                hidden: true
            }
        ]
    }
});
