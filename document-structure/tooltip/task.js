const tooltip = document.querySelectorAll(".has-tooltip");

const tooltipArray = Array.from(tooltip);



for (let i = 0; i < tooltipArray.length; i++) {

    tooltipArray[i].addEventListener("click", function(e) {
        e.preventDefault();
        if (document.querySelector(".tooltip_active")) {
            document.querySelector(".tooltip_active").remove();
        }
        tooltipArray[i].insertAdjacentHTML("afterend", "<div ></div>");
        div = tooltipArray[i].nextElementSibling;
        let position = tooltipArray[i].getBoundingClientRect();
        div.setAttribute("class", "tooltip");
        div.setAttribute("style", `left: ${position.left}px; top: ${position.top + 20}px;`)
        div.append(tooltipArray[i].title);
        div.classList.add("tooltip_active");

    })
}