/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */

function longestString(strings) {
    let result = "";
    if (!Array.isArray(strings)) {
        return strings;
    }
    strings
        .sort()
        .forEach(word => {
            if (typeof word === "string") {
                if(result.length < word.length) {
                    result = word;
                }
            }
        });
    return result;
}

module.exports = longestString;