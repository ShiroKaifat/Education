//Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
//Функция параметром принимает длину массива.

massiveX = (val) => {
    let newArray = [];

    for (let i = 1; i <= val; i++) {
        newArray.push('x'.repeat(i));
    }
    return newArray;
}

const result = massiveX(7);
console.log(result);