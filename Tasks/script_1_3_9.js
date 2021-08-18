// В функцию передаем массив и значение.
// По результату выполнения вывести все элементы массива,
// которые не равны второму параметру.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];
console.log(array);

testFunction = (arr, val) => {
    const result = [];
    arr.forEach(value => {

        if (value !== val) {
            result.push(value);
        }
    });
    return result;
}

const t = testFunction(array,2 );
console.log(t);