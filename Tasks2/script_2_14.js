//Напишите код, который находит наиболее часто встречаемый элемент массива.

popularElement = (arr) => {
    let num = arr[0];
    let maxfrq = 1;

    for (let i = 0; i < arr.length - 1; i++) {
        let frq = 1;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j]) {frq += 1;}
        }

        if (frq > maxfrq) {
            maxfrq = frq;
            num = arr[i];
        }
    }

    if (maxfrq > 1) {return num}else {return 'All elements unique'}
}

const elements = [6, 3, 8, 2, 6, 8, 2, 5, 7, 2, 6, 8, 6, 2, 6];
const result = popularElement(elements)
console.log(result);