Ext.define('KinderGebaren.model.Gebaar',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Id',
        useCache: true, // is this causing the empty list page after some time???
        fields:[
            { name: 'Id', type: 'int'},
            { name: 'plaatje', type: 'string'},
            { name: 'cat', type: 'string'}            
        ]
    }    
});


