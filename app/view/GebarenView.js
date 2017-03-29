Ext.define('KinderGebaren.view.GebarenView', {
    extend:'Ext.Container',
    requires:[
        'KinderGebaren.view.Gebarenlijst'
    ],
    xtype:'gebarenview',
    config:{
        cls:'gebarenview',
        layout:'card',
        activeItem:0,
        items:[
            {
                xtype:'dataview',
                name:'catsview',
                cls:'gebarencat gebarenlijst',
                itemTpl:'<img src="resources/images/objects/{plaatje}.svg">{cat}'
            },
            {
                xtype:'container',
                name:'catitemscnt',
                scrollable: false,
                fullscreen: true,
//                scroll: 'vertical',
                cls:'catitemscnt',
                layout: 'fit',
                items:[
                    //{
                    //    xtype:'component',
                    //    name:'catitemtitle',
                    //    cls:'catitemtitle',
                    //    tpl:'<div cls="gebarencatname">{catname}</div>',
                    //    data:{
                    //        catname:""
                    //    }
                    //},
                    {
                        xtype:"titlebar",
                        cls:"catitemtitle",
                        name:'catitemtitle',
                        docked:'top',
                        title:"",
                        items:[
                            {
                                //xtype: 'button',
                                name: 'catslit',
                                align:'left',
                                text:'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
                                cls: 'arrow_left'
                            }
                        ]
                    },
                    {
                        xtype:'gebarenlijst'
                    }
                ]
            }
        ]
    }
});