'use strict';

module.exports = function(message){
    /*Мы хотим скрыть отладочную информацию на проде.*/
    if(NODE_ENV == "development"){
        console.log(USER);
    }

    alert(`Welcome ${message}`);
}