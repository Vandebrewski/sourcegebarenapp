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
             disclose: 'showDetail'
            }
        }
    },

    showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'gebarendetail',
            title: record.fullName(),

            data: record.getData()
        })
        
    }});

