	Ext.define('KinderGebaren.controller.Main', {
    extend: 'Ext.app.Controller',
    fullscreen: false,

    config: {
        models: ['Gebaar'],
        stores: ['Gebaar'],
        views: ['Home', 'NavList', 'Extra', 'Fingerspelling'],
        refs: {
            'videoView': 'gebarendetail #videoView',
            main: 'navlist',
            listView: 'gebarenlijst',
            listDetailAudio  : 'gebarendetail audio[name="listDetailAudio"]',
            listDetailButton : '#listDetailButton',
            listDetailVideo  : 'gebarendetail video[name="listDetailVideo"]',
            listDetailImage  : 'gebarendetail image[name="listDetailImage"]',
            detail: 'gebarendetail',
            videoPlayButton: '#videoPlayButton'
        }, // End refs

        control: {

            // Menu
            '#nav-menu list': {
                select: 'onNavMenuSelect'
            },

            'gebarendetail': {
                swipeleft: 'onNextTap'
            },
            'gebarendetail #backButton': {
                tap: 'onBackTap'
            },
            'gebarendetail #nextButton': {
                tap: 'onNextTap'
            },
            'gebarenlijst': {
                itemtap: 'showDetail'
            },
            'videoView': {
                ended: 'onVideoEnded'
            }
        } // End control
    }, // End config


    onVideoEnded: function(video) {
        video.media.setBottom(-2000); //why is this needed? It seems to stop flickering on reruns?
        video.ghost.show();
        var video = this.getVideoView();
    },


    onNavMenuSelect: function(view, record) {

        var itemIndex = record.get('itemIndex');
// ------ Old code before dynamic list ---------        
        // if(record.data.itemIndex == 1){
        //     Ext.Viewport.toggleMenu('left');
        //     Ext.Viewport.setMasked({xtype:'loadmask', message:'loading data'});
        //     var store = Ext.getStore("gebaarStore");
        //     store.load(function(records, operation, success) {
        //         Ext.Viewport.setMasked(false);
        //         Ext.Viewport.child('tabpanel').setActiveItem(parseInt(itemIndex));
        //     }, this);
        //     return;
        // }
// ----- END Old code -------------------------

        var navlist = Ext.Viewport.down('navlist');
        if(record.data.itemIndex == 1){
            if( !navlist.down('gebarenlijst') ){
                
                navlist.add({xtype: 'gebarenlijst'});
                navlist.setActiveItem(navlist.down('gebarenlijst'));

                Ext.Viewport.setMasked({xtype:'loadmask', message:'<img src="resources/images/spinner.svg">', cls:'masklist', indicator:false, fullscreen:true});

                setTimeout(function(){
                    Ext.Viewport.setMasked(false);    
                },2000);
            }

            if( !navlist.down('gebarendetail') ){
                navlist.add({xtype: 'gebarendetail'});
            }
        }
        else{
            if( navlist.down('gebarenlijst') ){
                navlist.down('gebarenlijst').destroy();
            }
        }
                
        Ext.Viewport.child('tabpanel').setActiveItem(parseInt(itemIndex));
        Ext.Viewport.toggleMenu('left'); // Hide the menu. I would like to have this an immidiate effect (before the new page is completely loaded)       
    },

    onBackTap: function() {
        var navlist = Ext.Viewport.down('navlist');
        if( !navlist.down('gebarenlijst') ){
            navlist.add({xtype: 'gebarenlijst'});
            navlist.setActiveItem(navlist.down('gebarenlijst')); // , {type: 'fade', duration: 1000} not sure if this fade is working

// ---- Mask on back tab is not needed for now --------
//            Ext.Viewport.setMasked({xtype:'loadmask', message:'<img src="resources/images/spinner.svg">', cls:'masklist', indicator:false, fullscreen:true, hideAnimation:'fadeOut'});
//            setTimeout(function(){
//                Ext.Viewport.setMasked(false);            
//            },1000);
        }
        
        
        //this.getMain().setActiveItem(0); // old code before dynamic loading       

// ---------- Experiment 
//        this.getVideoView().setUrl(null)

    },

    onNextTap: function() {
        var me = this,
            store = Ext.getStore('gebaarStore'),
            index = store.indexOf(me.currentDetailRecord);

        index++;

        if (index === store.getCount()) {
            index = 0;
        }

        var record = store.getAt(index),
            detail = me.getDetail(),
            video = detail.down('video');

        video.media.hide();
        video.pause();
        video.setUrl(null);

        setTimeout(function() {
            me.showDetail(null, null, null, record);
            video.media.dom.load(); // this is needed!! for ios8,9 and 10
			video.ghost.show();
        }, 100);
    },
    


// ------------------ experimnent --------------------------------    

//		container.on ('deactivate', function(oldCard), {
//			oldCard.destroy();
//		});    
		
//		container.setActiveItem(newCard, 'slide');

/*
		list.on({
			beforeactivate : function() {
				list.setBlockRefresh(true);
				list.update('');
				list.setLoading(true);
			},
			activate: function() {
				list.setBlockRefresh(false);
				list.refresh();
				list.setLoading(false);
			}
			
		});
		
		container.setActiveItem(list, 'slide');	
*/ 
// ------------------ END experimnent --------------------------------     


    showDetail: function (view, index, target, record) {
        var me = this,
            detail = this.getDetail();

        me.getListDetailImage().setSrc("resources/images/objects/" + record.data.plaatje + ".svg");

// ----------- Android ---------
        if (Ext.os.is.Android) {
            me.getVideoPlayButton().__url = "file:///android_asset/www/resources/video/" + record.data.plaatje + '.mp4';
            me.getVideoPlayButton().show();
            me.getListDetailVideo().hide();
            me.getListDetailButton().__url = "file:///android_asset/www/resources/audio/" + record.data.plaatje + ".m4a";
        	me.getListDetailAudio().setUrl("file:///android_asset/www/resources/audio/" + record.data.plaatje + ".m4a");
        }
// ----------- IOS and browsers ---------        
        else {
            me.getVideoPlayButton().hide();
            me.getListDetailVideo().show();
            me.getListDetailVideo().setUrl("resources/video/" + record.data.plaatje + ".mp4");
            me.getListDetailAudio().setUrl("resources/audio/" + record.data.plaatje + ".m4a");
        }

        me.getListDetailButton().setText(record.data.plaatje);

        me.currentDetailRecord = record;
        me.getMain().animateActiveItem(detail, {type: 'fade', duration: 200});
        

        setTimeout(function() {
            if(me.getListView()){
                me.getListView().deselectAll();
            }
            var navlist = Ext.Viewport.down('navlist');
            if( navlist.down('gebarenlijst') ){
                navlist.down('gebarenlijst').destroy();
            }
        }, 300);
    }
});