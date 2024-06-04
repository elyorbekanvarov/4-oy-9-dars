// 1 - masala

// let massiv = [];
// let elementlarSoni = 5;
// for (let i = 1; i <= elementlarSoni; i++) {
//     massiv.push(prompt(`Massivga qo'shmoqchi bo'lgan elementni kiriting ${i}:`));
// }
// console.log("Boshlang'ich massiv:", massiv);
// while (true) {
//     let element = prompt("Massivga qo'shmoqchi bo'lgan elementni kiriting yoki \"stop\" ni yozing:");

//     if (element.toLowerCase() === "stop") {
//         break;
//     }

//     massiv.push(element);
// }
// console.log("Tuzilgan massiv:", massiv);

// 2 - masala

// let myArray = [];
// myArray.push("element1");
// myArray.push("element2");
// myArray.push("element3");
// myArray.pop();
// let toString = myArray.join(", ");

// console.log(toString);

// 3 - masala

// let boshMassiv = [];
// boshMassiv.unshift('Nimadur1');
// boshMassiv.unshift('Nimadur2');
// boshMassiv.unshift('Nimadur3');
// boshMassiv.unshift('Nimadur4');
// let teskariYozish = boshMassiv.reverse();
// let lenght = boshMassiv.lenght;
// console.log(teskariYozish);

// 4 - masala

// let arr = [];
// arr.unshift(element1);
// arr.unshift(element2);
// arr.shift();
// let element = arr.toString();
// console.log(element);

// 5 - masala

// let myArray = [1, 2, 3, 4, 5];
// let lastElement = myArray.pop();
// let remainingElementsCount = myArray.length;
// let firstElement = myArray[0];
// console.log(lastElement);
// console.log(remainingElementsCount);
// console.log(firstElement);

// 6 - masala

// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// let lastElement = arr.pop().toString();
// console.log(arr);
// console.log(lastElement);

// 7 - masala

// let arr = [boshMassiv];
// arr.unshift('Nimadur1');
// let teskariYoz = arr.reverse();
// let lenght = boshMassiv.lenght;
// console.log(teskariYoz);

// 8 - masala

// function removeFirstAndCount(arr) {
//   arr.shift();
//   let remainingCount = arr.length;
//   let remainingString = arr.join(", ");
//   return {
//     count: remainingCount,
//     remainingString: remainingString,
//   };
// }
// let arr = [1, 2, 3, 4, 5];
// let result = removeFirstAndCount(arr);
// console.log(result.count);
// console.log(result.remainingString);

// 9 - masala

// let array = [1, 2, 3, 4, 5];
// array.push(6, 7, 8);
// array.unshift(9, 10, 11);

// let reversedArray = array.reverse();
// let stringArray = reversedArray.join(' ');

// 10 - masala

// function removeFirstAndLast(arr) {
//     arr.pop();
//     arr.shift();
//     let reversedArr = arr.slice().reverse();
//     return reversedArr;
// }
// let array = [1, 2, 3, 4, 5];
// let modifiedArray = removeFirstAndLast(array);
// console.log(modifiedArray);

// 11 - masala

// function berilganMassiv(arg) {
//     let reverse = arg.reverse();
//     let string = arg.toString();
//     let lenght = string.length;
// }
// console.log(arg);

// 12 - masala

// let array1 = [1, 2, 3, 4];
// let array2 = [5, 6, 7, 8];
// let concatenatedArray = array1.concat(array2);
// let slicedArray = concatenatedArray.slice(1, concatenatedArray.length, 2);
// console.log(slicedArray);
// console.log(slicedArray.length);

// 13 - masala

// let arr = ["apple", "banana", "cherry", "date", "elderberry"];
// arr.splice(1, 3);
// let result = arr.join(", ");
// let length = result.length;
// console.log(result);
// console.log(length);

// 14 - masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let slicedArr = arr.splice(2, arr.length - 3);
// slicedArr.reverse();
// console.log(slicedArr);
// console.log(slicedArr.length);

// 15 - masala

// const berilganMassiv = [[1, 2], [3, 4], [5, 6]];
// const flatMassiv = berilganMassiv.flat();
// const element = flatMassiv.at(2);
// console.log(element);

// 16 - masala

// let array = [1, 2, 3, 4, 5];
// let thirdElement = array[2];
// array.unshift(thirdElement);
// let length = array.length;
// console.log(array);
// console.log("Massiv uzunligi: " + length);