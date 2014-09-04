Ext.define('Test.model.Gebaar',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Name',
        fields:[
            { name: 'Id', type: 'int'},
            { name: 'plaatje', type: 'string'}
        ]
    },
    
});


