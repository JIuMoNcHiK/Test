'use strict';


let person = {
    name:"John",
    age:24,
    isMarried:false
};
let something;
console.log(person.isMarried);
console.log(5/0);
console.log('string'*9);
console.log(something);
let arr = ['plum.png','apple.png','orange.png'];
console.log(arr[0])

//alert("Hello World!");
//  let answer = confirm("Are you here?");
// console.log(answer);
let answer = prompt("Есть лт вам 18?", "Да");

//Проверять данные на его тип в консоли
console.log(typeof(answer));

// Динамическая типизация

// - to String

// 1) 
String(null);
console.log(typeof(String(null)));

// 2) 
 console.log(typeof("" + false));
 console.log(typeof("https/vk.com/catalog/" + 5));

// - to Number
// 1)
console.log(typeof(Number("5")));
// 2)
// Если мы поставим плюс перед строкой , то тогда он превратится в цифру
console.log(typeof(+"5"));
console.log(typeof(5 + +"5"));
// 3)
console.log(typeof(parseInt('15px', 10)));

// Если мы поставим плюс перед промпт , то тогда ответ пользователя будет числом а не строкой
let ans = +prompt("Hello?", "");

// False = 0,'' (без пробела,иначе будет true), null,undefined, NaN

// Логическое преобразование или он наверно говорит про boolean
// 1)
let switcher = null;

if  (switcher) {
    console.log("Working..");
}

switcher = 1;
if (switcher) {
    console.log("Working..");
}

// 2)
console.log(typeof(Boolean("5")));
// 3)
console.log(typeof(!!"5"));

let incr = 10,
    decr = 10;

    // Если инкремент или декремент будет после значения то тогда он покажет тебе старую форму, а если перед значением то он тебе выдаст уже измененную форму
    console.log(incr++);
    console.log(decr--);

    console.log(--decr);
    console.log(++incr);

    console.log(5%2);
    // Два знака равно то значит что он проверяет по знаениям
    // А если будет три знака равно значит он проверяет оп типу данных
    console.log("2" === 2);  /*false*/
    console.log("2" == 2);     /*true*/

    let isChecked = true;
        isClosed =  false        // && = и
        console.log(isChecked && isClosed);
        // || = или
        // также есть отрицание = !.Он делает все наоборот.Например у тебя есть false  и если ты поставишь перед ним !, то тогда он превратится в true
        console.log(isChecked || isClosed);