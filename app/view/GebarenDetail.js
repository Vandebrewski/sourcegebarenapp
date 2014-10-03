Ext.define('Test.view.GebarenDetail', {
    extend: 'Ext.Container',
    xtype: 'gebarendetail',

    config: {
        cls: 'gebarendetail',
    
        layout: {
            type: 'vbox',
            pack: 'end'
        },
        items: [{
            xtype: 'button',
            itemId: 'backButton',
			cls: 'backButton',
			text: 'TERUG'
        }, 
        {
            xtype: 'image',
            cls: 'fade-in',
            name: 'listDetailImage',
            width: 768,
            height: 436
        }, 
        {
            xtype: 'button',
            itemId: 'listDetailButton', 
            cls: 'audioButton',  
            handler: function () {
                var container = this.getParent(),
                audio = container.down('audio');
                audio.play();
        		}
        }, 
        {
            xtype: 'audio',
            name: 'listDetailAudio',
            hidden: true
        }]
    }
});
