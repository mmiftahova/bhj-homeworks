let modalFirstId = document.getElementById("modal_main");
let modalTwoId = document.getElementById("modal_success")
let clickBtn1 = document.querySelector(".show-success");
let clickBtn2 = document.querySelector(".btn_success");
let modalClose = document.getElementsByClassName("modal__close");


modalFirstId.classList.add("modal_active");

let arr1 = Array.from(modalClose);

for (let i = 0; i < arr1.length; i++) {
    arr1[i].onclick = function() {
        this.closest(".modal").classList.remove("modal_active")
    }
}

clickBtn1.onclick = function() {
    modalTwoId.classList.add("modal_active")
}