//В функцию передаем массив.
// Нужно вернуть массив, в котором отсутствуют ложные значения

let array = [false, null, undefined, 0, 2, -10, -30, 5, 15, NaN, ''];
filterFalse = (arr) => {
    const result = [];

    arr.forEach(item => {

        if (item && item > 0) {
            result.push(item);
        }
    });
    return result;
}

const t = filterFalse(array);
console.log(t);