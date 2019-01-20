'use strict';

// Main console part

console.log(`
FINDING PIVOT
------------------
`);

let stringArguments = process.argv.slice(2);
console.log(`User input: ${stringArguments}`);

// test with large input
// function range(i){return i?range(i-1).concat(i):[]}
// stringArguments = range(10000);

let pivotResult = findPivot(stringArguments);
console.log(`--------------------------

Pivot function result: ${pivotResult}`);

if (pivotResult >= 0) {
    console.log(`Found pivot on index: ${pivotResult}`);
} else {
    console.log(`Sorry, I can't find any pivot index`);
}

console.log(`
----------------------`);


/**
 * findPivot function find a "middle" pivot of an array of integers
 * A "middle" pivot is when the sum of the left part of the pivot is the same as the sum of the right part of the pivot
 * Function returns the index of the pivot, returns the left most (first) pivot if there are multiple pivots
 * Function returns -1 when there's no pivot
 * @param {*} arrayInput array of integers that will be used to find a pivot in
 */
function findPivot(arrayInput) {

    // sanitize input
    // I think this should be part of the main process which handles input
    // findPivot should assume that the input passed to it is valid array of integers

    let arrayOfIntegers = arrayInput.toString().split(',').filter(Boolean).map(Number).filter(value => value == 0 ? true : !isNaN(value));
    console.log(`Parsed integers: ${arrayOfIntegers}
    ------------------
    `);

    if (arrayOfIntegers.length < 1) {
        console.log("Sorry, I can't find any integer, please input valid integers");
        return -1;
    } else {
        console.log ("Finding pivot...");
    }

    // Find pivot

    let i;

    for (i = 0; i < arrayOfIntegers.length; i++) {
        let leftSum = arrayOfIntegers.slice(0, i).reduce(add, 0);
        let rightSum = arrayOfIntegers.slice(i + 1, arrayOfIntegers.length).reduce(add, 0);

        console.log(`-----------------------
        Index: ${i}
        Left sum: ${leftSum}
        Right sum: ${rightSum}
        `)

        if (leftSum == rightSum) { 
            return i;
        }
    }

    return -1;
}

function add(a, b) {
    return a + b;
}