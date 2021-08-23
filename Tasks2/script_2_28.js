//Из объекта сформировать 2 массива ключи, значения

formMassive = (obj) => {
    let key = Object.keys(obj);
    let value = Object.values(obj);
    return [key, value];
}

const elements =
    {
        name: 'test',
        age: 34,
        country: 'RF'
    };
const result = formMassive(elements);
console.log(result);