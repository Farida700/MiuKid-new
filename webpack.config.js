'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './script/script.js',
    output: {
        filename: 'boundle.js',
        path: __dirname + '/dist'
    },

    watch: true,

    devtool: "source-map",

    module: {}
};