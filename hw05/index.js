"use strict"

// const Account = function({ login, email }) {
//     this.login = login;
//     this.email = email;
  
//     this.getInfo = function() {
//       console.log(` Login: ${this.login}, Email: ${this.email}`);
//     };
//   };
// console.log(Account.prototype.getInfo);// function
// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
//   getInfo(){
//     console.log(`login:${this.login}, email:${this.email}`);
    
//    }
// });


// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof


// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
//   getInfo(){
//       console.log(`login:${this.login}, email:${this.email}`);
      
//   }
  
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// =======================================================================================================================



// EX2
// class User {
//     constructor({name,age,followers}){
//     this.name=name;
//     this.age=age;
//     this.followers=followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
        
//     }

// }
// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });
  
//   mango.getInfo(); // User Mango is 2 years old and has 20 followers
  
//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });
  
//   poly.getInfo(); // User Poly is 3 years old and has 17 followers
// // =========================================================================
// // EX3

//  class Storage{
//      constructor(items){
//    this.items = items;
//      }
//    getItems(){
//        return this.items;
//    }
//    addItem(newItem){
//        this.items.push(newItem);
//        return this.items;
//    }
//   removeItem(itemToRemove){
//        for(let i=0;i<this.items.length;i++){
//            if(this.items[i]===itemToRemove){
//      this.items.splice(i,1);
//            }
//        }
//       return this.items;
//    }

//  }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
  
//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
// // =====================================================================================================
// EX4


// class StringBuilder  {
//     constructor(value){
//         this._value=value;
//     }
//     get value(){
//         return this._value;
//     }
//     append(str){
//          return this._value +=str;

//     }
//     prepend(str){
//     return this._value =str+this._value;    
//     }
//     pad(str){
//   return this._value= str+this._value+str;
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='
// =============================================================
// // EX5
// class Car {
// //     
//     //  * Добавь статический метод getSpecs(car),
//     //  * который принимает объект-машину как параметр и выводит
//     //  * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//     //  */
//    static getSpecs(car){
//            console.table(car.maxSpeed,car.speed,car.isOn,car.distance,car.price);
           
//    }    /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимал
// ьная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor({price,maxSpeed}){
//    this.speed=0;
//    this._price= price;
//    this.maxSpeed=maxSpeed;
//    this.isOn=false;
//    this.distance=0;
//     }

//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//  get price(){
//  return this._price;
//  }
//  set price(value){
//      return this.price=value;
//  }
//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn(isOn) {
//         this.isOn=true;
//     }
  
//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() 
//     {
//         this.isOn=false;
//         this.speed=0;
//         }
  
//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {
//         if(this.speed<this.maxspeed){
//             this.speed +=value;
//         }
//     }
  
//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//         if(speed>0){
//             this.speed-=value;
//         }
//     }
  
//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//         if(this.isOn){
//             this.distance=this.speed*hours;
//         }
//     }
// }
  
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
  
//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000