function toggleDrawer(){

let drawer=document.getElementById("drawer");

if(drawer.style.left==="0px"){
drawer.style.left="-250px";
}else{
drawer.style.left="0px";
}
}
/* LOAD PRODUCTS */

async function loadProducts(){

let response = await fetch("data/products.json");

let data = await response.json();

let container = document.getElementById("product-list");

data.phones.forEach(phone => {

container.innerHTML += `
<div class="product-card">

<img src="${phone.image}" alt="${phone.name}">

<h3>${phone.name}</h3>

<p class="price">${phone.price}</p>

<p class="offer">${phone.offer}</p>

</div>
`;

});

}

loadProducts();

/* OFFER SLIDER */

document.addEventListener("DOMContentLoaded", function(){

let track = document.querySelector(".offer-track");
let slides = document.querySelectorAll(".offer-slide");
let index = 0;

setInterval(function(){

index++;

if(index >= slides.length){
index = 0;
}

track.style.transform = "translateX(-" + index * 100 + "%)";

},3000);

});

/* ADMIN PRODUCT SYSTEM */

function addProduct(){

let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let offer = document.getElementById("offer").value;
let image = document.getElementById("image").value;

let products = JSON.parse(localStorage.getItem("phones")) || [];

products.push({name,price,offer,image});

localStorage.setItem("phones", JSON.stringify(products));

alert("Product Added");

showAdminProducts();

}

function showAdminProducts(){

let products = JSON.parse(localStorage.getItem("phones")) || [];

let container = document.getElementById("admin-products");

if(!container) return;

container.innerHTML="";

products.forEach(phone => {

container.innerHTML += `
<div class="product-card">

<img src="${phone.image}">

<h3>${phone.name}</h3>

<p>${phone.price}</p>

<p class="offer">${phone.offer}</p>

</div>
`;

});

}

showAdminProducts();
