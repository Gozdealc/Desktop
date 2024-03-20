// Comment

/*
Multi Comment
Multi Comment
*/

// console.log("Merhabalar")

// window.console.log("Window Merhabalar")

// console.warn("Console Warn")

// console.info("Console Info")

// console.error("Console.Error")

// alert("Alert")

// VARIABLE

// VAR DEGİŞKENİ BİRDEN FAZLA KULLANILABİLİR

// var companyName = "Miuul";
// console.log(companyName);


// var companyName44 = "Miuul";
// console.log(companyName44);


// var _companyName = "Miuul";
// console.log(_companyName);


// var $_companyName = "Miuul";
// console.log($_companyName);

// Yazılmaz, türkçe karakter de kullanamayız.

// var 30company = "Miuul";
// console.log(30company);

// LET

// let companyName2 = "Miuul";
// companyName2 = "Miuul Frontend";
// console.warn(companyName2);

// kullanamayız tekrar
// let companyName2 = "Miuul";
// console.warn(companyName2);

// CONST

// const companyName3 = "Miuul Frontend JS";
// console.warn(companyName3);

// kullanamayız,değiştirilemez.
// const companyName3 = "Miuul Frontend JS HTML";
// console.warn(companyName3);

let miuuldata1 = 12;
let miuuldata2 = 20;

// Aritmetik Operatörler 
console.log(miuuldata1+miuuldata2);
let result = miuuldata2 - miuuldata1;
console.log(result)
console.log(miuuldata1*miuuldata2);
console.log(miuuldata2/miuuldata1);

// Karşılaştırma Operatörleri

console.log(miuuldata1<miuuldata2);
console.log(miuuldata1>miuuldata2);
console.log(miuuldata1 == miuuldata2);
console.log(miuuldata1 === miuuldata2);
console.log(miuuldata1 !== miuuldata2);

// Atama Operatörleri

const data1= 10, data2= "10";
// Türüne bakmaksızın karşılaştırır biri number biri string ifade ama true olarak kabul ediyor.
console.log(data1 == data2);
console.log(data1 === data2);


// Mantıksal Operatörler

const data3= true, data4= false;
console.log(data3 && data4);
console.log(data3 || data4);

// Promt
const userData = prompt("Lütfen adınızı giriniz");
console.log(userData)