let cart = [];

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".products button");
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = button.parentNode;
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;
            const productImage = product.querySelector("img").src;

            const cartItem = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            cart.push(cartItem);

            updateCart();
        });
    });

    checkoutButton.addEventListener("click", function() {
        alert("Checkout successful!");
        cart = [];
        updateCart();
    });

    function updateCart() {
        cartList.innerHTML = "";
        let totalPrice =