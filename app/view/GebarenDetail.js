Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Container',
    xtype: 'gebarendetail',

    config: {
        cls: 'gebarendetail',
    
        layout: {
            type: 'vbox',
            pack: 'end'
        },
        items: [{
            itemId: 'backButton',
            xtype: 'button',
            text: 'back'
        }, {
            xtype: 'image',
            name: 'listDetailImage',
            width: 768,
            height: 436
        }, 
        {
            xtype: 'button',
            itemId: 'listDetailButton', // it was id, but shouldn't it be itemId to prevent name collision?
            cls: 'audioButton',  // I added a cls to keep the button styled. Styling was attached to the id
//          text: '', // can't this be removed since it is empty? I commented it out already and it looks okay.
            handler: function () {
                var container = this.getParent(),
                audio = container.down('audio');
                audio.play();
        		}
        }, 
        {
            xtype: 'audio',
            name: 'listDetailAudio',
            hidden: true
        }, 
        {
            xtype: 'video',
            name: 'listDetailVideo',
//            hidden: true,
            posterUrl: 'resources/images/bekijkgebaar.png',
            width: 768,
            height: 432,            
            enableControls: false,
//			preload: false, // default is set to true and during sliding you do not always want video to load. Maybe this help 
			
            listeners: {
           		tap: {
                   	fn: function () {
        				if (this.isPlaying())						                    
    					   this.pause();
    					                                       					                        
						else
				    	   this.play();
                 	},
                    element: 'element'  // I moved this outside the function. Is that correct? Works good. Read somwhere it is better. Don't know why.                 	
                }
            }

        }]
    }
});
