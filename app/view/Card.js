Ext.define('Test.view.Card',{
    extend: 'Ext.Carousel',
    id: 'gebarencarousel',
    xtype:'cardpanel',
    fullscreen : true,

    config:{
        title: 'Speel',
        iconCls: 'star',

// prevents audio overlap     
     listeners:{
     	activeitemchange:function()
         {
         	var activeIndex = this.getActiveIndex();
         	var currentaudio = document.getElementById(activeIndex);         	
         	var oldaudio = document.getElementById(activeIndex-1);
         	var oldaudioreverse = document.getElementById(activeIndex+1); 
         	
      		
      		
      		if (activeIndex == 14)
      		{currentaudio.play();}
      	
         	if (activeIndex == 1) 
         		{ if (oldaudioreverse.paused == false) {oldaudioreverse.pause(); currentaudio.play();}
         		else {currentaudio.play();}
         		}         
			else {                 	
        		if (oldaudio.paused == false || oldaudioreverse.paused == false ) { 
        			oldaudio.pause();
        			oldaudioreverse.pause();
        			currentaudio.play();
					
        		} else { 
        			currentaudio.play();
        		}
        	}       	 
       },
       },
			
        
       
        items:[
            
// -------------------------------- 0 ------------------------------------------------
            {
                layout: {
                	type: 'vbox'             	       
                },
                items: [
                	{
                		flex:521,
	               		html:'<div class="swipe-animation"><img src="resources/images/swipe-left.png"></div>'
                	}, 					   					
                 	{
                		flex:432,
						html: '<div class="sun-animation"><img src="resources/images/home-logo-kleiner.png"></div>'
              	}]},
                	

// -------------------------------- 1 ------------------------------------------------
           {
                html: '<audio id="1"><source src="resources/images/hond.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/hond.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video1" src="resources/images/hond.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video1'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
               	

// -------------------------------- 2 ------------------------------------------------
           {
                html: '<audio id="2"><source src="resources/images/beer.mp3"></audio>',
                layout: { type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/beer.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video2" src="resources/images/beer.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video2'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
                	

// -------------------------------- 3 ------------------------------------------------
           {
                html: '<audio id="3"><source src="resources/images/koe.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/koe.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video3" src="resources/images/koe.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',						
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video3'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
                	
// -------------------------------- 4 ------------------------------------------------
           {
                html: '<audio id="4"><source src="resources/images/konijn.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/konijn.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video4" src="resources/images/konijn.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video4'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},

// -------------------------------- 5 ------------------------------------------------
           {
                html: '<audio id="5"><source src="resources/images/leeuw.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/leeuw.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video5" src="resources/images/leeuw.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video5'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},

// -------------------------------- 6 ------------------------------------------------
            {
                html: '<audio id="6"><source src="resources/images/vogel.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/vogel.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video6" src="resources/images/vogel.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video6'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
                	
                	
// -------------------------------- 7 ------------------------------------------------
           {
                html: '<audio id="7"><source src="resources/images/paard.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/paard.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video7" src="resources/images/paard.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video7'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
// -------------------------------- 8 ------------------------------------------------
           {
                html: '<audio id="8"><source src="resources/images/schaap.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/schaap.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video8" src="resources/images/schaap.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video8'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},                	
// -------------------------------- 9 ------------------------------------------------
           {
                html: '<audio id="9"><source src="resources/images/poes.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/poes.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video9" src="resources/images/poes.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
//						layout: 'fit',
						
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video9'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},

// -------------------------------- 10 ------------------------------------------------
           {
                html: '<audio id="10"><source src="resources/images/tijger.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/tijger.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video10" src="resources/images/tijger.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video10'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
// -------------------------------- 11 ------------------------------------------------
           {
                html: '<audio id="11"><source src="resources/images/aap.mp3" ></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/aap.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video11" src="resources/images/aap.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
//						layout: 'fit',
						
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video11'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
// -------------------------------- 12 ------------------------------------------------
           {
                html: '<audio id="12"><source src="resources/images/geit.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/geit.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video12" src="resources/images/geit.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video12'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
// -------------------------------- 13 ------------------------------------------------
           {
                html: '<audio id="13"><source src="resources/images/kip.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/kip.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video13" src="resources/images/kip.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video13'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},
// -------------------------------- 14 ------------------------------------------------
           {
                html: '<audio id="14"><source src="resources/images/olifant.mp3"></audio>',
                layout: {type: 'vbox'},
                items: [
                	{
                		flex:521,
                		xtype: 'image',
						src: 'resources/images/olifant.png'					
                	}, 	
                   	{
                 		flex:432,
						html: '<video id="video14" src="resources/images/olifant.mp4" width="768" height="432" poster="resources/images/bekijkgebaar.png"></video>',
						listeners: {
							tap: {
   								fn: function ()
   							{
   								var myVideo = document.getElementById('video14'); 
    							if (myVideo.paused) 
        							myVideo.play(); 
    							else 
        							myVideo.pause();
   							},
   							element: 'element'
    					} 					
    					}
                  	}
                  	]},                  	
                  	


        ]
    }

});
