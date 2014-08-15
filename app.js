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
    views: ['Card'],
    controllers: ['Main'],
    icon: {
        //        '57': 'resources/icons/icons-57.png',
        //        '72': 'resources/icons/icons-72.png',
        //        '114': 'resources/icons/icons-114@2x.png',
        //       '144': 'resources/icons/icons-144@2x.png',
        '60': 'resources/icons/icons-60.png',
        '120': 'resources/icons/icons-120.png',
        '76': 'resources/icons/icons-76.png',
        '152': 'resources/icons/icons-152@2x.png'
    },
    isIconPrecomposed: true,
    startupImage: {
        //        '320x460': 'resources/startup/320x460.jpg',
        //        '640x920': 'resources/startup/640x920.png',
        //        '768x1004': 'resources/startup/768x1004.png',
        //        '1536x2008': 'resources/startup/1536x2008.png',
        //        '1496x2048': 'resources/startup/1496x2048.png',
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
            url: 'app/data/Gebaren.json',
            //callbackKey: 'callback',
            withCredentials: true,
            useDefaultXhrHeader: false,
            success: function (response) {
                var obj = Ext.JSON.decode(response.responseText);
                var objData = obj.Gebaartje;
                var itemObjs = [];
                itemObjs.push({
                    layout: {
                        type: 'vbox'
                    },
                    items: [{
                        flex: 521,
                        html: '<div class="swipe-animation"><img src="resources/images/swipe-left.png"></div>'
                    }, {
                        flex: 432,
                        html: '<div class="sun-animation"><img src="resources/images/home-logo-kleiner.png"></div>'
                    }]
                });
                for (var i = 0; i < objData.length; i++) {
                    var itemTmpObj = {
                        xtype: 'panel',
                        html: '<audio id="' + objData[i].Id + '" class="audioCrsl"><source src="resources/images/' + objData[i].audio + '"></audio>',
                        layout: {
                            type: 'vbox'
                        },
                        items: [{
                            flex: 521,
                            xtype: 'image',
                            src: 'resources/images/' + objData[i].plaatje
                        }, {
                            flex: 432,
                            pack:'start',
                            xtype: 'video',
                            url: 'resources/images/' + objData[i].video,
                            //width: '768',
                            //height: '432',
                            enableControls: false,
                            posterUrl: 'resources/images/bekijkgebaar.png',
                            //html: '<video id="video' + objData[i].Id + '" src="resources/images/' + objData[i].video + '" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
                            listeners: {
                                tap: {
                                    fn: function () {
                                        this.play();
                                        this.currentTime=0;
                                    }
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
