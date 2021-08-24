//Вернуть массив ключей объекта.

formMassive = (obj) => {
    let key = Object.keys(obj);
    return key;
}

const elements =
    {
        name: 'test',
        age: 34,
        country: 'RF'
    };
const result = formMassive(elements);
console.log(result);