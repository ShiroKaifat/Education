//Взять определенное количество элементов из массива

sliceMassive = (arr, val) => {
    let newArray = arr.slice(0, val);
    return newArray;
}

const array = [6, 8, 3, 6, 2, 9, 5, 3, 8, 8, 3];
const result = sliceMassive(array, 5);
console.log(result);