const items = document.querySelector("#items")

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
console.log(xhr.responseText)

xhr.addEventListener("readystatechange", function () {
    if (this.readyState == xhr.DONE && this.status == 200) {
        let data = JSON.parse(this.responseText);
        for (key in data.response.Valute) {
        items.insertAdjacentHTML("afterend", 
        `<div class="item__code">
        ${data.response.Valute[key].CharCode}
        </div>
        <div class="item__value">
        ${data.response.Valute[key].Value}
        </div>
        <div class="item__currency">
        руб.
        </div>`)
        
        document.querySelector(".loader").classList.remove("loader_active")
        }        
    }
})