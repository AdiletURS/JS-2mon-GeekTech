// =================1====================

const INNInput = document.querySelector("input");
const INNButton = document.querySelector(".INNButton");
const INNResult = document.querySelector(".INNResult");

const INNRegExp = /^[1|2]\d{13}$/;

INNButton.addEventListener("click", () => {
    if(INNRegExp.test(INNInput.value)){
        INNResult.innerText = "Да";
        INNResult.style.color = "green";
    }else {
        INNResult.innerText = "Нет";
        INNResult.style.color = "red";
    }
});



// =================2====================

const miniBox = document.querySelector('.two')

let miniBoxPos = 0

const moveMiniBox = () => {
    miniBoxPos++
    miniBox.style.left = miniBoxPos+'px'
    if (miniBoxPos <= 100){
        return moveMiniBox()
    }else if (miniBoxPos > 500){
        miniBoxPos = 0
    }else {
        miniBoxPos += 100
    }
    console.log(miniBoxPos);
}
miniBox.addEventListener('click', () => {
    moveMiniBox()
})