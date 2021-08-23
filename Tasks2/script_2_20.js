//Проверьте, что строка начинается на http://.

proverNachalo = (str) => {

    if (str.slice(0,7) === 'http://') {
        return true;
    }
    return false;
}

const string = 'http://www.figma.com'
const result = proverNachalo(string);
console.log(result);