Ext.define('Test.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'homepanel',

    config: {
        title: 'Welkom',
        iconCls: 'home',
        cls: 'tekstscreen',

        items: [{
            flex: 2,
            html: '<div><br /><img src="resources/images/home-logo.png" class="fade-in" width="100%" /><img src="resources/images/home-logo-naam.png" class="fade-in" width="100%" /></div>'

        }, {
            flex: 2,
            html: '<center><br /><h3>LITE versie 1.0 Beta</h3><h4><br />Leer op eenvoudige wijze gebaren. Er wordt op dit moment hard gewerkt aan een uitgebreide versie van deze app.</h4><br /><br /><br /><img src="resources/images/nsdsk-klein.png"></center>'
        }]
    }
})

