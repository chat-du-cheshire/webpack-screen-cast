"use srtict";

window.onload = function(){
    document.getElementById('login').onclick = function() {
        /*Подгружает модуль в [] или в require в callback*/
        require.ensure([], function(require){
            let login = require('./login');
            login();
        });
    }
}