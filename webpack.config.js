module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
        path: __dirname + '/web/dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            vue: "../node_modules/vue/dist/vue.js"
        }
    }
};
