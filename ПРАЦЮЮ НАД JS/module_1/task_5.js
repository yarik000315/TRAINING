// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const countryOfDeliveryChina = "КИТАЙ";
const countryOfDeliveryChili = "ЧИЛИ";
const countryOfDeliveryAustralia = "АВСТРАЛИЯ";
const countryOfDeliveryIndia = "ИНДИЯ";
const countryOfDeliveryJamaica = "ЯМАЙКА";

const costOfDeliveryChina = 100;
const costOfDeliveryChili = 250;
const costOfDeliveryAustralia = 170;
const costOfDeliveryIndia = 80;
const costOfDeliveryJamaica = 120;

let costDelivery;
const messageUser = prompt("Укажите страну доставки");

let messegeUserToUpperCase = messageUser.toUpperCase();

switch (messegeUserToUpperCase) {
  case countryOfDeliveryChina:
    costDelivery = costOfDeliveryChina;
    break;
}
