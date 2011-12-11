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
    enabled: true
});

Ext.application({
    name: 'app',
    controllers: ['Main']

/*                
 launch: function() {
        console.log('launch');
    }
 */
});
