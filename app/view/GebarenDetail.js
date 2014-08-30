Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Panel',
    xtype: 'gebarendetail',
    fullscreen: true,

    config: {
        cls: 'gebarendetail',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [{
            xtype: 'image',
            //src: 'resources/images/aap.png',
            id: 'listDetailImage',
            flex: 1
        }, {
            xtype: 'button',
            iconCls: 'sound',
            ui: 'action',
            margin: '0 20 10 20',
            id: 'listDetailButton',
            text: '',
            handler: function () {
                var container = this.getParent().getParent(),
                audio = container.down('audio');
                audio.toggle();
            }
        }, {
            xtype: 'audio',
            id: 'listDetailAudio',
            //url: 'resources/images/aap.mp3',
            hidden: true,
            handler: function () {
                var container = this.getParent().getParent(),
                audio = container.down('audio');
                audio.toggle();
            }

        }, {
            xtype: 'video',
            //url: 'resources/images/aap.mp4',
            id: 'listDetailVideo',
            posterUrl: 'resources/images/bekijkgebaar.png',
            flex: 1
        }]
    }
});

