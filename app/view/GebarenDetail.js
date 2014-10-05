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
                        		var vid = document.getElementsByTagName("video")[0];
								vid.load(); // this is needed fot ios8, maybe put in an if statement?
								vid.addEventListener("playing", function() { 									
									vid.play(); 
									}, true);
//								v.currentTime = 0.2;
							
                           	if (this.isPlaying()) {                                       
                               this.pause();
                            	} else {                                  
                               		this.play();
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
