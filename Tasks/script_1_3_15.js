// В функцию подается несколько массивов. Вернуть один массив со всеми элементами.

let array1 = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];
let array2 = [5, 7, 2, 9, 4, 2, 8, 9, 4, 2, 7, 4, 12,
    754, 2345, 2, 8, 244, 2545, 6, 3, 9];

testFunction = (...arrays) => {
    let result = [...arrays[0], ...arrays[1]];
    return result;
}

const t = testFunction(array1, array2);
console.log(t);