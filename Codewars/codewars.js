"use strict";

// NEW TASK 18.03.2021
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Highest and Lowest
// ----------------------------------------------------------------------------------------------------------------------------------------------
// function highAndLow(numbers) {
//   const arrOfNumbers = numbers.split(" ");
//   const high = Math.max.apply(null, arrOfNumbers);
//   const low = Math.min.apply(null, arrOfNumbers);
//   return `${high} ${low}`;
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Test.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214";
// ----------------------------------------------------------------------------------------------------------------------------------------------

// NEW TASK 19.03.2021
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Проверьте, есть ли в строке одинаковое количество символов «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// XO ("ooxx") => верно
// XO ("xooxx") => ложь
// XO ("ooxXm") => верно
// XO ("zpzpzpp") => true // при отсутствии 'x' и 'o' должно возвращать true
// XO ("zzoo") => ложь
// ----------------------------------------------------------------------------------------------------------------------------------------------
// function XO(str) {
//   const arrOfX = [];
//   const arrOfO = [];
//   const arrOfString = str.toLowerCase().split("");

//   for (const elementOfArrOfStr of arrOfString) {
//     if (elementOfArrOfStr === "x") {
//       arrOfX.push(elementOfArrOfStr);
//     } else if (elementOfArrOfStr === "o") {
//       arrOfO.push(elementOfArrOfStr);
//     }
//   }
//   if (arrOfX.length === arrOfO.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Test.XO("xo"), true;
// Test.XO("xxOo"), true;
// Test.XO("xxxm"), false;
// Test.XO("Oo"), false;
// Test.XO("ooom"), false;
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Мій алгоритм
// 1) функція приймає строку
// 2) розбиває на масив символів і переводить в нижній регістр
// 3) йде перевірка на х і на о, якщо є то пушиться в окремий масив
// 4) йде порівняння довжини масивів запушених, і вертається true or false
// ----------------------------------------------------------------------------------------------------------------------------------------------

// NEW TASK 23.03.2021
// ----------------------------------------------------------------------------------------------------------------------------------------------
//Jaden Casing Strings

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// ----------------------------------------------------------------------------------------------------------------------------------------------
String.prototype.toJadenCase = function () {
  //...
};
// ----------------------------------------------------------------------------------------------------------------------------------------------
