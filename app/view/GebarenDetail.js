Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Panel',
    xtype: 'gebarendetail',
    fullscreen: true,

    config: {
        cls: 'gebarendetail',
        //tpl: '<img src="resources/images/{plaatje}.png"><video src="resources/images/{plaatje}.mp4" id="videox" width="768" height="432" controls></video>',
        tpl: '<audio id="audiootje" autoplay src="resources/images/{plaatje}.mp3"></audio>' +
            '<div style="background-position-x: 50%;background-image:url(resources/images/{plaatje}.png);width: 100%;height: 50%;position: absolute;background-size: auto 100%;background-repeat: no-repeat;"></div>' +
            '<video src="resources/images/{plaatje}.mp4" id="videox" autoplay style="width: 100%;background-color: transparent !important;max-height: 50%;top: 50%;position: absolute;"></video>',
        listeners: {
            tap: {
                fn: function () {
                    var myVideo = document.getElementById('videox');
                    if (myVideo.paused)
                        myVideo.play();
                    else
                        myVideo.pause();
                },

                element: 'element'
            }
        }
    },
    painted: function () {
        var speelaudiootje = document.getElementById('audiootje');
        speelaudiootje.play();
        var myVideo = document.getElementById('videox');
    }
});

