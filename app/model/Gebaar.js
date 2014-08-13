Ext.define('Test.model.Gebaar',{
    extend: 'Ext.data.Model',
    config:{
        idProperty: 'Name',
        fields:[
            { name: 'Id', type: 'int'},
            { name: 'Name', type: 'string'},
            { name: 'plaatje', type: 'string'}
        ]
    },
    
    fullName: function () {
    	var d = this.data,
    	names = [
    	d.Name
    	];
    	return names.join(" ");
    	
    }
});


