/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

function reverse(o) {
    if (typeof o !== 'object') {
        throw new Error("not an object");
    }
    let result = {};
    let keys = Object.keys(o);
    for(const key of keys){
        const value = o[key];
        result[value] = key;
    }
    return result;
}

module.exports = reverse;