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
