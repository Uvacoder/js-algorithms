// -- 2. FUNCTIONS --

'use strict';
module.exports = {};

module.exports.getMult3orSum5 = function(target) {
    let recursive = (start, history) => {
            if(start === target) 
                return history;
            else if(start > target)
                return null;
            else 
                return recursive(start + 5, "(" + history + " + 5)") ||
                       recursive(start * 3, "(" + history + " * 3)");
        },
        seq = '';

    return recursive(1, "1");
};

module.exports.minimum = (a, b) => a < b ? a : b;

module.exports.isEven = function(x) {
    x = Math.abs(x);
    if(x === 0) return true;
    else if(x === 1) return false;
    else return module.exports.isEven(x-2);
};

module.exports.countBs = function(str, toComp) {
    let count = 0,
        comp = toComp || 'B';
    str.split('').forEach(char => char === comp ?  count ++ : null);

    return count;
};