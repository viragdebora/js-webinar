/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

function property(o) {
    if (typeof o !== 'object') {
        return [];
    }
    return Object.keys(o);
}

module.exports = property;