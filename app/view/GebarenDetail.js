Ext.define ('Test.view.GebarenDetail',{
    extend: 'Ext.Panel',
    xtype: 'gebarendetail',
    fullscreen: true,
	
    config: { 
    	
    	cls: 'gebarendetail',

//    	tpl: '<img src="resources/images/{plaatje}.png"><video src="resources/images/{plaatje}.mp4" id="videox" width="768" height="432" controls></video>',
    	tpl: '<audio id="audiootje" autoplay src="resources/images/{plaatje}.mp3"></audio><img src="resources/images/{plaatje}.png" height="70%" ><video src="resources/images/{plaatje}.mp4" id="videox" autoplay width="768" height="432"></video>',
    	



		listeners: {
			tap: {fn: function ()
   							{
   								var myVideo = document.getElementById('videox'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause(); 
   							},
   							element: 'element'
    					}},
				
				},
		
		
		painted:function()
         {
         var speelaudiootje = document.getElementById('audiootje');
         speelaudiootje.play();	
         }
		
});

