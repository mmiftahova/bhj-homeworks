let deadId = document.getElementById("dead");
let lostId = document.getElementById("lost");
let holeClass = document.querySelector('.hole');

function getHole(index) {
    return document.getElementById(`hole${index}`);

}

let activeGame = function() {
    if (this.classList.contains('hole_has-mole')) {
        deadId.textContent = Number(deadId.textContent) + 1;
    } else {
        lostId.textContent = Number(lostId.textContent) + 1;
    }
    if (Number(lostId.textContent) === 5) {

        alert("Вы проиграли");
        location.reload();
    } else if (Number(deadId.textContent) === 10) {

        alert("Вы победили");
        location.reload();
    }
}



for (let i = 1; i < 10; i++) {
    this.getHole(i).onclick = activeGame;
}