Ext.define('KinderGebaren.model.Gebaar',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Id',
        useCache: false, // is this helpful
        fields:[
            { name: 'Id', type: 'int'},
            { name: 'plaatje', type: 'string'},
            { name: 'cat', type: 'string'}
            
        ]
    }    
});


