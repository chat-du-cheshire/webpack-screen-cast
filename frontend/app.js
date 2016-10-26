"use srtict";

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