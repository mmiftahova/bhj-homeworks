const arrLink = document.querySelectorAll(".menu__link");


let arr1 = Array.from(arrLink);


let listMenu = document.querySelectorAll(".menu__item");

for (let i = 0; i < arr1.length; i++) {
    arr1[i].onclick = function() {
        let activeList = this.closest(".menu__item").querySelector(".menu_sub");
        if (activeList) {
            activeList.classList.toggle("menu_active");
            return false;
        }

    }
}