//Реализуйте функцию, которая принимает на вход массив, состоящий из массивов-пар
// и возвращает объект, полученный из этих пар.
// Если при конструировании объекта попадаются совпадающие ключи,
// то берётся значение из последнего массива-пары.

massiveToObject = (arr) => {
    let val = {};

    arr.forEach(values => {
        val[values[0]] = values[1];
    });

    return val;
}

const params = [['cat', 5], ['dog', 6], ['cat', 11]];
console.log(params);
const result = massiveToObject(params);
console.log(result);