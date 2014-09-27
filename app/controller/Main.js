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
            listDetailAudio  :'gebarendetail audio[name="listDetailAudio"]',
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

                    var video = oldItem.child('video');
                    if (video) {
                        video.stop();
                        video.destroy();
                    }

                    var button = oldItem.child('#playButton');
                    if (button) {
                        button.show();
                    }
                }

                // makes sure that the previous video stop playing after slide. I commented this out because I currently have 0 carousel panels in buffer
//                activeitemchange: function (obj, value, oldValue) {
//                    var activeIndex = obj.getActiveIndex();
//                    var videoObjs = document.getElementsByTagName('video');
//                    var total = videoObjs.length;
//                    var i = 0;
//                    for (i; i < total; i++) {
//                       if (videoObjs[i].paused === false && activeIndex !== i) {
//                          videoObjs[i].pause();
//                        }                        
//                    }
 //               }
           } // End Cardpanel
        } // End control
    }, // End config

    onBackTap: function() {
        this.getMain().setActiveItem(0);
    },

    showDetail: function (view, index, target, record) {
        var me = this,
            detail = this.getDetail();

        me.getListDetailButton().setText(record.data.plaatje);
        me.getListDetailImage().setSrc("resources/images/" + record.data.plaatje + ".png");
        me.getListDetailAudio().setUrl("resources/images/" + record.data.plaatje + ".mp3");
        me.getListDetailVideo().setUrl("resources/images/" + record.data.plaatje + ".mp4");
        
        this.getMain().setActiveItem(detail);
    } ,

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
                    html: '<div><img src="resources/images/home-logo-kleiner.png" width="100%"></div>'
                }]
            });

            
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
                        itemId: 'playButton',
                        docked: 'bottom',
                        height: 432,
                        cls: 'play-video-button',
                        style: 'background-image:url(resources/images/bekijkgebaar.png);',
                        videoURL: 'resources/images/' + objectname + '.mp4',
                        listeners: {
                            tap: function() {
                                this.hide();

                                var video = this.getParent().add({
                                    xclass: 'Test.view.Video',
                                    url: this.videoURL,
                                    width: 768,
                                    height: 432,
                                    preload: false,
                                    docked:'bottom',
                                    enableControls: false,
                                    listeners: {
                                        tap: {                               
                                            fn: function () {
                                                if (this.isPlaying()) {
                                                    this.pause();                                               
                                                }
                                                else {
                                                    this.play();
                                                }
                                            },
                                            element: 'element'
                                        }
                                    }
                                });

                                video.play();
                            }
                        }
                    }]                                           
//-------------- END carousel item content panel ------------------
                }  // End of var itemTmpObj
            
                itemObjs.push(itemTmpObj);                
                
            } // End of loop
            me.getCardpanel().setItems(itemObjs);
       }); 
    }
});

