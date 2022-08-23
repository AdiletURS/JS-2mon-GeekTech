//1: создать 5 массивов и распаковать в один массив
const mass1 = [1,2,3,4,5]
const mass2 = [6,7,8,9,10]
const mass3 = [11,12,13,14,15]
const mass4 = [16,17,18,19,20]
const mass5 = ['Tursunbekov','Adilet','17-01']

const allmass = [...mass1,...mass2,...mass3,...mass4,...mass5]
console.log(allmass)


//2: создать объект у которого есть 5 ключей после создать новый объект
// и распаковав в новый объект дополнить 3 ключами

const obj1 = {
    name: "Adilet",
    lastName: "Tursunbekov",
    age: 19,
    group: "17-01",
    develop: "Frontend"
}

const obj2 = {
    ...obj1,
    nout: "acer",
    country:"Kyrgyzstan",
    city: "Bishkek",
}
console.log(obj2)



//3: сделать приветствие с помощью HTML, CSS, JS то есть будет input
// в который я введу свое имя и выйдет текст снизу инпута типа “Hello Jack”

let click = document.getElementById('click')
click.onclick = function() {
    let input = document.querySelector('input').value
    document.querySelector('.textInput').innerHTML="Hello "+input
}