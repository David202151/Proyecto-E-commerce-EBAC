/*Funcion del menu lateral*/

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener("click", () => {
    const menu = document.querySelector('.menu');
    menu.classList.add('active');
});

/*Funcion para cerrar el menu lateral*/

const closeItenMenu = document.querySelector('.close');
closeItenMenu.addEventListener(("click"), () => {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});

/*Funcion adicional para las opciones del menu*/ 

const opcionesMenu = document.querySelectorAll('.opciones-menu');

opcionesMenu.forEach((opcion) => {
    opcion.addEventListener("mouseenter", () => {
        opcion.classList.add("active-menu");
    });
});
opcionesMenu.forEach((opcion) => {
    opcion.addEventListener("mouseleave", () => {
        opcion.classList.remove("active-menu");
    });
});

/*Funcion para agregar al carrito*/

// Cambia esta parte del JS
const addCartButtons = document.querySelectorAll('.add-cart');
addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest('.products__card');

        const nameProduct = product.querySelector('.products__name').textContent;
        const priceProduct = product.querySelector('.products__price').textContent;
        const imageProduct = product.querySelector('.products__img'); // <-- ahora si la encuentra

        const cart = document.querySelector(".cart");
        const newElementCart = document.createElement("div");
        const newImg = document.createElement("img");
        newImg.setAttribute("src", imageProduct.getAttribute("src"));
        cart.appendChild(newElementCart);
        newElementCart.appendChild(newImg);
        const newName = document.createElement("p");
        newName.innerText = nameProduct;
        const newPrice = document.createElement("p");
        newPrice.innerText = priceProduct;
        newElementCart.appendChild(newName);
        newElementCart.appendChild(newPrice);
        const newDelete = document.createElement("i");
        const newDeleteImg = document.createElement("img");
        newDeleteImg.setAttribute("src", "img/quitar-carrito.png");
        newDeleteImg.setAttribute("class", "delete-icon");
        newElementCart.appendChild(newDelete);
        newDelete.appendChild(newDeleteImg);
    });
});

/*Funcion para mostrar el carrito*/
const cart = document.querySelector(".cart-icon");
cart.addEventListener("click", () => {
    const cart_active = document.querySelector(".cart");
    cart_active.classList.toggle("active");
});

// Funcion adicional para eliminar los elemnetos del carrito dinamicamente 
// Esta parte del codigo esta pendiente al evento (e) y donde sucede (target)
// y si el elemento que se esta clickeando tiene la clase "delete-icon" entonces 
// se elimina el producto del carrito
const cartContainer = document.querySelector(".cart");
cartContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-icon")){
        const item = e.target.parentElement.parentElement;
        item.remove();
    }
});

//Funcionalidad para mostrar el numero de productos en el carrito
const cartCount = document.querySelector(".cart-count");
let count = 0;
addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
    });
});
cartContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-icon")){
        e.target.closest("div").remove();
        count--;
        cartCount.textContent = count;
    }
});