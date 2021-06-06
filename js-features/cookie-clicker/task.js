let clickId = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let totalClick = document.querySelector(".clicker");

const funcImage = function() {
    image.height = 100;
    image.width = 100;
    setInterval(() => {
        image.height = 200;
        image.width = 200;
    }, 1000);
}
const countClicker = function() {
    clickId.textContent = Number(clickId.textContent) + 1;
};


function CountTotal() {
    funcImage();
    countClicker();
    calculateSpeed();
}


totalClick.onclick = CountTotal;

let firstClick = 0;
let twoClick = 0;
let speedId = document.querySelector("#clicker__speed");

const calculateSpeed = function() {

    let seconds = new Date().getTime();

    if (firstClick == 0) {
        firstClick = seconds;
        speedId.textContent = 1;
        console.log(firstClick);

    } else {
        twoClick = seconds;
        let result = Number(clickId.textContent) / ((twoClick - firstClick) / 1000);
        speedId.textContent = result.toFixed(2);
    }

}