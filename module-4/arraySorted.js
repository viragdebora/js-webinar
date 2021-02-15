/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

function arraySorted(items, ignore) {
    const ignoreArray = (ignore || '').split('');
    const whitespaces = [' ', '\n', '\t'];
    items = items.map(item => {
        const splittedItem = item.toString().split('');
        return splittedItem.filter(char => !ignoreArray.includes(char) && !whitespaces.includes(char)).join('');
    });

    for (let i = 0; i < items.length - 1; i++) {
        const a = items[i].toString().toLowerCase();
        const b = items[i + 1].toString().toLowerCase();

        if (a > b) {
            return false;
        }
    }

    return true;
}

module.exports = arraySorted;