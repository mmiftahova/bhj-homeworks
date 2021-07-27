const fieldText = document.querySelector(".tasks__input");
const list = document.querySelector(".tasks__list")
const tasksControl = document.querySelector(".tasks")

fieldText.setAttribute("required", "");


tasksControl.addEventListener("submit", (event) => {
 event.preventDefault();
}) 


fieldText.addEventListener("keyup" , (element) => {
  if(element.code === "Enter" && fieldText.checkValidity() ) {
    const userText = document.getElementById("task__input");
    const user = userText.value;
   list.insertAdjacentHTML("afterbegin", 
  `<div class="task"> 
  <div class="task__title">
  ${user}
  </div>
  <a href="#" class="task__remove">&times;</a>
  </div>`)
  }

  const taskRemove = Array.from(document.querySelectorAll(".task__remove"));
  for(let i = 0; i < taskRemove.length; i++) {
    taskRemove[i].addEventListener("click", () => {
      taskRemove[i].closest(".task").remove();
    })
  }
})



 
  