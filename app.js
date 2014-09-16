// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides
Ext.application({
    name: 'Test',
    requires: [
        'Ext.MessageBox',
        'Test.store.Gebaar',
        'Test.view.Viewport',
        'Ext.Img',
        'Ext.Video',
        'Ext.Audio'
    ],
    views: ['Home', 'Card', 'NavList', 'Extra'],
    models: ['Gebaar'],
    stores: ['Gebaar'],
    controllers: ['Main'],
    icon: {
        '60': 'resources/icons/icons-60.png',
        '120': 'resources/icons/icons-120.png',
        '76': 'resources/icons/icons-76.png',
        '152': 'resources/icons/icons-152@2x.png'
    },
    isIconPrecomposed: true,
    startupImage: {
        '640x1136': 'resources/icons/iphone5.png',
        '768x1024': 'resources/icons/768x1024.png',
        '1536x2048': 'resources/icons/768x1024.png'
    },

    launch: function () {

        //Ext.data.JsonP.request({
//        Ext.create('Test.view.Viewport');
//        Ext.Viewport.add(Ext.create('Test.view.Viewport'));
//  I'm trying to do a lazy instantiation
        Ext.Viewport.add([{ xtype: 'main-view' }]);
        
        Ext.Ajax.request({
            url: 'resources/images/Gebaren.json',
            //callbackKey: 'callback',
            withCredentials: true,
            useDefaultXhrHeader: false,
            success: function (response) {
                var obj = Ext.JSON.decode(response.responseText);
                var objData = obj.Gebaartje;
                var itemObjs = [];
                itemObjs.push({
                    layout: {
                        type: 'vbox',
                        pack: 'end'
                    },
                    items: [{
                        flex: 1,
                        html: '<div class="swipe-animation"><img src="resources/images/swipe-left.png"></div>'
                    }, {
                        flex: 1,                        
                        html: '<div class="sun-animation"><img src="resources/images/home-logo-kleiner.png" width="100%"></div>'
                    }]
                });
                
                var totalcount = objData.length;
                for (var i = 0; i < totalcount; i++) {
                
//             EXPERIMENT    if (i == objData.length-1){i = 0} try to start from the beginning when end of list is reached
                
                	var objectname = objData[i].plaatje;
                
                    var itemTmpObj = {
                        layout: {
                            type: 'vbox',
                         	pack: 'end'
                        },
                        items: [{
                            xtype: 'image',
                            src: 'resources/images/' + objectname + '.png',
                            width: 768,
                            height: 436,
                        	flex: 1
                        }, 
                        {
                			xtype: 'button',
 	             			cls: 'audioButton',
                			text: objectname,
					            handler: function () {
					                var container = this.getParent(),
					                audio = container.down('audio');
					                audio.play();
						            }      
	        				},
                        {
                        	xtype: 'audio',
                        	url: 'resources/images/' + objectname + '.mp3',
                        	hidden: true,                     	
						},                       
                        {
                            xtype: 'video',
                            url: 'resources/images/' + objectname + '.mp4',
                            width: 768,
                            height: 432,
                            muted: 'true',                            
                            autoresume: true,
                            docked:'bottom',
                            posterUrl: 'resources/images/bekijkgebaar.png',
                            enableControls: false,
                            flex: 1,
                            listeners: {
                                tap: {
                                	element: 'element',
                                    fn: function () {
						                    if (this.isPlaying())						                    
						                        this.pause();						                        
						                    else
						                        this.play();
                                    }
                                }
                            }
                        }]                                           
                    }
                
                 
                    itemObjs.push(itemTmpObj);                
                    
                }
                Ext.getCmp('gebarencarousel').setItems(itemObjs);
                
                // Adjust toolbar height when running in iOS to fit with new iOS 7 style
                // maybe blocks DOM construction
                if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                    Ext.select(".x-toolbar").applyStyles("height: 53px; padding-top: 15px;");
                }
            }
        });


    },
    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
