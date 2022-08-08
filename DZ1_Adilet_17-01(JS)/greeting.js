const name = prompt("Введите имя")

if(name){
    alert("Добро пожаловать на сайт "+name)
}
else {
    alert("Неправильно введены данные")
}


let Adilet = ['Tursunbekov','Adilet',19,190,'Bishkek','Frontend'];
let Tilek = ['Saliev','Tilek',17,178,'Bishkek'];
console.log(Adilet)
console.log(Tilek)
console.log("Длина массива");
console.log(Adilet.length+' Adilet')
console.log(Tilek.length+' Tilek')
console.log('Сравнение массивов')
if (Adilet.length> Tilek.length ) {
    console.log(Adilet[1]+ ' - Данный массив больше,в нем '+ Adilet.length + ' элементов' ) //Adilet[1] - выводит 2 элемент из массива,можно указать другую
    console.log(Adilet)
}
else if(Adilet.length < Tilek.length) {
    console.log(Tilek[1]+ ' - Данный массив больше,в нем '+ Tilek.length + ' элементов')//Tulek[1] - выводит 2 элемент из массива,можно указать другую
    console.log(Tilek)
}
else {
    console.log('Массивы равны')
}

