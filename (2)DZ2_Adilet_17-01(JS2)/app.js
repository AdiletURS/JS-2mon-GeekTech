//1) используя setTimout и рекурсию заставить блок дигаться по определенному шаблону(как было показано на уроке) 

const blockOne = document.querySelector(".one")
const blockTwo =  document.querySelector(".two");


let position = 0;
let positionTop = 0;

blockOne.addEventListener('click',move = () =>  {
    if (position <= 460 && positionTop == 0) {
        position += 20;
        blockTwo.style.left = `${position}px`;
        setTimeout(move, 100);
    }else if (position >= 460 && positionTop <=460){
        positionTop += 20;
        blockTwo.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    }else if (positionTop >= 450 && position != 0) {
        position -= 20;
        blockTwo.style.left = `${position}px`;
        setTimeout(move, 100);
    }else if (position == 0 && positionTop != 0){
        positionTop -= 20;
        blockTwo.style.top = `${positionTop}px`;
        setTimeout(move, 100);
    }
})

// 2) создать Интервал который будет выводить в консоль колтчество секунд, прошедших с момента запуска программы. 


for(let i = 0 ; i < 5000; i++){  // Сделал ограничение "i < 5000", т.к при - "i = 0; ; i++" зависает
    setTimeout((a) =>{
      console.log(`Прошло ${a} сек`)
    },i * 1000, i);
}




