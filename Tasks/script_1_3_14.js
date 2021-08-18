//В функцию передаем коллекцию.
// По результату выполнения вывести объект, определенное свойство которого, максимальное.

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

testFunction = (arr) => {
    let max = arr[0];

    arr.forEach(value => {

        if (value.age > max.age) {
            max = value;
        }
    })
    return max;
}

const t = testFunction(collectionArr);
console.log(t);