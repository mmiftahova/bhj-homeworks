const widget = document.querySelector(".chat-widget__side");
const textInput = document.querySelector(".chat-widget__input");
const chatWidget = document.querySelector(".chat-widget")
const messages = document.querySelector(".chat-widget__messages");


widget.addEventListener("click", () => {
    document.querySelector(".chat-widget").classList.add("chat-widget_active")
})

textInput.setAttribute("required", "")



const getRobot = function () {
let robotResponse = [
  "Добрый день, мы ещё не проснулись. Позвоните через 10 лет", 
  "Кто тут?",
  "Меня зовут Иван",
  "Где ваша совесть?!",
  "К сожалению, все операторы заняты. Не пишите нам больше.",
  "I do not understand",
  "Мы ничего не будем вам продавать!",
  "Сначала купите, потом пишите!"
  ]
let index = Math.floor(Math.random() * robotResponse.length);

    return robotResponse[index];
}
const getMessageRobot = function () {
if(messages.querySelector(".message_client")) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
    <div class="message__text">
      ${getRobot()}
     </div>
  </div>
`;
  } 
}
textInput.addEventListener("keyup", (el) => {
  
  console.log(textInput.checkValidity())
  if (el.code === "Enter" && textInput.checkValidity()) {
    const userText = document.getElementById("chat-widget__input");
    const user = userText.value;
   messages.innerHTML += `
  <div class="message_client">
  <div class="message__time">${new Date().toTimeString().substr(0, 5)}</div>
    <div class="message__text">
    ${user}
    </div>
  </div>
`;

setTimeout(getMessageRobot, 2000)
 userText.value = "";
  }
  
})



