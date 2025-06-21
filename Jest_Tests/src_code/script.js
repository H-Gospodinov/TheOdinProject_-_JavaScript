
function capitalize1st(text) {

    return text.at(0).toUpperCase() + text.slice(1);
}

function reverse(text) {

    return [...text].reverse().join('');
}

function calculate(n1, n2) {

    n1 = +n1; n2 = +n2;

    if (isNaN(n1) || isNaN(n2)) {
        throw new Error('Invalid input: not a number');
    }
    return {
        add: () => {
            return n1 + n2;
        },
        subtract: () => {
            return n1 - n2;
        },
        multiply: () => {
            return n1 * n2;
        },
        divide: () => {
            if (n2 === 0) {
                throw new Error('Invalid operation: division by zero');
            }
            return n1 / n2;
        },
    };
}
function shiftCipher(text, key) {

    if (!text && text !== 0) {
        throw new Error('No input: nothing to cipher');
    }
    if (!key && +key !== 0 || isNaN(+key)) {
        throw new Error('Invalid input: no valid shift key');
    }
    const allowedChars = /[a-zA-Z]/g;
    let cipher = ''; let newChar;

    for(const char of text.toString()) {

        if (char.match(allowedChars)) {

            const base = char >= 'a' ? 97 : 65; // lowercase or uppercase
            
            newChar = String.fromCharCode(((char.charCodeAt(0) - base + +key) % 26 + 26) % 26 + base);
            cipher += newChar;
        }
        else {
            cipher += char;
        }
    }
    return cipher;
}
function analyzeArray(input) {

    if (!Array.isArray(input)) {
        throw new Error('Invalid input: array required');
    }
    if (!input.length || input.some(item => isNaN(+item))) {
        throw new Error('Invalid input: input is NaN');
    }

    const average = () => {
        const sum = input.reduce((acc, item) => {
            return acc + item;
        });
        return sum / input.length;
    }
    const min = () => {
        return input.reduce((min, item) => {
            if (item < min) min = item;
            return min;
        });
    }
    const max = () => {
        return input.reduce((max, item) => {
            if (item > max) max = item;
            return max;
        });
    }
    const length = () => {
        return input.length;
    }

    return {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    }
}
export {capitalize1st, reverse, calculate, shiftCipher, analyzeArray};