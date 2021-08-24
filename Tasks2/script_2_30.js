//Переставить местами максимальный и минимальный элемент в массиве

replaceMaxMin = (arr) => {
    const max = arr.indexOf(Math.max.apply(Math, arr));
    const min = arr.indexOf(Math.min.apply(Math, arr));
    const z = arr[max];
    arr[max] = arr[min];
    arr[min] = z;
    return arr;
}

const elements = [5, 7, 2, 9, 5, 6, 3, 1, 8];
const result = replaceMaxMin(elements);
console.log(result);