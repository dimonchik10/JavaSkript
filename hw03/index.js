// "use strict";

//========================HomeWork===========================

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };
// user.mood = "Happy";
// user.hobby = "Skydiving";
// user.premium = false;
// console.log(user);
// const arr = Object.keys(user);
// for (let el of arr) {
// //   console.log(`${el}:${user[el]}`);
// // }

// //=======================================================

// const countProps = function(obj) {
//   // твой код
//   const arr = Object.keys(obj);
//   return arr.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//============================================================================

// const findBestEmployee = function(employees) {
//   let max = 0;
//   let str = "";
//   for (let key in employees) {
//     if (employees[key] > max) {
//       max = employees[key];
//       str = key;
//     }
//   }
//   return str;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38
//   })
// ); // lux

// const countTotalSalary = function(employees) {
//   let sum = 0;
//   let arr = Object.values(employees);
//   for (let el of arr) {
//     sum += el;
//   }
//   return sum;
// };

// const countTotalSalary = function(employees) {
//   let sum = 0;
//   for (let key in employees) {
//     sum += employees[key];
//   }
//   return sum;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150
//   })
// ); // 400

// //===========================================================

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const getAllPropValues = function(arr, prop) {
//   let newArr = [];
//   for (let el of arr) {
//     if (el[prop]) {
//       newArr.push(el[prop]);
//     }
//   }
//   return newArr;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

//==============================================

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//   let sum = 0;
//   for (let el of allProdcuts) {
//     if (el.name === productName) {
//       sum = el.price * el.quantity;
//     }
//   }
//   return sum;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw"
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const newTrans = {
//       amount,
//       type
//     };
//     return newTrans;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, "deposit"));
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert("снятие такой суммы не возможно, недостаточно средств");
//     } else {
//       this.balance -= amount;
//       this.transactions.push(this.createTransaction(amount, "withdraw"));
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions[id];
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (let el of this.transactions) {
//       if (el.type === type) {
//         sum += el.amount;
//       }
//     }
//     return sum;
//   }
// };

// account.deposit(400);
// account.deposit(500);
// account.withdraw(400);

// console.log(account.getBalance());
// console.log(account.getTransactionTotal("deposit"));
// console.log(account.transactions);