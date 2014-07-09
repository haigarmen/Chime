Ext.define('app.view.Daily', {
    extend: 'Ext.Container',
    xtype: 'daily',

    config: {
        defaults: {
            styleHtmlContent: true
        },
		layout: 'vbox',

        items: [
            {
                xtype: 'panel',
				flex: 1,
                html: ''
            },
            {
                xtype: 'panel',
				flex: 2,
                html: '<div style="width:100%; text-align: center;"><img src="touch/resources/themes/images/chime/opening-content.png"></div>'
            }

        ]
    }

});
