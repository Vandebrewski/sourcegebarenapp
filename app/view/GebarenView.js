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
                cls:"gebarencat gebarenlijst",
                itemTpl:'<img src="resources/images/objects/{image}.svg">{name}'
            },
            {
                xtype:'container',
                name:'catitemscnt',
                scrollable: true,
                scroll: 'vertical',
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
                                text:'back',
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