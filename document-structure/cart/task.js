const productQuantity = Array.from(document.querySelectorAll(".product__quantity-control"))
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products")

for (let i = 0; i < productQuantity.length; i++) {
    productQuantity[i].addEventListener("click",function () {
       if(this.classList.contains("product__quantity-control_inc")) {
           let quantityValue = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");
           quantityValue.innerText = Number(quantityValue.textContent) + 1;
       } else {
        let quantityValue = this.closest(".product__quantity-controls").querySelector(".product__quantity-value");
         if(quantityValue.textContent > 1) {
             quantityValue.innerText = Number(quantityValue.textContent) - 1;
         }
       }       
    })
}


for(let i=0; i < productAdd.length; i++) {
    productAdd[i].addEventListener("click", function () {
        const parent = this.closest(".product");
        let article = parent.getAttribute("data-id");
        let quantity = parent.querySelector(".product__quantity-value").textContent;
        let cartImage = parent.querySelector(".product__image").getAttribute("src");
   
        if(!document.querySelector(".cart__product") || getArticle(article, quantity) ) {
            cartProducts.insertAdjacentHTML("afterbegin", 
            `<div class="cart__product" data-id="${article}">
             <img class="cart__product-image" src="${cartImage}">
             <div class="cart__product-count">${quantity}</div>`)
        }
    })
}

const getArticle = function (id, count) {
     const cartId = Array.from(document.querySelectorAll(".cart__product"));
    for (let i = 0; i < cartId.length; i++) {
        if (cartId[i].dataset.id === id ) {
            let cartCount = cartId[i].querySelector(".cart__product-count");
            cartCount.innerText = Number(cartCount.textContent) + Number(count);
            return false
        }
    }
    return true
}