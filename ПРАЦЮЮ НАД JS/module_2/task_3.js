// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

const findLongestWord = function (string) {
  let arrayOfString = string.split(" ");
  console.log(arrayOfString);
  for (let i = 0; i < arrayOfString.length; i += 1) {
    let letterOfArrayOfString = arrayOfString[i].split("");
    let longesWord = letterOfArrayOfString[0];
    console.log(letterOfArrayOfString);
    if (letterOfArrayOfString.length < longesWord.length) {
      longesWord = letterOfArrayOfString[i];
    }
  }
};

findLongestWord("The quick brown fox jumped over the lazy dog");
