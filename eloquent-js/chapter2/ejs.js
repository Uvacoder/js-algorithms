// -- 1. PROGRAM STRUCTURE --


'use strict';
module.exports = {};

module.exports.loopATrian = function() {
    let output = '',
        pattern = '#';

    for(let i = 1; i <= 7; i++) {
        for(let j = 0; j < i; j++) {
            output += pattern;
        }
        output += '\n';
    }
    return output;
}


module.exports.fizzBuzz = function() {
    let output = '',
        aux;
    for(let i = 1; i <= 100; i++) {
        if(i % 3 === 0) aux = "Fizz";
        if(i % 5 === 0) aux += "Buzz";
        output += aux || i;
        aux = '';
        output += '\n'; 
    }
   return output;
}

module.exports.chessBoard = function(n) {
    let output = '',
        limit = n || 8;
    for(let i = 0; i < limit; i++) {
        for(let j=0; j < limit; j++) {
            if((i + j) % 2 === 0) output += ' ';
            else output += '#';
        }
        output += '\n';
    }
    return output;
}