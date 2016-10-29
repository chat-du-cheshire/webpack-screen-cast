"use srtict";

let moduleName = location.pathname.slice(1);
console.log("Module name: '" + moduleName + "'");
if(moduleName){
    let handler;

    try{
        handler = require('bundle!./routes/' + moduleName);
    } catch (e) {
        console.warn("Bad path")
    }

    if(handler){
        handler(function(route){
            route();
        });
    }

}

window.onload = function(){
    document.getElementById('login').onclick = function() {
        /*Подгружает модуль в [] или в require в callback*/
        require.ensure([], function(require){
            let login = require('./login');
            login();
        }, 'auth'); /* Указывает webpack имя файла в который собираются модули */
    }

    document.getElementById('logout').onclick = function() {
        /*Подгружает модуль в [] или в require в callback*/
        require.ensure([], function(require){
            let logout = require('./logout');
            logout();
        }, 'auth'); /* Указывает webpack имя файла в который собираются модули */
    }
}