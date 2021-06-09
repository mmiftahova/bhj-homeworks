let sliderCheked = document.querySelectorAll(".slider__arrow");
let sliderList = document.querySelectorAll(".slider__item");
let sliderDot = document.querySelectorAll(".slider__dot");


let arr1 = Array.from(sliderCheked);
let arr2 = Array.from(sliderList);
let arr3 = Array.from(sliderDot);

for (let i = 0; i < arr1.length; i++) {

    arr1[i].onclick = function() {
        if (this.classList.contains("slider__arrow_next")) {
            itemActive();
        } else {
            itemActiveLeft();
        }

    }
}

const itemActive = function() {
    for (let j = 0; j < arr2.length; j++) {

        if (arr2[j].classList.contains("slider__item_active")) {
            arr2[j].classList.remove("slider__item_active")
            arr3[j].classList.remove("slider__dot_active");
            if (j + 1 < arr2.length) {
                arr2[j + 1].classList.add("slider__item_active");
                arr3[j + 1].classList.add("slider__dot_active");
            } else {
                arr2[0].classList.add("slider__item_active");
                arr3[0].classList.add("slider__dot_active");
            }
            return
        }

    }

}


const itemActiveLeft = function() {
    for (let j = arr2.length - 1; j >= 0; j--) {
        if (arr2[j].classList.contains("slider__item_active")) {
            arr2[j].classList.remove("slider__item_active");
            arr3[j].classList.remove("slider__dot_active");
            if (j - 1 >= 0) {
                arr2[j - 1].classList.add("slider__item_active");
                arr3[j - 1].classList.add("slider__dot_active");
            } else {
                arr2[arr2.length - 1].classList.add("slider__item_active");
                arr3[arr2.length - 1].classList.add("slider__dot_active");
            }
            return
        }
    }
}


for (let i = 0; i < arr3.length; i++) {
    arr3[i].onclick = function() {
        for (let j = 0; j < arr3.length; j++) {
            console.log(i)
            if (arr3[j].classList.contains("slider__dot_active")) {
                arr3[j].classList.remove("slider__dot_active");
                arr2[j].classList.remove("slider__item_active")
            }

        }
        this.classList.add("slider__dot_active")
        arr2[i].classList.add("slider__item_active")
    }
}