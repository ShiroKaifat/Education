//В функцию передаем массив и значение.
// По результату выполнения вывести номер последнего элемента массива,
// который равен второму параметру.

const testFunction = (arr, value) => {
    let number = -1;

    arr.forEach((element, index) => {

        if (element === value) {
            number = index;
        }
    });
    return number;
}

const array = [4, 2, 7, 4, 2, 8];
console.log(array);
const result = testFunction(array, 2);
console.log('result', result);