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
    /* 
    load custom classes 
    Best practice: only load controllers. Let the 
    controllers load all other classes.
    stores: ['Users'],
    controllers: ['Users'],
    views: ['Main'],
    */
    launch: function () {
        // Destroy the #appLoadingIndicator element
        // Ext.fly('appLoadingIndicator').destroy();
        // Initialize the main view

        //Ext.data.JsonP.request({
        Ext.create('Test.view.Viewport');
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
                        pack: 'end',
            			align: 'stretch',
                    },
                    items: [{
                        flex: 1,
                        html: '<div class="swipe-animation"><img src="resources/images/swipe-left.png" width="100%"></div>'
                    }, {
                        flex: 1,                        
                        html: '<div class="sun-animation"><img src="resources/images/home-logo-kleiner.png" width="100%"></div>'
                    }]
                });
                for (var i = 0; i < objData.length; i++) {
                    var itemTmpObj = {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                         	pack: 'end',
            				align: 'stretch',
                        },
                        items: [{
                            xtype: 'image',
                            src: 'resources/images/' + objData[i].plaatje + '.png',
                            width: 768,
                            height: 436,
                        	flex: 1
                        }, 
                        {
                			xtype: 'button',
 	             			cls: 'audioButton',
 	             			iconCls: 'sound',
                			text: objData[i].plaatje,
					            handler: function () {
					                var container = this.getParent(),
					                audio = container.down('audio');
					                audio.play();
						            }      
	        				},
                        {
                        	xtype: 'audio',
                        	url: 'resources/images/' + objData[i].plaatje + '.mp3',
                        	hidden: true,
                        	
						},                       
                        {
                            xtype: 'video',
                            url: 'resources/images/' + objData[i].plaatje + '.mp4',
                            autoresume: true,
                            enableControls: false,
                            flex: 1,
                            width: 768,
                            height: 432,
                            posterUrl: 'resources/images/bekijkgebaar.png',
                            //html: '<video id="video' + objData[i].Id + '" src="resources/images/' + objData[i].video + '" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
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
                    itemObjs.push(itemTmpObj);
                }
                Ext.getCmp('gebarencarousel').setItems(itemObjs);
                // Adjust toolbar height when running in iOS to fit with new iOS 7 style
                if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                    Ext.select(".x-toolbar").applyStyles("height: 62px; padding-top: 15px;");
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
