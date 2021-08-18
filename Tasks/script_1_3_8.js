//В функцию передаем коллекцию и 2 значения.
// По результату выполнения вывести все объекты массива,
// у которых одно свойство ('name' )равно первому параметру
// или другое свойство ('age') равно второму параметру.

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

/*testFunction = (arr, val1, val2) => {
    const result = [];
    arr.forEach(value => {

        if (value.name === val1 || value.age === val2) {
            result.push(value);
        }
    });
    return result;
}*/

const t = collectionArr.filter(value => (value.name === 'rest' || value.age === 34));
console.log(t);
