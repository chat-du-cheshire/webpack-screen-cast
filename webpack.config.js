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
    ],

    /*Поиск модулей*/
    resolve: {
        /*Где искать модули если не указан путь*/
        moduleDirectories: ["node_modules"],
        /*С какими расширениями искать модули, в данном случае можно указать module_name || module_name.js*/        
        extensions: ['', '.js']
    },
    /*Поиск лоадеров*/
    resolveLoader:{
        modulesDirectories: ['node_modules'],
        /*Шаблон модуля который мы ищем*/
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    module: {
        /*Используется для компиляции одного вида js в другой. Например ES2015 в ES5*/
        loaders: [{
            /*Проверяет путь к файлу. Если тест подходит, то лоадер будет применен*/
            test: /\.js$/,
            /*Тоже что и test но по директориям, если директория подходит, то лоадер буедт прмиенен*/
            /*include: [path.resolve(__dirname, 'app/src')],*/
            /*Имя лоадера*/
            loader: 'babel?presets[]=es2015'
        }]
    }

}

/*Минификация для прода*/
if(NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}