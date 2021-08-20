//Сгруппировать объекты заказов по имени.

groupObject = (arr) => {
let newArray = {};
newArray = Object.values(arr.reduce((acc, {name, price}) => {
    acc[name] ??= {name, price: 0};
    acc[name].price += price;
    return acc;
}, {}));
return newArray;
}

const elements = [
    {
        name: 'test',
        price: 200
    },
    {
        name: 'test1',
        price: 300
    },
    {
        name: 'test',
        price: 100
    },
    {
        name: 'test',
        price: 600
    },
];
const result = groupObject(elements);
console.log(result);