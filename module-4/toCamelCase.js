/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

function toCamelCase(toConvert) {
    const allowed = "abcdefghijklmnopqrstuvwxyz0123456789";
    const whitespaces = ['\n', '\t', ' '];
    if (typeof toConvert !== "string") {
        return "";
    }
    let newString = '';
    for (let char of toConvert) {
        if (whitespaces.includes(char)) {
            newString += ' ';
        } else if(allowed.includes(char.toLowerCase())) {
            newString += char;
        }
    }

    return newString
        .split(' ')
        .filter(Boolean)
        .map((word, index) => {
            if (index) {
                return word[0].toUpperCase() + word.substring(1);
            }

            return word.toLowerCase();
        })
        .join('');
}

module.exports = toCamelCase;