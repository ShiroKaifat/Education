//В функцию передаем массив.
// Нужно скопировать значения с одного массива в другой.
// В скопированном массиве изменить любой элемент и вывести 2 массива.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];

testFunction = (arrayVal) => {
    let arrayCopy = [...arrayVal];
    arrayCopy[5] = 1024;
    console.log('arrayCopy', arrayCopy);
    console.log('arrayVal', arrayVal);
}

const t = testFunction(array);
console.log(t);