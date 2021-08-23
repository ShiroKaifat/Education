//Дана строка. Определить, содержит ли строка только символы 'a', 'b', 'c' или нет.

opredSymbols = (str) => {
    const maxcount = str.length;
    let count = 0;
    
    for ( let i =0; i < str.length; i++) {

        if (str[i] === 'a' || str[i] === 'b' || str[i] === 'c') {
            count++;
        }
    }
    return (count === maxcount) ? true : false;
}
const string = 'abcbacabcbcabcbaba';
const result = opredSymbols(string);
console.log(result);