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
                id: 'listvideo',
                width: 768,
                height: 432,           
                enableControls: false,
                                
                listeners: {                	
                	painted: function () {
                        this.media.dom.load();
    				},
                	tap: {
                        fn: function () {                        									
      						var x = document.getElementById("listvideo");
      						var vid = x.getElementsByTagName("video")[0]; 
								vid.addEventListener("playing", function() { // wait for quicktime to be ready so it doesnt show quicktime logo							
									vid.play(); 
									}, true);
//								v.currentTime = 0.2; // don't think I need this
							
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
