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
            	xtype: 'image',
            	name: 'listDetailImage',
	           	cls: 'fade-in',
            	width: 768,
            	height: 436
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
//            {
//                layout: 'card',
//                width: 768,
//                height: 432,
//                items: [
//                    {
//                        xtype: 'image',
//                        src: 'resources/images/play-video.png',
//                        width: 768,
//                        height: 432,         
//                        listeners: {
//                            tap: function() {
//                                var me = this,
//                                    video = me.getParent().child('video');
//
//                                video.media.dom.addEventListener('playing', function() {
//                                    me.getParent().setActiveItem(1);
//                                }, true);
//
//                                video.play();
//                            }
//                        }
//                    },
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
                                	var v = document.getElementsByTagName("video")[0];
									v.addEventListener("playing", function() { document.getElementsByTagName("video")[0].play(); }, true);
									v.currentTime = 0.2;
									
//                                   if (this.isPlaying()) {                                       
//                                       this.pause();
//                                    } else {                                  
//                                       this.play();
//                                    }
                                },
                                element: 'element'
                            }
                        }
                    },
//                ]
//            },
            {
                xtype: 'audio',
                name: 'listDetailAudio',
                hidden: true
            }
        ]
    }
});
