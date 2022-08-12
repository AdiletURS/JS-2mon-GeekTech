// 1.1
let age = prompt("Ваш возраст")
let mess = (age > 18) ? () => true : alert("Родители разрешили?")
mess()



// 1.2
let a = 4
let b = 1
let result = (a + b < 4) ? () => alert("Malo") : alert("Mnogo")
result()



// 1.3
let login = prompt("Должность в организации?")
let mess = (login === 'Сотрудник') ? () =>alert("Привет") : (login === 'Директор') ? () => alert('Здравствуйте') : (login === '') ? () => alert('Нет логина') : alert('')
mess()


// 2.1
let a = 1;
if (a > 0) {
    let ggg = function() {
        console.log('один !')
    }
} else {
    let ggg = function() {
        console.log('два !');
    }
}


// 2.2
let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(elements.map(function (element) {
    return element.length
}));


// 2.3
let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(elements.map((element) => element.length))

