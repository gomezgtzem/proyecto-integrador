const $list = document.querySelector("#list");
const $total = document.querySelector(".total");

let cartPurchased = JSON.parse(localStorage.getItem("cart"));

let total = JSON.parse(localStorage.getItem("total"));
console.log(total);
$total.innerHTML = `Total $${total}`;

const newPurchasedCart = Object.values(cartPurchased);

(() => {
  newPurchasedCart.map((item) => {
    ({ title, precio, cantidad, total } = item);
    let listItem = document.createElement("li");

    listItem.innerHTML = `<p class='container'> <span  class='col-4'>${cantidad} </span> <span  class='col-4'> ${title}</span> <span  class='col-4'> $${
      cantidad * precio
    } </span></p>
    `;
    let newPrecio = parseInt(precio);
    newPrecio += newPrecio;
    console.log(newPrecio);
    $list.appendChild(listItem);
  });
})();
