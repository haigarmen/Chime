Ext.define('app.store.Sections', {
    extend: 'Ext.data.TreeStore',
    model: 'app.model.Sections',

    root: {},

    proxy: {
        type: 'ajax',
        url: 'data/data.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
