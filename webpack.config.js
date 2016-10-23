'use strict';

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
    watch: true,
    watchOptions: {
        /*Задает время ожидания после изменения в течение которго webpack не запускает сборку. default: 300*/
        aggregateTimeout: 300
    }
}
