//Вернуть true, если все значения массива "положительные"

findPositive = (arr) => {

    if (Math.min.apply(Math, arr) < 0) {
        return false;
    }
    return true;
}

const array = [9, 5, 2, 6, 23, 6, -8, 1, -9, 2, 0];
const t = findPositive(array);
console.log(t);