let timerId = document.getElementById("timer");

timerId.textContent = "00:00:59"
const count = function() {
    let counter = new Date("1970-01-01T" + timerId.textContent);
    let seconds = counter.getSeconds();

    if (seconds > 0) {
        seconds -= 1;
        counter.setSeconds(seconds);
        timerId.textContent = counter.toTimeString().slice(0, 8)
    } else {
        clearInterval(start);
        alert("Вы победили в конкурсе!");
        location.reload();
    }
}
let start = setInterval(count, 1000)




// const count = function() {
//     if (timerId.textContent > 0) {
//         timerId.textContent -= 1;
//     } else if (timerId.textContent <= 0) {
//         clearInterval(count);
//         alert("Вы победили в конкурсе!");
//         location.reload();
//     }

// }