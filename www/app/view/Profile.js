Ext.define('app.view.Profile', {
    extend: 'Ext.Container',
    xtype: 'profile',
        
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
				flex: 8,
                html: '<div style="width:100%; "><img src="touch/resources/themes/images/chime/profile-content.png"></div>'
            }

        ]
    }

});
