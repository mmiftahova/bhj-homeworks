
let rotator = document.querySelector(".rotator__case")


const getActive = function () {
    
    if (rotator.classList.contains("rotator__case_active")) {
        rotator.classList.remove("rotator__case_active")
        rotator = rotator.nextElementSibling
        if (rotator === null) {
            rotator = document.querySelector(".rotator__case")
        }
        rotator.classList.add("rotator__case_active")
         
    } 
    
 }
   


setInterval(getActive, 1000)