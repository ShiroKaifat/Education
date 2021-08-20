//Дана строка. Если она начинается на 'abc', то заменить их на 'www',
// иначе добавить в конец строки 'zzz'.

substringReplace = (str) => {

    if (str.slice(0, 3) === 'abc') {
        return str.replace('abc', 'www');
    }
    return str.concat('zzz');
}

const symbols = 'abctestabctext';
const result = substringReplace(symbols);
console.log(result);