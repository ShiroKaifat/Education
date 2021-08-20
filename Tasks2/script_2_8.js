//Возвращает рандомный элемент массива

randomElem = (arr) => {
    let rnd = Math.floor(Math.random() * (arr.length ));
    return arr[rnd];
}

const array = [40, 80, 20, 90, 40, 60, 50, 10, 70, 40];
const t = randomElem(array);
console.log(t);