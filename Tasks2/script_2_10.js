//Добавить все значения из второго массива в первый

addMassive = (arr1, arr2) => {

    arr2.forEach(item => {
        arr1.push(item);
    });
    return arr1;
}

let array1 = [4, 1, 8, 5, 23];
const array2 = [654, 2, 8, 4, 7];
const result = addMassive(array1,array2);
console.log(result);