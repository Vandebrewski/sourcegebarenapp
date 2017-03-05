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
//        video.media.setBottom(-2000); //why is this needed?
        video.ghost.show();
        var video = this.getVideoView();
// is this (underneath) needed
//        if (video.media.pause) { // fix for: the .paused flag remains false when the media has ended. But it also causes an error in browser console
//            video.media.pause();
//           }
    },


    onNavMenuSelect: function(view, record) {
        var itemIndex = record.get('itemIndex');
        Ext.Viewport.child('tabpanel').setActiveItem(parseInt(itemIndex));

        // Hide the menu?
        Ext.Viewport.toggleMenu('left');
    },

    onBackTap: function() {
        this.getMain().setActiveItem(0);
        
        // onderstaande regel is een experiment (lijkt te werken)
        this.getVideoView().media.hide();
        
        this.getVideoView().pause();
        
        // onderstaande 3regels is een experiment (lijkt te werken). Misschien niet eerst pauzeren maar direct destroy? Of is destroy overbodig?
        this.getVideoView().setUrl(null)
//        this.getVideoView().destroy(); // als ik dit gebruik gaat t mis
        this.getVideoView().ghost.show(); // krijg je nog even het play icoontje te zien
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
//            video.media.dom.load(); // this is needed for ios8 try a conditional statement
			video.ghost.show();
        }, 150);
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

        if (Ext.os.is.Android) {
            me.getVideoPlayButton().__url = "file:///android_asset/www/resources/video/" + record.data.plaatje + '.mp4';
            me.getVideoPlayButton().show();
            me.getListDetailVideo().hide();
            me.getListDetailButton().__url = "/android_asset/www/resources/audio/" + record.data.plaatje + ".m4a";
        	me.getListDetailAudio().setUrl("/android_asset/www/resources/audio/" + record.data.plaatje + ".m4a");

        }
        else {
            me.getVideoPlayButton().hide();
            me.getListDetailVideo().show();
            me.getListDetailVideo().setUrl("resources/video/" + record.data.plaatje + ".mp4");
            me.getListDetailAudio().setUrl("resources/audio/" + record.data.plaatje + ".m4a");
        }

        me.getListDetailButton().setText(record.data.plaatje);

        me.currentDetailRecord = record;
        me.getMain().animateActiveItem(detail, {type: 'fade', duration: 250});

        setTimeout(function() {
            me.getListView().deselectAll();
        }, 150);
    }
});
