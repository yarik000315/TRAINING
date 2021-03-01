// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

for (const us in user) {
  console.log("key -", us);
}
for (const us in user) {
  console.log("value -", user[us]);
}

const entries = Object.entries(user);
console.log(entries);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(key, ":", value);
}
