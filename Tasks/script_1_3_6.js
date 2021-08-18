//В функцию передаем коллекцию и значение.
// По результату выполнения вывести все объекты массива,
// конкретное свойство ('name', 'age' и тд), которых равно второму параметру

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

testFunction = (arr, val) => {

    collectionArr.forEach(item => {

        if (item.name === val) {
            console.log(item);
        }
    });
}

const t = testFunction(collectionArr, 'test');
console.log(t);