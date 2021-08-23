//Строка состоит из слов, разделенных одним или несколькими пробелами.
// Найдите слово наибольшей длины.

maxLength = (str) => {
    let arr = str.split(' ');
    let length = 0;
    let newStr = '';

    arr.forEach(value => {

        if (value.length > length) {
            length = value.length;
            newStr = value;
        }
    });
    return newStr;
}
const string = 'text education exceed.team part 2 for test';
const result = maxLength(string);
console.log(result);