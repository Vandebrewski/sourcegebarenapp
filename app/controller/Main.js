Ext.define('Test.controller.Main', {
    extend: 'Ext.app.Controller',


    config: {
        refs: {
            main: 'navlist'
        },
        control: {
            'gebarenlijst': {
                itemtap: 'showDetail'
            }
        }
    },

    showDetail: function (obj, index, target, record) {
        this.getMain().push({
        xtype: 'gebarendetail'
 //           title: record.data.plaatje
        })
        Ext.getCmp('listDetailButton').setText(record.data.plaatje);
        Ext.getCmp('listDetailImage').setSrc("resources/images/" + record.data.plaatje + ".png");
        Ext.getCmp('listDetailAudio').setUrl("resources/images/" + record.data.plaatje + ".mp3");
        Ext.getCmp('listDetailVideo').setUrl("resources/images/" + record.data.plaatje + ".mp4");
    } 
});

