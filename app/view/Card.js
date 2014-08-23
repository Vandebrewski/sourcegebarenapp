Ext.define('Test.view.Card', {
    extend: 'Ext.Carousel',
    id: 'gebarencarousel',
    xtype: 'cardpanel',
    fullscreen: true,

    config: {
        title: 'Speel',
        iconCls: 'star',
        listeners: {
            activeitemchange: function (obj, value, oldValue) {
                var activeIndex = this.getActiveIndex();
                var currentaudio = document.getElementById(activeIndex);
                var audioObjs = document.getElementsByClassName('audioCrsl');
                var videoObjs = document.getElementsByTagName('video');
                for (var i = 0; i < audioObjs.length; i++) {
                    if (audioObjs[i].paused == false) {
                        audioObjs[i].pause();
                    }
                }
// For autoplay of audio samples
//                if (activeIndex != 0) {
//                    currentaudio.play();
//                }
                for (var i = 0; i < videoObjs.length; i++) {
                    if (videoObjs[i].paused == false && activeIndex != i) {
                        videoObjs[i].pause();
                    }
                }
            }
        }
    }
});
