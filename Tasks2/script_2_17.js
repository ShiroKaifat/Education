//Вернуть массив тех значений, которые есть и в первом и во втором.

conjunctionMassive = (arr1, arr2) => {
    let newArray = [];
    newArray = [... new Set(arr1)].filter(item => arr2.includes(item));
    return newArray;
}

const array1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const array2 = [4, 2, 9, 4, 5, 4];
const result = conjunctionMassive(array1,array2);
console.log(result);