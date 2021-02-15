/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    let max = 0;
    let word = "";
    if (!Array.isArray(strings)) {
        return strings;
    }
    strings.sort();
    for (let i=0; i<strings.length; i++) {
        if (typeof strings[i] === "string") {
            if(max < strings[i].length) {
                max = strings[i].length;
                word = strings[i];
            }
        }
    }
    return word;
}

module.exports = longestString;