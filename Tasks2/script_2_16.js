//Отсортировать коллекцию по конкретному свойству объекта
// и переданным параметром (asc, desc).
//Если параметр (asc, desc) не передан, по умолчанию сортировка asc.

sortCollection = (arr, val1, val2) => {

    if (val2 === undefined || val2 === 'asc') {
        arr.sort((a, b) => {
            return a[val1] - b[val1];
        });
        return arr;
    }

    if (val2 === 'dsc') {
        arr.sort((a, b) => {
            return  b[val1] - a[val1];
        });
        return arr;
    }
}

const elements = [
    {
        name: 'test',
        age: 34,
        country: 'RF'
    },
    {
        name: 'test2',
        age: 12,
        country: 'RF'
    },
    {
        name: 'test1',
        age: 54,
        country: 'RF'
    }
];
const result = sortCollection(elements, 'age', 'asc');
console.log(result);