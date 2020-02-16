"use strict"


const name='Генератор защитного поля';
let price=1000;
price=2000;
console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);





const total = 100;
const ordered = 50;
if(ordered>total){
    console.log('На складе недостаточно твоаров!');
    
}else{
    console.log('Заказ оформлен, с вами свяжется менеджер');
    
}

const ADMIN_PASSWORD = "jqueryismy";
let message;

message=prompt('Введите пароль');
if(ADMIN_PASSWORD === message){
    alert('Добро пожаловать!') ;
}else if(message){
    alert('Доступ запрещен, неверный пароль!');
}else{
    alert('Отменено пользователем!');
}



 
 
const credits = 23580;
const pricePerDroid = 3000;
let number = prompt("Количество дроидов")
let totalPrice = number * pricePerDroid;
    if(!number){
        alert('Отменено пользователем!');
    }else if(totalPrice > credits){
    alert('Недостаточно средств на счету!');
    }else{
    alert(`Вы купили ${number} дроидов, на счету осталось ${totalPrice} кредитов.`) ;
    }



let credit, country;
let misha = prompt("Ввудите страну");
switch(misha.toLowerCase()){
    case 'китай':
    country = 'Kитай'
    credit = 100;
    break;

    case 'чили':
    country = 'Чили'
    credit = 250;
    break;
    
    case 'австралия':
    country = 'Австралия '
    credit = 170;
    break;

    case 'индия':
    country = 'Индия '
    credit = 80;
    break;
    
    case 'ямайка':
    country = 'Ямайка '
    credit = 120;
    break;

    default: alert('В вашей стране доставка не доступна');
    break;
}
alert(`Доствка в ${country} будет стоить ${credit} кредитов`)



let input;
let total = 0;
let nember = prompt("enter number");
while (nember){
    if(typeof nember === "number"){
        if(!nember){
            alert(`Общая сумма числа равна ${total}`)
        }else if(nember){
            total += numbers;
        }
    }else{
        alert(`Было введено не число, попробуйте ёще раз`)
    }
}