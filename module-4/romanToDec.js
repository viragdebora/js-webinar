/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    let romans = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }
    roman = roman.toUpperCase();
    for (let r of roman) {
        if(!romans.hasOwnProperty(r)){
            throw new Error("Invalid character: "+r);
        }
    }
    let i = 0;
    let result = 0;
    while (i < roman.length) {
        let actual = romans[roman[i]];
        let next = romans[roman[i + 1]];
        if (!next || actual >= next) {
            result += actual;
            i++;
        } else {
            result += (next - actual);
            i += 2;
        }
    }
    console.log(result);
} 

romanToDec("MCMLIV");