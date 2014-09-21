Ext.define('Test.model.Gebaar',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Id',
        useCache: false, // is this helpful
        fields:[
            { name: 'Id', type: 'int'},
            'plaatje'
        ]
    }    
});


