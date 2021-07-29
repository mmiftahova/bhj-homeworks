const pollTitle = document.querySelector(".poll__title");
const pollAnswers = document.querySelector(".poll__answers")

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
console.log(xhr.responseText)

xhr.addEventListener("readystatechange", function () {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data.data.answers)
        pollTitle.append(data.data.title)
        for (let i = 0; i < data.data.answers.length;i++) {
            pollAnswers.insertAdjacentHTML("afterbegin", 
            `<button class="poll__answer">
            ${data.data.answers[i]}
            </button>`)
        }
        
        const buttonAnswer = Array.from(document.querySelectorAll(".poll__answer"));
        for (let i = 0; i < buttonAnswer.length; i++) {
            buttonAnswer[i].addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!")
            })
        }
    }
})