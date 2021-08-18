//Вернуть количество элементов в массиве.

function func(arr) {
    let count = 0;

    arr.forEach(value => {
       count++;
    });
    return count;
}
const elements = [4, 6, 2, 7, 8, 4];
console.log(elements);
const result =func(elements);
console.log(result);
