//В функцию передаем массив и 2 значения.
// По результату выполнения вывести все элементы массива,
// которые равны или второму, или третьему параметру.

let array = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];
console.log(array);

/*testFunction = (arr, val1, val2) => {

    arr.forEach(value => {

        if (value === val1 || value === val2) {
            console.log(value);
        }

    });
}*/
const t = array.filter(value => (value === 4 || value === 2));
console.log(t);
