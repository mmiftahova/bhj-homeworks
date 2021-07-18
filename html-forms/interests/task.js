const checkbox = document.querySelectorAll(".interest__check");
let checkboxArray = Array.from(checkbox);
console.log(document.querySelector(".interest").children)

for(let i =0; i< checkboxArray.length; i++) {
    
    checkboxArray[i].addEventListener("change", () => {
    if(checkboxArray[i].checked) {
        
        let listActive = checkboxArray[i].closest(".interest").querySelectorAll(".interest__check");
        let listArray = Array.from(listActive);
        for(let i=0; i< listArray.length; i++) {
            listArray[i].checked= true;
        }
        
        
       
    } else {
        let listRemove = checkboxArray[i].closest(".interest").querySelectorAll(".interest__check");
        let listArrayRemove = Array.from(listRemove);
        for(let i=0; i< listArrayRemove.length; i++) {
            listArrayRemove[i].checked= false;
        }
    }
})
}
