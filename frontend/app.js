"use srtict";

let _ = require('lodash');

let o = [
    {a : 1, b: "11"},
    {a : 2, b: "12"},
    {a : 3, b: "13"},
]

console.log(_.map(o, 'b'));