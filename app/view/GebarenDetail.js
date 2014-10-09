Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Container',
    xtype: 'gebarendetail',

    config: {
        cls: 'gebarendetail',
    
        layout: {
            type: 'vbox',
            pack: 'end' // or maybe not?
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
            {
                xtype: 'video',
                name: 'listDetailVideo',
                posterUrl: 'resources/images/play-video.png',
//                id: 'listvideo',
                width: 768,
                height: 432,           
                enableControls: false,
                                
                listeners: {                    
                    painted: function () {
                        this.media.dom.load(); // for iOS8. Maybe in a conditional statement?
                    },
                    tap: {
                        fn: function () {                                                           
                            var me = this;
                            
                            me.media.dom.addEventListener("playing", function() { // wait for quicktime to be ready so it doesnt show quicktime logo
								me.play();
								}, true);  
                            
                            
                            if (me.isPlaying()) {                                       
                                me.pause();
                            } else {                                  
                                me.play();
                            }                            
                        }, // END addEventListener
                        element: 'element'
                    } // END tap
                } // END listeners
            }, // END video
            {
                xtype: 'audio',
                name: 'listDetailAudio',
                hidden: true
            }
        ]
    }
});
