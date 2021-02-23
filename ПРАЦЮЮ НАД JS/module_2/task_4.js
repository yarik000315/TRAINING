// Задание 4
// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

const formatString = function (string) {
  let letterOfString = string.split("");
  const joinedString = letterOfString.join("");
  if (letterOfString.length > 40) {
    letterOfString.splice(40, letterOfString.length - 40);
    console.log(`${letterOfString.join("")}...`);
  } else {
    console.log(joinedString);
  }
};

formatString("Curabitur ligula sapien.");
formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
formatString("Curabitur ligula sapien, tincidunt non.");
formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
