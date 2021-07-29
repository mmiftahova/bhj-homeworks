const fieldText = document.querySelector(".tasks__input");
const list = document.querySelector(".tasks__list")
const tasksControl = document.querySelector(".tasks")
const tasksAdd = document.querySelector(".tasks__add")

fieldText.setAttribute("required", "");


tasksControl.addEventListener("submit", (event) => {
  event.preventDefault();
})

tasksAdd.addEventListener("click", function () {
  if (fieldText.checkValidity()) {
    addItem();
  }
})

fieldText.addEventListener("keyup", (element) => {
  if (element.code === "Enter" && fieldText.checkValidity()) {
    addItem();
  }
  const taskRemove = Array.from(document.querySelectorAll(".task__remove"));
  for (let i = 0; i < taskRemove.length; i++) {
    taskRemove[i].addEventListener("click", () => {
      taskRemove[i].closest(".task").remove();
    })
  }
})

const addItem = function () {
  const userText = document.getElementById("task__input");
  const user = userText.value;
  list.insertAdjacentHTML("afterbegin",
    `<div class="task"> 
    <div class="task__title">
    ${user}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`)

  userText.value = "";
}
