/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

function arraySum(elements) {
    if (!Array.isArray(elements) || elements.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let e of elements) {
        if (typeof e === "number") {
            sum += e;
        } else if (Array.isArray(e)) {
            sum += arraySum(e);
        }
    }
    return sum;
}

module.exports = arraySum;