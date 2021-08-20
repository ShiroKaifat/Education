//Дана строка. Вывести первые три символа и последний три символа, если длина строки больше 5.
// Иначе вывести первый символ столько раз, какова длина строки.

function outputSymbols (str) {
    let newStr = '';

    if (str.length > 5) {
         newStr = String(str.slice(0, 3) + str.slice(str.length - 3, str.length));

    }else {

        for (let i = 0; i < str.length; i++) {
           newStr = newStr.concat(str.charAt(0));
        }
    }

    return newStr;
}

const symbols = 'textd'
const result = outputSymbols(symbols);
console.log(result);