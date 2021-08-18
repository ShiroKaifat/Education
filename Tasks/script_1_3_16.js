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
   let flag = false;

   keys.forEach(item => {

       if (item === keyVal) {
           flag = true;
       }
   });
   return flag ? 'Exist' : 'No exist';
}

const t = testFunction(r, 'test');
console.log(t);