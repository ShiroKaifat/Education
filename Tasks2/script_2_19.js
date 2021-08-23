//Обрезать строку по определенному кол-ву символов, добавив в конце '...'

ObrezString = (str, val) => {
    let newStr = str.slice(0, val) + '...';
    return newStr;
}

const string = 'text education part 2';
const result = ObrezString(string, 6);
console.log(result);