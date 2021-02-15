/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */
function arrayEqual(first, second) {
    if (first.length !== second.length) {
        console.warn(`${first.length} is not equal with ${second.length}`);
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        const itemInFirst = first[i];
        const itemInSecond = second[i];
        if (Array.isArray(itemInFirst) && Array.isArray(itemInSecond)) {
            const isEqual = arrayEqual(itemInFirst, itemInSecond);
            if (isEqual) {
                return true;
            }
        }
        if (itemInFirst !== itemInSecond) {
            console.warn(`${itemInFirst} is not equal with ${itemInSecond}`);
            return false;
        }
    }

    return true;
}

module.exports = arrayEqual;