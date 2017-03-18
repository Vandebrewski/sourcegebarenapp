Ext.define('KinderGebaren.view.Gebarenlijst', {
    extend: 'Ext.List', // or should I use Ext.List instead of Ext.dataview.List
    xtype: 'gebarenlijst',
    
//    fullscreen: true,
    config: {
        cls: 'gebarenlijst',
       	grouped: true,
        scrollable: true,
        scroll: 'vertical',        
		layout: 'fit',
        store: 'gebaarStore',
<<<<<<< HEAD
//       cover: true,
=======

// --------EXPERIMENT --------        
     //    masked: {
     //        xtype: 'loadmask',
     //        message: 'loading data'
    	// }, 
    	
    	
// --------END EXPERIMENT --------    	
        
>>>>>>> origin/master
        
        itemTpl: '<img src="resources/images/objects/{plaatje}.svg">{plaatje}'
    }
});