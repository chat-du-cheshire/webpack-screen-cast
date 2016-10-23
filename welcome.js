'use strict';

export default function welcome(message){
    /*Мы хотим скрыть отладочную информацию на проде.*/
    if(NODE_ENV == "development"){
        console.log(USER);
    }

    console.log(`Welcome ${message}`);
}