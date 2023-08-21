// function taobin(product, money) {
//   if (money < 35) {
//     return 'money is not ebnough'
//   }
//   return product
// }

// taobin('tea', 40)
// taobin('coffee', 50)

// 1. Declaration
// sayHi();

// function sayHi() {
//   console.log('Declaration');
// }

// 2. Expression
// const sayHi = function () {
//   console.log('Expression');
// };
// sayHi();

// 3. Arrow
// const sayHi = () => {
//   console.log('Arrow');
// };

// sayHi(); // call, execute, invoke

// function sayMyName(myName, phrase = 'Hello') {
// let myName;
// let phrase = 'Hello';
// myName = 'john'
// phrase = 'Hi'
// }
// sayMyName('john', 'Hello', 400, 'aaaaa');
// sayMyName('john');
// sayMyName('john', 'Hi');

// function multiplyTwoNumber(n1, n2) {
//   const a = n1 * n2;
//   console.log(a);
//   return a;
//   // return n1 * n2;
// }

// const multiplyTwoNumber = function (n1, n2) {
//   return n1 * n2;
// };

// const multiplyTwoNumber = (n1, n2) => {
//   return n1 * n2;
// };

// const multiplyTwoNumber = (n1, n2 = 0) => n1 * n2; // return n1* n2

// const result = multiplyTwoNumber(4, 5);
// const result = multiplyTwoNumber(4);

// function sayHello(name) {
//   return `Hello ${name}`;
// }

// const sayHello = name => `Hello ${name}`;

// sayHello('Jonathan'); // Hello Jonathan

// const obj = {
//   mobile: '0901901900',
//   name: 'aaaa'
// };

// const arr = ['apple', 'orange', 'banana'];
// arr[2] => 'banana'
// arr[6] = 'coconut'; // bad ['apple', 'orange', 'banana', , , , 'coconut']
// arr[arr.length] = 'coconut'; // arr[3] = 'coconut
// ['apple', 'orange', 'banana', 'coconut']
// console.log(arr);

// arr[0] = 'pineapple';
// ['pineapple', 'orange', 'banana', 'coconut']

// push ***, unshift, pop, shift
// const arr = [2, 6, 4];
// const result = arr.push(8); // arr = [2, 6, 4, 8], result = 4
// const result = arr.unshift(8); // arr = [8, 2, 6, 4], result = 4

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]);
// }

// let i = 2;
// if (i < 3) {
//   console.log(i); // 0, 1, 2
//   console.log(arr[i]); // 2, 6, 4
//   i++; // i = i + 1 =====> i = 3
// }

// Iteration: 1, item => 2
// Iteration: 2, item => 6
// Iteration: 3, item => 4

// let j = 0;
// for (let item of arr) {
//   console.log(j);
//   console.log(item);
//   j++;
// }

// const arr = [2, 6, 4];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result.push(arr[i] * 10);
// }

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 5) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

const arr = [2, 6, 4];
const mapResult = arr.map(function mapFn(item, index, array) {
  return item + index;
});
console.log(mapResult);

// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   const resultMapFn = mapFn(arr[i], i, arr);
//   result.push(resultMapFn);
// }
// [2, 7, 6]

// mapFn(2, 0, [2, 6, 4]) =====> 2 + 0
// mapFn(6, 1, [2, 6, 4]) =====> 6 + 1
// mapFn(4, 2, [2, 6, 4]) =====> 4 + 2
