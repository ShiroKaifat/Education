//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.

inArray = (val, arr) => {

    if (arr.includes(val)) {
        return true;
    }
    return false;
}
const massive = ['text', 'education', 'part', '2', 'exceed', 'team'];
const result = inArray('part', massive);
console.log(result);