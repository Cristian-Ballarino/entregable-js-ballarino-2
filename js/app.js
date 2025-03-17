const shopContent = document.getElementById("shopContent"); 
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productos = [
    {
        id: 1,
        nombre: "Skate1",
        precio: 98000,
        img: "imagenes/2b951c4f-a80e-44fa-81bc-97783e56c9a2.jpg",
    },
    {
        id: 2,
        nombre: "Skate2",
        precio: 98000,
        img: "imagenes/a8ed8407-a7c6-4893-9f8b-e2d0bff0ac85.jpg",
    },
    {
        
        id: 3,
        nombre: "Skate3",
        precio: 98000,
        img: "imagenes/Flashback 8_ - Complete Skateboard.jpg",
    },
    {
        
        id: 4,
        nombre: "Skate4",
        precio: 98000,
        img: "imagenes/Skate semi profissional e iniciante hypeboards homem aranha até 100kg.jpg",
    },
];

let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
     `;

shopContent.append(content);

let comprar = document.createElement("buttom");
comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar);

comprar.addEventListener("click", () => {
    carrito.push({
        id: product.id,
        img: product.nombre,
        precio: product.precio,
    });
   /* console.log(carrito);*/
});


});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">carrito.</h1>`;
   /* console.log("funciona");*/
   modalContainer.append(modalHeader);

   const modalbuttom = document.createElement("h1");
   modalbuttom.innerText = "x";
   modalbuttom.className = "modal-header-button";

   modalbuttom.addEventListener("click", () => {
    modalContainer.style.display = "none";
   });

   modalHeader.append(modalbuttom);

   carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
`;

modalContainer.append(carritoContent);
   });
  
const total = carrito.reduce((acc, el) => acc + el.precio, 0);

const totalBuying = document.createElement("div");
totalBuying.className = "total.content";
totalBuying.innerHTML = `total a pagar: ${total} $`;
modalContainer.append(totalBuying);


});

//``