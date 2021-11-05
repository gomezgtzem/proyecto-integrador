const $list = document.querySelector("#list");
var $total = document.querySelector(".total");

let cartPurchased = JSON.parse(localStorage.getItem("cart"));

var total = JSON.parse(localStorage.getItem("total"));

/* console.log(total); */

const newPurchasedCart = Object.values(cartPurchased);
if (total === null) {
  $total.innerHTML = `No has comprado nada :(`;
} else {
  $total.innerHTML = `Total $${total}`;
}

(() => {
  newPurchasedCart.map((item) => {
    if (!cartPurchased) {
      if (total === undefined) {
      }
    } else if (cartPurchased) {
      ({ title, precio, cantidad, total } = item);
      let listItem = document.createElement("li");

      listItem.innerHTML = `<p class='container'> <span  class='col-4'>${cantidad} </span> <span  class='col-4'> ${title}</span> <span  class='col-4'> $${
        cantidad * precio
      } </span></p>
    `;
      let newPrecio = parseInt(precio);
      newPrecio += newPrecio;
      /*       console.log(newPrecio); */
      $list.appendChild(listItem);
    }
  });
})();
