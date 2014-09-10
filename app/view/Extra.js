Ext.define('Test.view.Extra', {
    extend: 'Ext.Panel',
    xtype: 'extrapanel',

    config: {
        title: 'Info',
        iconCls: 'info',
        styleHtmlContent: true,
        cls: 'tekstscreen',
        scrollable: false,
       height: 1024,
        items: [{
            xtype: 'container',
            html: '<center><br /><img src="resources/images/extra-image.png"><br /><br /><h3>Kinder Gebaren Lite</h3></center><br /><p style="margin: 10px 20px 10px 20px;">De Kinder Gebaren Lite app bevat 14 dierengebaren. Iedere kaart bevat een foto van een dier met daaronder een filmpje van het bijbehorende gebaar. Als je tikt op de grote <i>play</i> knop, dan speelt/stopt het filmpje. Bij het wisselen van de dieren wordt de naam van het dier duidelijk uitgesproken. Door de interactie van het kind met de app en de combinatie van geluidsfragment, foto en gebaar, kunnen kinderen gemakkelijker nieuwe informatie onthouden.<br /><br />Deze app is ontwikkeld voor en door kinderen/familie van slechthorende kinderen naar een idee van New-impulse media in samenwerking met de NSDSK. De gebarenvideos zijn ontwikkeld door de Berengroep.<br /><br /><center><img src="resources/images/nsdsk-klein.png"></center></p>'
        }]
    }
})

