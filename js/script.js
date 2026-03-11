function toggleDrawer(){

let drawer=document.getElementById("drawer");

if(drawer.style.left==="0px"){
drawer.style.left="-250px";
}else{
drawer.style.left="0px";
}
}
async function loadProducts(){

let response = await fetch("data/products.json");

let data = await response.json();

let container = document.getElementById("product-list");

data.phones.forEach(phone => {

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

loadProducts();

document.addEventListener("DOMContentLoaded", function(){

let offers = document.querySelectorAll(".offer-slide");
let offerIndex = 0;

setInterval(function(){

offers[offerIndex].classList.remove("active");

offerIndex = (offerIndex + 1) % offers.length;

offers[offerIndex].classList.add("active");

},3000);

});
