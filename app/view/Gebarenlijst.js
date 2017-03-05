Ext.define('KinderGebaren.view.Gebarenlijst', {
    extend: 'Ext.List',
    xtype: 'gebarenlijst',
    config: {
        cls: 'gebarenlijst',
       grouped: true,
        scrollable: true,
        scroll: 'vertical',        
		layout: 'fit',
        store: 'gebaarStore',

// --------EXPERIMENT --------        
        masked: {
        xtype: 'loadmask',
        message: 'loading data'
    	}, 
    	
    	
// --------END EXPERIMENT --------    	
        
        
        itemTpl: '<img src="resources/images/objects/{plaatje}.svg">{plaatje}'
    }
});

