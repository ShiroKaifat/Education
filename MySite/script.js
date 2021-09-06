/*
let test = 123;
let r ='123';
let b ='3';

 console.log('123'/'3');
 console.log(Number(r));
 console.log(+r);
 console.log(Boolean(b));

 console.log(String(test));
 console.log(123+ 'test');
 console.log(123 + '');

 console.log(!test);

 let w = [5, 8, 9];
 w = [5, 8, 9, 'text', 5, 8, null, 9, 3, true];
 w.push('text1');
 w.pop();
 w[6] = 78;
 w.splice(3, 1);
 console.log(w);


 let name = 'Ivan';
 let age = 34;
 let country = 'RF';

 let w = {
  name: 'Ivan',
  age: 34,
  country: 'RF'
 };
 console.log(w);
 console.log(w['name']);
 console.log(w.age);
 w.tel = '8765444';
 w.email = 'fdgfd@dg.ru';
 w.age = 35;
 delete w.country;
 delete w["tel"];

 let r = [
  { name: 'Ivan',
    age: 34,
    country: 'RF'},
  { name: 'Petr',
   age: 34,
   country: 'RF'},
  { name: 'Kolya',
   age: 34,
   country: 'RF'}
 ]

 r[1].age=37;
 r.splice(1,1);
 console.log(r);

 sum = (a, b, ...params) => {
  console.log(a);
  console.log(b);
  console.log(params);
  return a + b;
 }

 const temp = sum(3,8, 7, 9);
 console.log(temp);
sum = (a, b, c) => {
 const {name, age, country} = c;
 let user = ['Petr', 18];
 const [name, age] = user;
 console.log(name);
 console.log(age);
 console.log(country);
 return a + b;
}

const temp = sum(3,8, w);
console.log(temp);

let a = [6, 9, 4];

if (a[2] != 7){
 console.log('yes');
}  else {
 console.log('no');
}

a[2] > 7 ? console.log('yes') : console.log('no');

for(let i=0; i<3;i++) {
 console.log(a[i]);
}

r.map((value, index) => {
 console.log(value);
})

for (let key in w) {
 console.log('key', key);
 console.log('value', w[key]);
}
*/

let str = 'Good morning! hgdfgfdhghgdhghgdhgfh       ';
console.log(str.length);
console.log(str[5]);
console.log(str.charAt(5));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('oad'));
console.log(str.includes(''));
console.log(str.startsWith('Goad'));
console.log(str.endsWith('h'));
const t = str.slice(0, 6);
const y = str.substring(0, 6);
console.log(str.slice(0, 6));
console.log(str.substring(0,6));
console.log(str.substr(0,12));

if(t==y) console.log(('yes'));
console.log(str.replace('morning','night'));
console.log(str.split(''));
console.log(str.trim());
console.log(str.trimRight());
console.log(str.trimLeft());