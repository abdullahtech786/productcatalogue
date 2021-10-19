/** @format */
// Select Element
const filter = document.getElementById("filter");
const nameInput = document.querySelector(".product-name");
const priceInput = document.querySelector(".product-price");
const addProduct = document.querySelector(".add-product");
const productList = document.querySelector(".collection");
const delProduct = document.querySelector(".delete-product");
const msg = document.querySelector(".msg");

// Data /State
const productData = [];
//
function getData(productItems) {
  if (productItems.length > 0) {
    msg.innerHTML = "";
    productItems.forEach((product) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.id = `Product - ${product.id} `;
      li.innerHTML = `<li class="list-group-item">
          <strong>${product.name}- <span class="price">$${product.price}</span></strong>
          <i class="fas fa-trash float-end delete-product"></i>`;
      productList.appendChild(li);
    });
  } else {
    msg.innerHTML = "No item to show";
  }
}
getData(productData);

addProduct.addEventListener("click", function (e) {
  e.preventDefault();
  const name = nameInput.value;
  const price = priceInput.value;
  let id;
  if (productData.length === 0) {
    id = 0;
  } else {
    id = productData[productData.length - 1].id + 1;
  }
  if (
    name === " " ||
    price === "" ||
    !(!isNaN(parseFloat(price)) && isFinite(price))
  ) {
    alert("Please fill up valid information");
  } else {
    productData.push({
      id,
      name,
      price,
    });
    productList.innerHTML = "";
    getData(productData);
    nameInput.value = "";
    priceInput.value = "";
  }
});
