const fontSize = document.querySelectorAll(".font-size");
const fontSizeArray = Array.from(fontSize)

const book = document.querySelector("#book");

for (let i = 0; i < fontSizeArray.length; i++) {
    fontSizeArray[i].addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        fontSizeArray[i].classList.add("font-size_active");

        if (fontSizeArray[i].classList.contains("font-size_small")) {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big")
        } else if (fontSizeArray[i].classList.contains("font-size_big")) {
            book.classList.add("book_fs-big");
            book.classList.remove("book_fs-small");
        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big")
        }

    })
}



