// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function(message, pricePerWord) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// const string = "My name is Yarik";
// console.log(string.length);
// const stringWords = string.split(" ");
// console.log(stringWords);
// console.log(stringWords.length);

const calculateEngravingPrice = function (message, pricePerWord) {
  const stringWords = message.split(" ");
  let total = stringWords.length * pricePerWord;
  console.log(total);
};

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40);
calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20);
