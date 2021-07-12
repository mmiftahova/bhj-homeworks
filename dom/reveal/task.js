const reveal = document.querySelectorAll(".reveal");

const revealCollection = Array.from(reveal);


document.addEventListener("scroll", function () {
    const viewportHeight = window.innerHeight;
    for (let i = 0; i < revealCollection.length; i++) {
        const elementTop = revealCollection[i].getBoundingClientRect().top;
        if (elementTop < viewportHeight && elementTop >= 0) {
            revealCollection[i].classList.add("reveal_active");
        } else {
            revealCollection[i].classList.remove("reveal_active");
        }
    }
})