//В функцию передаем коллекцию и название ключа.
// По результату выполнения вывести массив значений по этому ключу всех объектов.

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

testFunction = (arr, val1) => {
    let values = [];
    let values1 = [];

    arr.forEach(item => {
        //values.push(item[val1]);
        values = Object.values([item[val1]]);
        values1.push(values[0]);
    });

    return values1;
}

const t = testFunction(collectionArr, 'name');
console.log(t);
