'use strict';

/*Подключаем что бы при сборке исользовать возможности webpack.*/
const webpack = require('webpack');

module.exports = {
    /*Директория относительно которой будут подгружаться модули*/
    context: __dirname + '/frontend',
    /*Какой модуль собирать*/
    entry: './app', 
    /* Куда выводить */
    output: { 
        /*Путь до директории сбрки (абсолютный)*/
        path: __dirname + '/public',
        /*Имя файла*/
        /*Указывает путь откуда подгружать модуль */
        publicPath: '/',
        /*[name] замениться на имя модуля указанного в entry*/
        filename: "app.js"
    },

    plugins: [
        new webpack.ProvidePlugin({
            map: 'lodash/map'
        })
    ]
}