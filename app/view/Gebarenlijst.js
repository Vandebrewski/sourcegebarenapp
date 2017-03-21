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
//       cover: true,
        
        itemTpl: '<img src="resources/images/objects/{plaatje}.svg">{plaatje}'
    }
});