const $list = document.querySelector("#list");
const fragment2 = document.createDocumentFragment();

let cartPurchased = JSON.parse(localStorage.getItem("cart"));
console.log(cartPurchased);

/* (() => {
  $list.innerHTML = `${cartPurchased[2].cantidad} ${cartPurchased[2].title} Precio: $${cartPurchased[2].precio} `;
})(); */

for (element in cartPurchased) {
  console.log(cartPurchased[element]);
  $list.innerHTML = `${cartPurchased[element].cantidad}`;
}

Object.values(cartPurchased).forEach((product) => {
  $list.innerHTML = `${product.title}`;
});

/* for (let element in cartPurchased) {
  $list.innerHTML = `${cartPurchased[element].title}`;
}
 */

/* const clone = $list.cloneNode(true);
fragment.appendChild(clone); */
