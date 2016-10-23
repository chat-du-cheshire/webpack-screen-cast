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
    }
}
