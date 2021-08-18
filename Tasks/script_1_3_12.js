//В функцию передаем массив и значение.
// По результату выполнения вывести true,
// если в массиве есть значение равное второму параметру.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];

testFunction = (arr, val1) => {
    let result = false

    arr.forEach(value => {

        if (value === val1) {
            result = true;
        }
    });
    return result;
}

const t = testFunction(array, 9);
console.log(t);