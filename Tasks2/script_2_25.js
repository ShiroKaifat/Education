//Дана строка. Заменить все символы 'a' и 'b' на 'A' и 'B' соответственно.

UpCase = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {

        if (str[i] === 'a' || str[i] === 'b') {
            newStr = newStr + str[i].toUpperCase();
        }else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
const string = 'abcetgbabctest';
const result = UpCase(string);
console.log(result);