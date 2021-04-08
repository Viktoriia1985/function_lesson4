// let str = 'HEllO oooooo world';

// let indexOf = str.indexOf('E');
// console.log(indexOf);

// let number = str.lastIndexOf('l');
// let numberStart = str.indexOf('l');
// console.log(number, numberStart);

// console.log(str[2]);
// console.log(str.charAt(2));
//
// console.log(str.charCodeAt(0)); /*ASCII table */

// let s = str.concat(' And again HeLLo')
// console.log(s);

// let replace = str.replace('HEllO', 'kitty')
// console.log(replace);
//
// let replace = str.replaceAll('H', 'k')
// console.log(replace);

// let slice = str.slice(13, 18);
//
// console.log(str);
// console.log(slice);

// let allowedNames = 'admin;ivan;dima;olga;ira';
// let name = 'admin';
// let number = allowedNames.indexOf(name);
// console.log(number);
//
//
// let allowedNames = 'admin; ivan; dima; olga; ira';
// let allowedArray = allowedNames.split(';');
// console.log(allowedArray);

// const strArr = ['Hello', 'feb', 'js', 'java', 'python'];
// const join = strArr.join(' ');
// console.log(join);

// let com ='Vik2021@gmail.com';
// let com1 ='vik2021@gmail.com';
//
// com = com.toLowerCase();
// com1 = com.toLowerCase();
//
// com = com.toUpperCase();
// com1 = com.toUpperCase();
//
// console.log(com, com1);
//
// console.log(com === com1);

// let com ='Vik2  021@gmail.com ';
// let com1 =' vik2021@gma  il.com  ';
//
// com = com.toLowerCase();
// com1 = com1.toLowerCase();
//
// com = com.trim();
// com1 = com1.trim();
//
// com = com.replaceAll(' ', '' );
// com1 = com1.replaceAll(' ', '');;
//
// console.log(com);
// console.log(com1);
//
// console.log(com === com1);


// let arr = [1, 3, 5, 7, 9, 11];
// let arr1 = arr.push('Vika', 'Vova');
// let arr2 = arr.unshift('Hello', 'world', 100);
// let arr3 = arr.pop('Vova'. length-1);
// let arr4 = arr.pop('Vika');
// let arr5 = arr.shift();
// let arr6 = arr.shift();``
// let arr7 = arr.shift();
// let arr8 = arr.shift();
//
// console.log(arr);
//
//
//
// let arr = [1, 3, 5, 7, 9, 11];
// let arr2 = [12, 13, 15, 17];
// let arr3 = ['vika', 'vova,','bogdan'];
//
// // let allArrays = `${arr} ${arr2} ${arr3}`;
// // console.log(allArrays);
//
// let allArrays2 = arr.concat(arr2, arr3);
// console.log(allArrays2);


// let str = '   Vikt ori ia      ';
//
// let newStr = str.trim();
// let str2 = newStr.replaceAll(' ', '');
//
// console.log(str2);  //Viktoriia

// let phone = '+377188764';
// let b = phone.startsWith('+1');
//
// if (!b) {
//     alert('Wrong format')
// }
// console.log(b);
//
// let phone2 = '+377188764';
// let b2 = phone2.startsWith('+1');
// if (phone2 !== 0) {
//     alert('Wrong format')
// }
// console.log(b2);

// let com = 'Vikki@gmail.com';
// let b = com.includes('@gmail.com');
// if (!b) {
//     alert('No enter')
// }
// console.log(b);



//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
///////////////////////////   F U N C T I O N ////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// function myFunction(whatIshouldbuy) {
//     document.write(`I bought ${whatIshouldbuy}`)
//     document.write('<hr>');
// }
//
// myFunction('milk');
// myFunction('eggs');
// myFunction(['wiskey', 'Cola']);
// myFunction(19);

// function myFunction(whatIshouldbuy = 'Bread') {
//     document.write(`I bought ${whatIshouldbuy}`)
//     document.write('<hr>');
// }
// myFunction('milk');
// myFunction('eggs');
// myFunction(['wiskey', 'Cola']);
// myFunction(19);
// myFunction();

// function calculator(sum, usdToUa = 28) {
//     const dollars = sum / usdToUa;
//     console.log(`You bought ${dollars} dollars`)
// }
// calculator(50000, 27.9);


//LEXICAL INVIRONMENT
// {
//     let a = 'xxx';
//
//     console.log(a);
// }




// let bank = 99999;
//
// function calculator(sum, usdToUa = 28) {
//     const sumOfMoney = sum / usdToUa;
//     console.log(`You bought ${sumOfMoney} dollars`)
//
//     return sumOfMoney;
// }
//
// let boughtDollars = calculator(50000, 27.9);
// console.log(boughtDollars);
//
// boughtDollars = boughtDollars - 1500;
// console.log(boughtDollars);
//
// bank += boughtDollars;
// console.log(bank);
//
// let newPayDay = calculator(25000, 28,1);
// console.log(newPayDay);
//
// newPayDay = newPayDay - 200;
// bank += newPayDay;
// console.log(bank);



// function returnTest(user) {
//     if(user.age > 18) {
//         return 'Hello'
//     }
//     // return 'PPP';
//     console.log('TEST');
// }
//
// let newResult = returnTest({Name: 'Vika', age: 19});
// let newResult1 = returnTest({Name: 'Vika', age: 10});
//
// console.log(newResult, newResult1);



// function argTest() {
//     let sum = 0;
//
//     for (const argument of arguments) {
//         console.log(argument);
//         sum += argument
//     }
//     console.log(sum / arguments.length);
// }
// argTest(1, 6, 9, 2218, 76, 965, 0);
// argTest(1);
// argTest(2,8);























