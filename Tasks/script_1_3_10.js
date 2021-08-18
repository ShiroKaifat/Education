//В функцию передаем коллекцию и 2 значения.
// По результату выполнения вывести true,
// если у всех объектов одно свойство равно второму параметру,
// а другое свойство равно третьему параметру.

let collectionArr = [
    {
        name: 'test',
        age: 9
    },
    {
        name: 'rest',
        age: 89
    },
    {
        name: 'west',
        age: 23
    },
    {
        name: 'test',
        age: 34
    }
];

testFunction = (arr, val1, val2) => {
    let countAll = lengthFunction(arr);
    let count  = 0;

    arr.forEach(value => {

        if (value.name === val1 && value.age === val2) {
            count++;
        }
    });
    return count === countAll;
}

lengthFunction = (arr) => {
   let count = 0;

   arr.forEach((value, index) => {
       count = index + 1;
   });
   return count;
}

const t = testFunction(collectionArr, 'test', 34);
console.log(t);
