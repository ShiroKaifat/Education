//Дана строка. Если символы в ней упорядочены по алфавиту, то вывести 'yes', иначе 'no'.

function alphabetSymbols (str) {

   for (let i = 0; i < str.length; i++) {

       if (str.charCodeAt(i) > str.charCodeAt(i + 1)) {
           return 'no'
       }
   }
    return 'yes';
}

const symbols = 'abcdehz'
//console.log(symbols.length);
const result = alphabetSymbols(symbols);
console.log(result);