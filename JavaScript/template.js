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

// let miuuldata1 = 12;
// let miuuldata2 = 20;

// // Aritmetik Operatörler 
// console.log(miuuldata1+miuuldata2);
// let result = miuuldata2 - miuuldata1;
// console.log(result)
// console.log(miuuldata1*miuuldata2);
// console.log(miuuldata2/miuuldata1);

// Karşılaştırma Operatörleri

// console.log(miuuldata1<miuuldata2);
// console.log(miuuldata1>miuuldata2);
// console.log(miuuldata1 == miuuldata2);
// console.log(miuuldata1 === miuuldata2);
// console.log(miuuldata1 !== miuuldata2);

// // Atama Operatörleri

// const data1= 10, data2= "10";
// // Türüne bakmaksızın karşılaştırır biri number biri string ifade ama true olarak kabul ediyor.
// console.log(data1 == data2);
// console.log(data1 === data2);


// // Mantıksal Operatörler

// const data3= true, data4= false;
// console.log(data3 && data4);
// console.log(data3 || data4);

// // Promt
// const userData = prompt("Lütfen adınızı giriniz");
// console.log(userData)

// MATH
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(5,2));
// console.log(5**2);
// console.log(Math.abs(-5));
// console.log(Math.min(2,5,77,-1));
// console.log(Math.floor(4,5));
// console.log(Math.ceil(7,1));
// console.log(Math.round(5,5));

// console.log(Math.random()*1+10);

// ESCAPE CHARACTER
// console.log("Merhaba \"Miuul Frontend");
// console.log("Merhaba 'Miuul Frontend");
// console.log("Merhaba \"Miuul \n Frontend");
// console.log("Merhaba \"Miuul \n\t Frontend");

// Type Of

// let data = 44;
// console.log(typeof data);

// let name = "Gözde Alıcı";
// console.log(typeof name);

// let isLogin = true;
// console.log(typeof isLogin);

// Instanceof

// let objectInstance = new Number(44);
// console.log(objectInstance instanceof Number);

// // NEW

// let dataNew = new Number(44);
// console.log(dataNew);

// NULL

// dataNew = null;
// console.log(dataNew);

// // NaN

// let result = 10/10;
// console.log(result);

// UNDEFINED

// let dataNumber;
// console.log(dataNumber);

// SAYISAL İŞLEMLER 

// let numberMiuul = 44;
// console.log(numberMiuul);
// console.log(isNaN(numberMiuul));
// console.log(typeof numberMiuul);

// let numberFloat = 44.23;
// console.log(numberFloat);
// console.log(typeof numberFloat);

// let number2 = 5/0;
// console.log(number2);

// let bilimselGosterim =13E+5 ;
// console.log(bilimselGosterim);

// let bilimselGosterim2 =13E-5 ;
// console.log(bilimselGosterim2);


// let data1 = "10.2";
// let data2 = "23.4";
// console.log(data1+data2);
// console.log(Number(data1)+Number(data2));
// console.log(parseInt(data1)+parseInt(data2));
// console.log(parseFloat(data1)+parseFloat(data2));


// let miuulMetinsel = " Miuul Javascript öğreniyorum.";
// let miuulMetinsel2 = "html,js,css";
// console.log(miuulMetinsel);
// console.log(miuulMetinsel.length);
// console.log(miuulMetinsel.trim().length);

// console.log(miuulMetinsel.toLowerCase());
// console.log(miuulMetinsel.toUpperCase());

// console.log(miuulMetinsel.indexOf("Javascript"));
// console.log(miuulMetinsel.lastIndexOf("Javascript"));
// console.log(miuulMetinsel.includes("Javascript"));

// console.log(miuulMetinsel+ " " +miuulMetinsel2);
// console.log(miuulMetinsel.concat(miuulMetinsel2));

// console.log(miuulMetinsel.substring(4));
// console.log(miuulMetinsel.substring(0,3));
// 0-3 arasında ki metinleri göster.


// ######################################################################## //

// FUNCTION 

// PARAMETRE VE RETURN YOK

// function returnparametreyok () {
//     console.log("Helloooo");
// }
// returnparametreyok();

// // Fonksiyonu çağırmazsak çalışmaz.

// // PARAMETRE VAR RETURN YOK

// function parametreli (parametre1,parametre2) {
//     console.log("Helloooo"+ parametre1+parametre2);
// }
// parametreli("javascript",2);

// // PARAMETRE YOK RETURN VAR

// function returnlu () {
//     return "Merhaba Miuul";
// }
// let gozde  = returnlu;
// console.log(gozde);

// ########################################################

// Fonksiyon Türleri

// IMMEDIA FUNCTION

// ( function () {
//     console.log("Immedia function - Anonymous function");
// } ) ();

// ( () => {
//     console.log("Immedia funtıon-Arrow function");
// } ) ();

// // NORMAL FUNCTION

// function toplama(x,y) {return x+y}
// console.log(toplama(5,6));

// // ANONYMOUS FUNCTION 

// let toplama2 = function(x,y) {return x+y}
// console.log(toplama2(5,9));

// // ARROW FUNCTION

// const toplama3 = (x,y) => {
//     return x*y;
// }
// console.log(toplama3(5,6));

// ###################################################################

// CONDITIONAL 

// const conditional= () => {
//     let isLogin = true;

//     if (isLogin) {
//         console.log("Giriş Yapıldı");
//     }
//     else {
//         console.log("Giriş Yapılmadı");
//     }
// }
// conditional()

// const conditional2= () => {
//     let number = 0;

//     if (number<0) {
//         console.log("Sayı negatiftir");
//     }
//     else if (number>0) {
//         console.log("Sayı pozitiftir.");
//     }
//     else {
//         console.log("Sıfırdır");
//     }
// }
// conditional2 ()

// ##########################################################

// TERNARY

// const conditionalternary=() => {
//     let isMiuul = 9;
//     let result= (isMiuul>0) ? "Pozitif Sayı":"Negatif Sayı";
//     console.log(result);
// }
// conditionalternary()

// // SWITCH CASE 

// const conditionalIfElse = ()  => {
//     let isMiuul =0;
//      if(isMiuul==0) {
//         console.log("Sıfır");
//      } else if(isMiuul==1) {
//         console.log("Bir");
//      } else if (isMiuul == 2) {
//         console.log("İki");
//      } else {
//         console.log("Bilinmiyor");
//      }
// }
// conditionalIfElse()


// const conditionalSwitch = () => {
//     let isMiuul = 0;
//     switch (isMiuul) {
//         case 0:
//             console.log("Sıfır");
//             break;
//         case 1:
//             console.log("Bir");
//             break;
//         case 2:
//             console.log("İki");
//             break;
//         default :
//             console.log("Bilinmiyor");
//             break;
//     }
// }
// conditionalSwitch ()

// Eğer karar aşamasında çok fazla else,if olursa switch case yapısını kullanmamız daha temiz görüntü sağlar.

// ############################################################

// LOOP