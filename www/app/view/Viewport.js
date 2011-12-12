Ext.define('app.view.Viewport', {
    extend: 'Ext.tab.Panel',
        
    config: {
        fullscreen: true,
        
        tabBar: {
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },

        defaults: {
            scrollable: true
        },

        items: [
            {
                title: 'Daily',
                iconCls: 'daily',
                xtype : 'daily'                 
            },
            {
                title: 'Symptoms',
                iconCls: 'symptoms',
                xtype: 'sectionslist'
            },
            {
                title: 'Recipes',
                iconCls: 'recipes',
                xtype: 'sectionslist'
            },
            {
                title: 'Profile',
                iconCls: 'user',
                xtype: 'profile'
            }

        ]
    }
});
