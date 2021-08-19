//В функцию подается название свойства.
// Если свойство присутствует в объекте вывести "Exist",
// если отсутсвует вывести сообщение "No exist".

let r = {
    rest: 5,
    test: 5
};
testFunction = (objectVal, keyVal) => {
   const keys = [];

   for(let key in objectVal) {
       keys.push(key);
   }

   for (let i = 0; i < keys.length; i++) {

       if (keys[i] === keyVal) {
           return 'Exist';
       }
   }

   return 'No exist';
}

const t = testFunction(r, 'test');
console.log(t);
