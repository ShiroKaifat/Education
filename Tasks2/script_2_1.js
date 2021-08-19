//Отсортировать массив чисел по возрастанию или убыванию.

function sortElemW(arr) {
    arr.sort(function (a, b) {
        return b - a;
    })
    return arr;
}
function sortElemL(arr) {
    arr.sort(function (a, b) {
        return a - b;
    })
    return arr;
}

const elements = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArrayW = sortElemW(elements);
console.log(sortedArrayW);
const sortedArrayL = sortElemL(elements);
console.log(sortedArrayL);

