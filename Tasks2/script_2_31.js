//Напишите функцию, которая преобразует массив вида
// let arr = [{name: 'width', value: 300}, {name: 'height', value: 100}];
// в объект let obj = {width:300, height: 100};
// Количество объектов в массиве неограниченно.

massiveObject = (arr) => {
    let obj = {};
    let newArray = [];
    
    arr.forEach(value => {
        newArray.push(Object.values(value)) ;
    });
    obj = Object.fromEntries(newArray);
    return obj;
}

const elements = [{name: 'width', value: 300}, {name: 'height', value: 100}];
const result = massiveObject(elements);
console.log(result);