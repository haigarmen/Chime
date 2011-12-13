/**
 * @filename app.js
 *
 * @name Sencha Touch 2.0 MVC application test
 * @fileOverview MVC App for testing Sencha Touch 2.0 component
 *
 *
 * @requires touch/sencha-touch-all-debug-w-comments.js (version 2.0 up)
 * @requires touch/resources/css/sencha-touch.css
 *
 */

Ext.Loader.setConfig({
    enabled: true,
	icon: 'icon.png',
	    glossOnIcon: false,
	    tabletStartupScreen: 'tablet_startup.png',
	    phoneStartupScreen: 'touch/resources/themes/images/chime/opening-screen-sml.jpg',
	    viewport: {
	        autoMaximize: false
	    }
	});


Ext.application({
    name: 'app',
    controllers: ['Main'],

launch: function() {
        console.log('launch');
    }
});
