Ext.define('Test.view.Card', {
    extend: 'Ext.Carousel',
    id: 'gebarencarousel',
    xtype: 'cardpanel',


    config: {
        title: 'Speel',
        iconCls: 'star',
        indicator: false,
        animation: {
        	type: 'slide',
        	duration: 600
        } // End animation






//        listeners: {
//            activeitemchange: function (obj, value, oldValue) {
//                var activeIndex = this.getActiveIndex();
//                var videoObjs = document.getElementsByTagName('video');
                

// this makes the previous playing video stop in carousel when sliding to the next
//                var total = videoObjs.length;
//                var i = 0;
//                for (i; i < total; i++) {
//                   if (videoObjs[i].paused === false && activeIndex !== i) {
//                      videoObjs[i].pause();
//                    }
                    
//                }
//            }
//        }


    } // End config
});
