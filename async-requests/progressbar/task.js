const progress = document.getElementById( 'progress' );
const send = document.querySelector(".send");
const form = document.querySelector("#form");


form.addEventListener("submit", function (e) {
   e.preventDefault();
    let xhr = new XMLHttpRequest(); 
    let formData = new FormData(form);
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
     
    xhr.upload.onprogress = function (event) {
        
        progress.value = event.loaded / event.total;
       
    }
    xhr.onloadend = function() {
        if (xhr.status == 200) {
          console.log("Успех");
        } else {
          console.log("Ошибка " + this.status);
        }
      };
    
  
      xhr.send(formData);
     
       
})

progress.value = 0.0;



