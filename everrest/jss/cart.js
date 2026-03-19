let token = localStorage.getItem("token");

fetch("https://api.everrest.educata.dev/shop/cart", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((resp) => resp.json())
  .then((data) => {
    display(data.products[0].productId, data.total.quantity);
    console.log(data);
  });
async function display(id, quantity) {
  let html = "";
  html = await fetch(`https://api.everrest.educata.dev/shop/products/id/${id}`)
    .then((resp) => resp.json())
    .then((p) => {
      document.getElementById("brand").textContent = p.brand;
      document.getElementById("category").textContent = p.category.name;
      document.getElementById("title").textContent = p.title;
      document.getElementById("description").textContent = p.description;
      document.getElementById("current-price").textContent =
        `${p.price.current} ${p.price.currency}`;
      document.getElementById("before-discount").textContent =
        `${p.price.beforeDiscount} ${p.price.currency}`;
      document.getElementById("discount-badge").textContent =
        `-${p.price.discountPercentage}%`;
      document.getElementById("rating-value").textContent = `${p.rating}`;
      document.getElementById("rating-count").textContent =
        `(${p.ratings.length} reviews)`;
      document.getElementById("stock").textContent = `quantity: ${quantity}`;
      document.getElementById("warranty").textContent =
        ` ${p.warranty} year warranty`;
      document.getElementById("main-image").src = p.thumbnail;
      document.getElementById("main-image").alt = p.title;
    });
}
