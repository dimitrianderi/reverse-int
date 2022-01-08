module.exports = function reverse (n) {
    let number = Math.abs(n).toString();
    let new_number = '';

    for (let i = number.length-1; i >= 0; i--) {
        let letter = number[i];
        new_number += letter;
    }

    return +new_number;

}