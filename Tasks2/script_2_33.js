//Реализуйте функцию, котора параметром принимает строку.
// Выведите сформированный объект из параметров строки браузера.

getparamObject = (str) => {
    str = str.slice(str.indexOf('?') + 1, str.length).split('&');
    let obj = {};

    str.forEach(value => {
        value = value.split('=');

        if (Number(value[1]) >= 0 && value[1] !== '') {
            obj[value[0]] = Number(value[1]);
        }else {
            obj[value[0]] = value[1];
        }
    });
    return obj;
}

const string = 'https://underscorejs.org?id=123&limit=5&offset=0';
const result = getparamObject(string);
console.log(result);