//В функцию передаем коллекцию и 2 значения.
// По результату выполнения вывести true,
// если хотя бы у одного одно свойство равно второму параметру,
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
    let result = false;

    arr.forEach(value => {

        if (value.name === val1 && value.age === val2) {
            result = true;
        }
    });
    return result;
}

const t = testFunction(collectionArr, 'rest', 89);
console.log(t);