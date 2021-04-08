// 1) створити функцію яка приймає масив та виводить його
//
// let array = [20,40,55,2,15,12,107];
// function writeArray(arr) {
//     console.log(arr);
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
// writeArray([20,40,55,2,15,12,107]);
//                            OR
//
// const writeArray = (array) => {
//     for (const arrElement of array) {
//         console.log(arrElement);
//     }
// }
//
// writeArray([15,10,1]);


// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення
// використати попередню функцію.
//
//
// function createArray(length,min,max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//        array.push(Math.floor(Math.random() *(max-min)+min))
//     }
//     return array;
// }
//  const array1 = createArray(10,10,100);
//  console.log(array1);
//  document.write(array1);
//
//           OR
//
// const createArray = (min, max, length) => {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         let random = Math.floor(Math.random() * (max - min)) + min;
//         array.push(random);
//         array[i] = random;
//     }
//     return array;
// }
// const newArray = createArray(10, 40, 25);
//
// console.log(newArray);
// document.write(newArray);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
//
// const findMin = (a, b, c) => {
//     let array = [a, b, c];
//     let min = a;
//     for (const arrayElement of array) {
//         if (min > arrayElement) {
//             min = arrayElement
//         }
//     }
//     console.log(min);
// }
// findMin(131, 210, 29,)
//
//                   OR
//
// function returnMinFromThree(a, b, c) {
//     let min;
//     let max;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c;
//
//     console.log('min', min);
//     return min;
// }
// const min = returnMinFromThree(10, 12, 53)
// console.log('---------------------------');
// console.log(min);
//
//                  OR
//
// function returnMinFromThree(a, b, c) {
//     let min;
//     a > b ? min = b : min = a;
//     min > c ? min = c : '';
//
//     console.log('min', min);
//     return min;
// }
// const min = returnMinFromThree(74,30,63);
// console.log('---------------------------');
// console.log(min);
//


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// const findMax = (a,b,c) => {
//     let array = [a,b,c];
//     let max = a;
//     for (const arrayElement of array) {
//         if(max < arrayElement) {
//             max = arrayElement
//         }
//     }
//     console.log(max);
// }
// findMax(1000,21,233,)
//
//                        OR
//
// function returnMaxFromThree(a, b, c) {
//     let max;
//     a > b ? max = a : max = b;
//     max < c ? max = c : '';
//
//     console.log('max', max);
//     return max;
// }
// const max = returnMaxFromThree(63,30,6);
// console.log('---------------------------');
// console.log(max);


// 5) створити функцію яка повертає найбільше число з масиву
//
// let findMax = (a, b, c, d) => {
//     let array = [a, b, c, d];
//     let max = d;
//     for (const arrayElement of array) {
//         if (max < arrayElement) {
//             max = arrayElement
//         }
//     }
//     console.log(max);
// }
// findMax(360, 480,854,390 )
//
//                        OR
//
// const myFunck = (array)=> {
//     let max = array[0];
//     for (const item of array) {
//         if (max < item) max = item;
//     }
//     return max;
// }
// const myFunck1 = myFunck([10, 42, 3, 4, 5]);
// console.log(myFunck1);


// 6) створити функцію яка повертає найменьше число з масиву
//
//
// let findMin = (a, b, c, d, e) => {
//     let array = [a, b, c, d, e];
//     let min = c;
//     for (const arrayElement of array) {
//         if (min > arrayElement) {
//             min = arrayElement
//         }
//     }
//     console.log(min);
// }
// findMin(30, 100, 34, 22, 68,);
//
//
//                  OR
//
// const myFunck = (array)=> {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) min = item;
//     }
//     return min;
// }
// const myFunck1 = myFunck([10, 42, 133, 4, 25]);
// console.log(myFunck1);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//
//      const apply = (array) => {
//     let result = 0;
//          for (const arrayElement of array) {
//              result = result + arrayElement;
//          }
//     return result;
//      }
// console.log(apply([2, 4, 6]));
//
//
//                        OR
//
// function average(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum = sum + item;
//     }
//     return sum;
// }
// const average1 = average([2,4,10]);
// console.log('average1', average1);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
//  let apply = (array) => {
//     let result = 0;
//      for (const arrayElement of array) {
//          result = result + arrayElement
//      }
//     return result/array.length;;
//  }
//
//  console.log(apply([5,3,6,2]));
//
//                     OR
//
// function average(array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum/array.length;
// }
// const average1 = average([3,4,3,6]);
// console.log('average1', average1);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let arrayOfObjects = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
// const findFields = (array) => {
//     let result = [];
//     for (const obj of array) {
//         for (const key in obj) {
//             result.push(key);
//         }
//     }
//     return result;
// }
// console.log(findFields(arrayOfObjects));


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let arrayOfObjects = [
//     {name: 'Dima', age: 13},
//     {model: 'Camry'}
// ];
// const findFields = (array) => {
//     let result = [];
//     for (const obj of array) {
//         for (const key in obj) {
//             result.push(obj[key]);
//         }
//     }
//     return result;
// }
// console.log(findFields(arrayOfObjects));


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає
// новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// const splitArray = (arr1, arr2) => {
//     let newArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//         newArray[i] = arr1[i] + arr2[i];
//         // newArray.push(arr1[i] + arr2[i]);
//     }
//     return newArray;
// }
// console.log(splitArray([1,2,3,], [3,0,6]));


// ============================================================================================


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
//
// function returnMinPrintMax() {
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) max = item;
//         if (item < min) min = item;
//     }
//     console.log('max', max);
//     return min;
// }
// const min = returnMinPrintMax(100, 12, 33, 4, 35, 47, 2);
// console.log('----------------------------------')
// console.log('min', min);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
//
// let arrayOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// const findFieldsOfValues = (array, bool) => {
//     let result = [];
//     console.log('-----------------');
//     console.log(bool);
//     console.log('-----------------');
//     if (bool) {
//         for (const obj of array) {
//             for (const key in obj) {
//                 result.push(obj[key]);
//             }
//         }
//     } else {
//         for (const obj of array) {
//             for (const key in obj) {
//                 result.push(key);
//             }
//         }
//     }
//     return result;
// }
// console.log(findFieldsOfValues(arrayOfObjects));


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
//
// let array1 = [5,7,0,4];
//
// function changeElement(arr,index) {
//
//     let array = [...arr];
//     if(index < array.length-1) {
//         let temp =array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }
//     return array;
// }
// const changeElement1 = changeElement(array1, 2);
// console.log(array1);
// console.log(changeElement1);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок
// не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function myFunck(array) {
//     let zero = [];
//     let number = [];
//     for (const item of array) {
//         if (item === 0) {
//             zero.push(0);
//         } else {
//             number.push(item);
//         }
//     }
//     // return number.concat(zero);
//     return [...number,...zero];
// }
//
// console.log(myFunck([1, 0, 6, 0, 3]));
// console.log(myFunck([0, 1, 2, 3, 4]));
// console.log(myFunck([0, 0, 1, 0]));
//
//                        OR
//
// function myFunck(array) {
//     let tempArray = [...array];
//
//     for (
//         let i = tempArray.length - 1;
//         i >= 0;
//         i--
//     ) {
//         if (tempArray[i] === 0) {
//             tempArray.splice(i, 1);
//             tempArray.push(0);
//         }
//     }
//     return tempArray;
// }
// console.log(myFunck([1, 0, 6, 0, 3]));
// console.log(myFunck([0, 1, 2, 3, 4]));
// console.log(myFunck([0, 0, 1, 0]));




// - Дано список імен.
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
//
//
// let n1 = '    Harry       Potter      ';
// let n2 = '    Ron       Whisley      ';
// let n3 = '    Hermione       Granger      ';
//
// const normalize = (str) => {
//     return str
//         .split(' ')
//         .filter(x => {
//                 if(x.length > 0) {
//                     return true
//                 } else {
//                     return false
//                 }
//         })
//         .join(' ')
// }
//
// console.log(normalize(n1));
// console.log(normalize(n2));
// console.log(normalize(n2));











/// // ******************* НАЗАД В МИНУЛЕ *********************** //

// Створити функцію яка :

// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addDiv(message,typeTag) {
//    const tag =  document.createElement(typeTag);
//    tag.innerHTML = message || "Hello world";
//    document.body.appendChild(tag);
// }
// addDiv(null, 'div');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в
// який потрібно додати список цих автомобілів.
//

// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     }
// ];
//
// function addListUsers(arrayUsers,idTag) {
//    const block = document.getElementById(idTag);
//    const ul = document.createElement('ul');
//     for (let i = 0; i < arrayUsers.length; i++) {
//         const user = arrayUsers[i];
//         const li = document.createElement('li');
//         li.innerHTML = `${i+1} - ${user.name}`;
//         ul.appendChild(li);
//     }
//     block.appendChild(ul);
// }
// addListUsers(users,'list');


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви
// отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який
// потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     }
// ];
//
// function addListUsers(arrayUsers, idTag) {
//     const block = document.getElementById(idTag);
//
//     for (let i = 0; i < arrayUsers.length; i++) {
//         const user = arrayUsers[i];
//         const div = document.createElement('div');
//         const name = document.createElement('h2');
//         const email = document.createElement('h3');
//         const address = document.createElement('div');
//
//         for (const key in user.address) {
//             if (typeof user.address[key] === 'string') {
//                 const h4 = document.createElement('h4');
//                 h4.innerText = user.address[key];
//                 address.appendChild(h4);
//             }
//         }
//
//         name.innerHTML = `name: ${user.name}`;
//         email.innerHTML = `email: ${user.email}`;
//
//         div.appendChild(name);
//         div.appendChild(email);
//         div.appendChild(address);
//
//         block.appendChild(div);
//     }
// }
//
// addListUsers(users, 'list');




