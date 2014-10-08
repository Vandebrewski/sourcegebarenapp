Ext.define('Test.controller.Main', {
    extend: 'Ext.app.Controller',
    fullscreen: false,

    config: {
        models: ['Gebaar'],
        stores: ['Gebaar'],
        views: ['Home', 'Card', 'NavList', 'Extra'],
        refs: {
            main: 'navlist',
            cardpanel:'cardpanel',
            listDetailAudio  : 'gebarendetail audio[name="listDetailAudio"]',
            listDetailButton : '#listDetailButton',
            listDetailVideo  : 'gebarendetail video[name="listDetailVideo"]',
            listDetailImage  : 'gebarendetail image[name="listDetailImage"]',
            detail: 'gebarendetail'
        }, // End refs

        control: {
            'gebarendetail #backButton': {
                tap: 'onBackTap'
            },
            'gebarenlijst': {
                itemtap: 'showDetail'
            },            
        	cardpanel:{
                initialize: 'initializeCzrosal',

                activeitemchange: function(carousel, newItem, oldItem) {
                    if (!oldItem) {
                        return;
                    }

                    var video = oldItem.down('video');
                    if (video) {
                        video.stop();
                    }
                }


           } // End Cardpanel
        } // End control
    }, // End config

    onBackTap: function() {
        this.getMain().setActiveItem(0);
    },

    showDetail: function (view, index, target, record) {
        var me = this,
            detail = this.getDetail();

        me.getListDetailVideo().setUrl("resources/images/" + record.data.plaatje + ".mp4");
        me.getListDetailAudio().setUrl("resources/images/" + record.data.plaatje + ".mp3");
        me.getListDetailButton().setText(record.data.plaatje);
        me.getListDetailImage().setSrc("resources/images/" + record.data.plaatje + ".png");
     
        this.getMain().setActiveItem(detail);
    },

//-------------- CAROUSEL-------------------------------------------
    initializeCzrosal:function(){
        var me = this;
        Ext.getStore('gebaarStore').onAfter('load', function(store,data){
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
                    html: '<div><img src="resources/images/home-logo-kleiner.png" width="80%"></div>'
                }]
            }); // END first intro item 

            
            var totalcount = data.length;
            for (var i = 0; i < totalcount; i++) {                                
                var objectname = data[i].get('plaatje');               
                var itemTmpObj = {

//-------------- Start carousel item content panel ------------------
                    layout: {
                        type: 'vbox',
                        pack: 'end'
                    },
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/' + objectname + '.png',
                        width: 768,
                        height: 436
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
                        hidden: true                        
                    },  
                    {
                        xtype: 'button',
                        cls: 'play-video-button',
                        width: 768,
                        height: 432,
                        url: "resources/images/" + objectname + ".mp4",
                        listeners: {
                            tap: function() {                           	
                                var modal = Ext.create('Ext.Panel', {
//                                    centered: true,
									bottom : 0, 
                                    modal: true,
                                    width: 768,
                                    height: 432,
                                    layout: 'fit',
                                    hideOnMaskTap: true,
                                    listeners: {
                                        hide: function() {    
                                            this.destroy();
                                        }
                                    },
                                    items: [
                                        {
											xtype: 'video',
                                            enableControls: false,
                                            url: this.initialConfig.url,
                                            posterUrl: 'resources/images/play-video.png',              
                                            listeners: {                    
                                                tap: function () {                                                	                                                    
                                                    var me = this;                                                  
                                                    if (me.isPlaying()) {                                       
                                                       me.pause();
                                                    } else {                                  
                                                        me.play();
                                                    }
                                                                          
                                                }, // END function
                                                element: 'element'
                                            } // END listeners
                                        } // END xtype video
                                    ]
                                });

                                Ext.Viewport.add(modal);
                                modal.show();
                            }
                        }
                    }] // END video
//-------------- END carousel item content panel ------------------
                }  // End of var itemTmpObj
            
                itemObjs.push(itemTmpObj);                
                
            } // End of loop
            me.getCardpanel().setItems(itemObjs);
       }); 
    }
});

