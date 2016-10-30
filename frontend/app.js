"use srtict";

let map = require('lodash/map');

let o = [
    {a : 1, b: "11"},
    {a : 2, b: "12"},
    {a : 3, b: "13"},
]

console.log(map(o, 'b'));