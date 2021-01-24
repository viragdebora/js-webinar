/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */

function del(o , key) {
    if (typeof o !== 'object') {
        throw new Error("not an object");
    }
    let newObj = Object.assign({} , o);
    delete newObj[key];
    return newObj;
}

module.exports = del;