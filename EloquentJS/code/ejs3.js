// -- 3. DATA STRUCTURES: OBJECTS AND ARRAYS

'use strict';
module.exports = {
    range: range,
    rangeWithStep: rangeWithStep,
    sumRange: sumRange,
    reverseArray: reverseArray,
    reverseArrayInPlace: reverseArrayInPlace,
    arrayToList: arrayToList,
    arrayToListR: arrayToListR,
    listToArray: listToArray,
    listToArrayR: listToArrayR,
    deepEqual: deepEqual
};

function range(start, end) {
    let arr = [];
    
    if (start < end)
        for (let i = start; i <= end; i++) 
            arr.push(i);
    else if (start > end) 
        for (let i = start; i >= end; i--) 
            arr.push(i);
    return arr;
}

function rangeWithStep(start, end, step) {
    let arr = [];

    if (start < end)
        for (let i = start; i <= end; i+= step) 
            arr.push(i);
    else if (start > end)
        for (let i = start; i >= end; i+= step) 
            arr.push(i);
    return arr;
}

function sumRange(arr) {
    return arr.reduce((a, b) => a + b);
}

function reverseArray(arr) {
    let newArray = [];

    arr.forEach(x => newArray.unshift(x));
    return newArray;
}

function reverseArrayInPlace(arr) {
    let aux,
        len = arr.length - 1,
        mid = Math.ceil(len / 2);        

    for (let i = 0; i <= mid; i++) {
        aux = arr[i];        
        arr[i] = arr[len - i];
        arr[len - i] = aux; 
    }
    return arr;
}


// Both functions return a value but different implementation. Second one
// through a closure
function arrayToList(arr) {
    let rec = arr => {
            let obj = {};
            obj.value = arr.shift();
            obj.rest = arr.length > 0 ? rec(arr) : null;
            return obj;
        };

    return rec(arr.slice());
}

function arrayToListR(arr) {
    let list = {},
        prepend = (ele, list) => {
            let obj = { value : ele };
            obj.rest = Object.keys(list).length === 0 ? null : list;
            return obj;    
    };
    for (let i = arr.length - 1; i >= 0; i--)
        list = prepend(arr[i], list);
    return list;
}


function listToArray(list) {
    let arr = [],
        rec = list => {
            arr.push(list.value);            
            if(list.rest) rec(list.rest);
        };

    rec(list);
    return arr;
}
function listToArrayR(list) {
    let arr = [],
        i = 0,
        val,
        nth = (list, number) => {
            if (!list)
                return undefined;
            else if (number === 0)
                return list.value;
            else
                return nth(list.rest, number - 1);
        };

    val = nth(list, i);
    while(val) {
        arr.push(val);
        i++;
        val = nth(list, i);
    }
    return arr;
}


function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
        return false;
    
    var propsInA = 0, propsInB = 0;
   
    for (var prop in a)
        propsInA++;
    
    for (var prop in b) {
        propsInB++;
        
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return propsInA == propsInB;
}