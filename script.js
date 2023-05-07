//let number = 10;
//const borderColor = "red";

//const person = {
//  name: "Sunnatillo",
//};

//person.name = "Yorqinov";
//console.log(person);

// Old version

//console.log(clientName);
//var clientName = "Sunnatillo";

// -------------------------------------//
// "use strict";  --> Qatiy Rejim
// Eski farmatdagi kodimizni yoq qilib chiqazib beradi consoleda
//  bunda undefined bo'ladi chunki bu jeda ham eskicha yo'l
//
// number = 28;
// console.log(number);

// -------------------------------------//
// Javascript Data Types
// JavaScript Malumotlar Turlari
// bular ikkiga bo'linadi 1-primitive 2-object

// 1-primitive
// Boolen Null Undefined Number String Symbol BigInter

// 2-object
// Array Object Function RegEx Date

// -------------------------------------//
// 1-primitive
"use strict";

// Number-malumot turi
// let number = 5.6; // Data Type = Numbe
// console.log(8 / 0); // Infinity yani cheksizlik chiqazadi
// console.log("Sunnatillo" * 8); // NaN - not a number

// String
// const clientName = "Sunnatillo";

// Boolean
// const isMarried = false;
// const isCircleEarth = true;
// true = xa | to'g'ri
// false = yoq | noto'g'ri

// Null - is not defined
// yoq o'zgaruvchini ishlatsak
// console.log(clientAge);

//Undefined - bunda o'zgaruvchi bor lekin hechqanday qiymat yoq
// let und;
// console.log(und);

// -------------------------------------//
// Object

// const theif = {
/// key valeu
//   age: 35, //number
//   jacket: "Black", //string
//   isLong: false, //boolean
// };

// console.log(theif.jacket);
// console.log(theif);

// Array
// []-massiv degani.
// Massivda sonlar 0dan boshlanadi- 0    1   2  3  4 5

//const colors = ["red", "green", "blue", 10, [], {}];
//console.log(colors[]);

// -------------------------------------//
// Foydalanuvchilar bilan muloqot qilish
// Modalkalar

// alert("Hello JavaScript");

// const place = confirm("Are you here ?");
// console.log(place);

// const currentPlace = prompt("Where are you ?", "Sunnatillo");
// console.log(currentPlace); // Sunnatilloni o'rniga nimami yozsak oshani chiqazib beradi
// console.log(typeof currentPlace); // bu yerda malumotimizzi turini chiqazib beradi

// const age = prompt("How old are you ?", "18");
// console.log(age + 10); // "18" + 10 = 1810

// const age = +prompt("How old are you ?", "18");
// console.log(age + 10); // "18" + 10 = 28

// const favouriteColor = [];
// favouriteColor[0] = prompt("What is your favourite color #1", "");
// favouriteColor[1] = prompt("What is your favourite color #2", "");
// favouriteColor[2] = prompt("What is your favourite color #3", "");
// console.log(favouriteColor);

// -------------------------------------//
// Interpolatsiya

// const channel = prompt("What is you favourite youtuber ?");
// console.log("https://youtube.com/" + channel + "/videos"); // bunda tushunarsiz bo'lib ketdi
// console.log(`https://youtube.com/${channel}`);

// const user = "Sunnatillo";
// const job = "JavaScript developer";
// console.log(`User name is ${user}, he is ${job}`);

// -------------------------------------//
// Operatorlar
// console.log(6+"9");

// increment, decrement => 11, 9
// let incr = 10;
// let decr = 10;
// incr++;
// decr--;
// console.log(incr);
// console.log(decr);

// pretics bilan keyingi keladigan o'zgaruvchilarga tasir qiladi
// 10, 10, 11, 9, 12, 8
// let incr = 10;
// let decr = 10;
// console.log(incr++);
// console.log(decr--);
// console.log(incr++);
// console.log(decr--);
// console.log(incr);
// console.log(decr);

// javobi => 11, 9
// let incr = 10;
// let decr = 10;
// console.log(++incr);
// console.log(--decr);

// Persent (%)
// console.log(5 % 2); // 1 qoldiq qoladi

// Tenglashtirish
// console.log(5 * 5 == 25); // besh karra besh yigirma beshmi degan savolimizga javob beradi yani (true)
// console.log(5 * 5 == "25"); // buyoda ham qiymatiga qaraydi va (true) chiqazib beradi
// console.log(5 * 5 === "25"); // ham qiymatiga va va malumot turiga qaraydigan bo'lsak (false) chiqazadi

// && = va,  || = yoki degan manoni beradi

// const isAge = true;
// const isClose = true;
// console.log(isAge && isClose); // isAge va isClose birgalikda trueni beradi

// const isAge = true;
// const isClose = false;
// console.log(isAge && isClose); // isAge va isClose ikkalsi ham totrue bo'lmasa falseni beradi

// const isAge = true;
// const isClose = false;
// const isChecked = false;
// console.log(isAge || isClose || isChecked);
// yokida hammasi  bo'lishi kerak

// && ishlatsak hammasi true bo'lishi kerak bitta bo'lsa ham true bo'lsa bo'ldi
// const isAge = true;
// const isClose = true;
// const isChecked = false;
// console.log(isAge && isClose && isChecked);

// const isAge = true;
// const isClose = true;
// const isChecked = false;
// console.log(isAge && isClose && !isChecked); // ! bu belgi bizaga trueni qaytaradi
// console.log(!isChecked); // isChecked false bo'lsa ham truega o'zgartiradi

// console.log(2 + 2 * 2 == 8); // false chiqazadi
// console.log(2 + 2 * 2 !== 8); // true chiqazadi
// console.log(2 + 2 * 2 !== "6"); // true chiqazadi
// console.log(2 + 2 * 2 !== 6); // false chiqazadi chunki 2*2+2=6 va biza bergan buyurig'imizda teskarisini chiqazsin deganmiz
