Ext.define('Test.view.Card', {
    extend: 'Ext.Carousel',
    id: 'gebarencarousel',
    xtype: 'cardpanel',


    config: {
        title: 'Speel',
        iconCls: 'star',
        indicator: false,
        bufferSize: 1, //keep 1 card in memory, is default so can be removed
        animation: {
        	type: 'slide',
        	duration: 600
        }, // End animation




// Underneath listeners makes sure that the previous video stop playing after slide
//evey new slide this file is called. I doubt if that is the best way. Wouldn't it be better if all carousel code is placed here and every item is added in the loop carousel.


        listeners: {
            activeitemchange: function (obj, value, oldValue) {
                var activeIndex = this.getActiveIndex();
                var videoObjs = document.getElementsByTagName('video');
                
                var total = videoObjs.length;
                var i = 0;
                for (i; i < total; i++) {
                   if (videoObjs[i].paused === false && activeIndex !== i) {
                      videoObjs[i].pause();
                    }
                    
                }
            }
        } // End listener


    } // End config
});
