//Отфильтровать коллекцию, где у свойства есть хоть какое-то значение.

filterObject = (arr) => {
    let newArray = [];
    let newborn = [];

    arr.forEach(value => {
        newborn = Object.values(value);

        for (let i = 0; i < newborn.length; i++) {

            if (newborn[i] && newborn[i] !== undefined) {
                newArray.push(value);
                break;
            }
        }
    });
    return newArray;
}

const kollekz = [
    {
        name: 'test',
        age: 34,
        country: 'RF'
    },
    {
        name: '',
        age: null,
        country: ''
    },
    {
        name: 'test1',
        age: null,
        country: ''
    },
    {
        name: '',
        age: 12,
        country: ''
    },
    {
        name: '',
        age: null,
        country: 'RF'
    }
];
const result = filterObject(kollekz);
console.log(result);