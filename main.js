// 1. Дан объект. С помощью Object.values() получите массив всех его значений и выведите его.

// const obj = {
//     'a' : 2,
//     'b' : 3
// };
// const result = Object.values(obj);
// console.log(result);

// 2. Дан объект и переменная с названием одного из свойств. Используйте hasOwnProperty,
// чтобы проверить, существует ли это свойство в объекте.

// const obj = {
//     'name' : 'ilya',
// };
// const bool = obj.hasOwnProperty('name');
// console.log(bool);

// 3. Дан объект с информацией о товарах (например, { product1: 10, product2: 5, product3: 8 }).
// Используя Object.values(), посчитайте общее количество товаров.

// const obj = { product1: 10, product2: 5, product3: 8 };
// const arr = Object.values(obj);
// const result = arr.reduce(function(sum, elem){
//     return sum += elem;
// }, 0);
// console.log(result);

// 4. Дан объект с оценками студентов (например, { Анна: 95, Иван: 88, Мария: 92 }) и число n –
// минимальная оценка. С помощью Object.values() и filter() выберите оценки, которые выше n,
// и выведите их.

// const obj = { Анна: 95, Иван: 88, Мария: 92 };
// const arr = Object.values(obj);
// const n = 90
// const result = arr.filter(function(elem){
//     if(elem > n) return true
//     else return false
// })
// console.log(result)

// 5. Преобразуйте объект с данными о фруктах (например, { яблоко: 'красное', банан: 'желтый',
// апельсин: 'оранжевый' }) в массив пар [ключ, значение] с помощью Object.entries().

// const obj = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }
// const arr = Object.entries(obj)
// console.log(arr)

// 6. Дан объект и строка. Используя Object.keys(), проверьте, существует ли в объекте свойство с
// таким именем. Выведите true или false.

// const obj = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }
// const str = 'банан'
// const arr = Object.keys(obj)
// if(arr.includes(str)) console.log(true) 
// else return console.log(false)

// 8. На вход подается число. Необходимо каждое значение возвести в степень индекса и
// вычислить сумму.

// const a = '12345'
// const arr = a.split('')
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i] ** i
// }
// console.log(sum)

// 9. Даны два объекта. Создайте новый объект, включив в него только те свойства, которые есть в
// обоих исходных объектах. Используйте hasOwnProperty для проверки.

// const obj_1 = {
//     name : 'ilya',
//     age : 18,
//     blabla: 'blabla'
// }

// const obj_2 = {
//     name : 'slava',
//     age : 19,
//     tutututu: 'tutututu'
// }

// const obj = {}

// for(key_1 in obj_1){
//     if(obj_2.hasOwnProperty(key_1)) obj[key_1] = ''
// }
// console.log(obj)

// 10. Есть объект с информацией о пользователе. С помощью деструктуризации получите имя и
// возраст, и выведите их.

// const obj = {
//     name : 'ilya',
//     age: 16
// }
// const {name, age} = obj
// console.log(name, age)

// 11. Дан массив. Используя деструктуризацию, извлеките его первый и второй элементы, и
// выведите их.

// const arr = ['ilya', 'tolstenkov', 'anton'];
// const [name, second_name] = arr
// console.log(name, se)