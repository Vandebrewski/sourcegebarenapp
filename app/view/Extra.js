Ext.define('KinderGebaren.view.Extra', {
    extend: 'Ext.Container',
    xtype: 'extrapanel',

    config: {
        iconCls: 'info',
        styleHtmlContent: true,
        cls: 'infoscreen',
        scrollable: true,
        items: [
        {
        	xtype: 'spacer',
        	height: 10
        },
        {
        	xtype: 'spacer',
        	height: 10
        },
        {
        	xtype: 'spacer',
        	height: 20
        },
        {
            html: '<img src="resources/images/nsgk.svg" width=100%><br />De KinderGebaren app is mogelijk gemaakt door NSGK<br /><br />Ieder item bevat een plaatje met daaronder een filmpje en een geluidsfragment van het bijbehorende gebaar. Als je tikt op de grote play knop of het kleinere knopje onder de naam van het object, dan speelt/stopt het filmpje of geluidsfragment. Door de interactie tussen het kind en de app en de combinatie van geluid, afbeelding en gebaar kunnen kinderen gemakkelijker nieuwe informatie onthouden.<br /><br />Deze app is ontwikkeld voor en door kinderen/familie van dove en slechthorende kinderen naar een idee van New-impulse media in samenwerking met de NSDSK. Het ontwerp en de techniek zijn verzorgd door New-impulse media.<br /><br />Versie 1.2<br /><br />',
            cls:'infotext'
        }]
    }
});
