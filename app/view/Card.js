Ext.define('Test.view.Card', {
    extend: 'Ext.Carousel',
    id: 'gebarencarousel',
    xtype: 'cardpanel',
//    fullscreen: true, why?


    config: {
        title: 'Speel',
        iconCls: 'star',
        indicator: false,
        animation: {
        	type: 'slide',
        	duration: 600
        },

        listeners: {
            activeitemchange: function (obj, value, oldValue) {
                var activeIndex = this.getActiveIndex();
                var videoObjs = document.getElementsByTagName('video');
// this makes the previous playing video stop in carousel
                for (var i = 0; i < videoObjs.length; i++) {
                    if (videoObjs[i].paused == false && activeIndex != i) {
                        videoObjs[i].pause();
                    }
                }
            }
        }
    }
});
