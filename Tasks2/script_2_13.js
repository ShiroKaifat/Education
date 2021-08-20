//Реализуйте функцию, которая принимает на вход массив и число, которое задает размер чанка (куска).
// Функция должна вернуть массив, состоящий из чанков указанной размерности.

chunkMassive = (arr, val) => {
    let newArray = [];

    for (let i = 0; i < arr.length; i += val) {
        newArray.push(arr.slice(i, i + val));
    }
    return newArray;
}

const elements = ['a', 'b', 'c', 'd'];
const result = chunkMassive(elements, 3);
console.log(result);