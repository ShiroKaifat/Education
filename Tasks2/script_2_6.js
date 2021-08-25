//Удалить из массива значение с конкретным индексом.

findIndex = (arr, val) => {
    return arr.filter((n) => {return n !== arr[val]});
}

const array = [5, 3, 8, 2, 9, 4, 1, 7];
const t = findIndex(array, 4);
console.log(t);
