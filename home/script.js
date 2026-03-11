function loadProducts(){

let products = JSON.parse(localStorage.getItem("phones")) || [];

let container = document.getElementById("productContainer");

container.innerHTML = "";

products.forEach(p => {

container.innerHTML += `
<div class="product-card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<p class="offer">${p.offer}</p>

</div>
`;

});

}

loadProducts();
