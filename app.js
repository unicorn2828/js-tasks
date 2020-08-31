// js practical task

/**
 * Task 1: You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const date = new Date('01.06.2020');
    date.setSeconds(seconds);
    document.getElementById('task1').innerText = date.toLocaleDateString();
}

/**
 * Task 2: You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    let result;
    if (decimal < 1024) {
        result = (decimal >>> 0).toString(2);
    } else {
        result = 'number must be less than 1024';
    }
    return result;
}

/**
 * Task 3: You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    substring = substring.toUpperCase();
    text = text.toUpperCase();
    let count = 0;
    let result;
    if (text.includes(substring)) {
        for (let i = count; i < text.length; count += +(substring === text[i++])) ;
        result = count;
    } else {
        result = 'this sentence does not include ' + substring + ' symbol';
    }
    return result;
}

/**
 * Task 4: You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    let string2 = string;
    console.log('string= ' + string)
    for (let i = 0; i < string.length; i++) {
        let bb = false;
        let x = string[i]
        for (let z = 1; z < string.length; z++) {
            if (x === string[z]) {
                bb = false
                break;
            } else {
                bb = true

            }
        }
        if (bb) {

        }
    }
    return string2;
}

/**
 * Task 5: You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
const f1 = redundant("apple") // по сути приватная переменная
const f2 = redundant('pear')

function redundant(str) {        //замыкание
    return function () {         //   |
        return 'task 5: ' + str; //замыкание
    }
}

/**
 * Task 6: Tower of Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function hanoiTower(height) {
    const towerA = 'A';
    const towerB = 'B';
    const towerC = 'C';
    if (height >= 1) {
        action(height, towerA, towerC, towerB);
    }
    return hanoiTowerResult;
}
let hanoiTowerResult = 0;

function action(height, towerA, towerC, towerB) {
    if (height >= 1) {
        // Move a tower of height-1 to the buffer peg, using the destination peg.
        action(height - 1, towerA, towerB, towerC);
        // Move the remaining disk to the destination peg.
        console.log('Move disk ', height, ' from Tower ', towerA, ' to Tower ', towerC);
        // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.
        action(height - 1, towerB, towerC, towerA);
        hanoiTowerResult++
    }
}

/**
 * Task 7: You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

/**
 * Task 8: Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */

function gather(str) {
    order();
}
function order(number) {

}
function get() {

}
