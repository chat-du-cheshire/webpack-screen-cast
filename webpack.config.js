'use strict';

/*
  В случае если нужно собирать проект по разному, например: prod || development используются переменные окружения.
  Так же они сипользуются если нужно скрыть часть функционала в аналогичных ситуациях
*/
const NODE_ENV = process.env.NODE_ENV || "development";
/*Подключаем что бы при сборке исользовать возможности webpack.*/
const webpack = require('webpack');

module.exports = {
    /*Какой модуль собирать*/
    entry: "./home", 
    /* Куда выводить */
    output: { 
        /*Имя файла*/
        filename: "build.js" ,
        /*Создает глобальную переменную для доступа модулям извне*/
        library: "home"
    },
    /*Говорит webpack перезапускать сборку при изменении файлов*/
    watch: NODE_ENV == "development",
    watchOptions: {
        /*Задает время ожидания после изменения в течение которго webpack не запускает сборку. default: 300*/
        aggregateTimeout: 300
    },
    /*Позволяет при отладке работать с модулями в файлах модулей, а не в сборочном файле*/
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins: [
        /*Подключаем виртуальное окружение в сборку*/
        /*new webpack.EnvironmentPlugin("NODE_ENV", "USER")*/
        /*Передаем в сборку переменные*/
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            USER: JSON.stringify(process.env.USER)
        })
    ]

}
