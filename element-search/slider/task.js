let sliderArrow = document.querySelectorAll(".slider__arrow");
let sliderItem = document.querySelectorAll(".slider__item");
let sliderDot = document.querySelectorAll(".slider__dot");

let sliderItemChecked = Array.from(sliderItem);
let sliderDotChecked = Array.from(sliderDot);
let switchList = Array.from(sliderArrow);

let counter = Number(document.querySelector(".slider__item_active").textContent);

const sliderActive = function (x) {
    sliderItemChecked[x].classList.add("slider__item_active");
    sliderDotChecked[x].classList.add("slider__dot_active");
}

const sliderRemove = function (x) {
    sliderItemChecked[x].classList.remove("slider__item_active")
    sliderDotChecked[x].classList.remove("slider__dot_active");
}


const sliderChecked = function (a) {
    sliderRemove(counter);
    sliderActive(a);
    counter = a;
    console.log(a)
}

for (let i = 0; i < sliderDotChecked.length; i++) {
    sliderDotChecked[i].onclick = function () {
        sliderChecked(i);
    }
}
for (let j = 0; j < switchList.length; j++) {
    switchList[j].onclick = function () {
        if (this.classList.contains("slider__arrow_next")) {
            if (counter + 1 >= sliderItemChecked.length) {
                sliderChecked(0)
            } else {
                sliderChecked(counter + 1)
            }
        } else {
             if (counter <= 0) {
                sliderChecked(sliderItemChecked.length - 1)
            } else{
                sliderChecked(counter - 1)
            }
        }
    }
}