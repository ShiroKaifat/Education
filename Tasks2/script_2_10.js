//Добавить все значения из второго массива в первый

addMassive = (arr1, arr2) => {
    return arr1.concat(arr2);
}

let array1 = [4, 1, 8, 5, 23];
const array2 = [654, 2, 8, 4, 7];
const result = addMassive(array1,array2);
console.log(result);
