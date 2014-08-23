Ext.define('Test.controller.Main',{
    extend: 'Ext.app.Controller',

    
    config: {
    	views: ['Home','Card','NavList', 'Extra'],
    	models:['Gebaar'],
        refs: {
            main: 'navlist'
        },
        control: {
            'gebarenlijst': {
                itemtap: 'showDetail'
            }
        }
    },

    showDetail: function( obj, index, target, record) {
        this.getMain().push({
            xtype: 'gebarendetail',
            title: record.fullName(),
            data: record.getData()
        })
        
    }});

