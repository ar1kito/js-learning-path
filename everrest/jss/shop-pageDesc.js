let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let mainImg = document.getElementById("main-image");
let otherImgs = document.getElementById("thumbnails");

fetch(`https://api.everrest.educata.dev/shop/products/id/${id}`)
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
    document.getElementById("stock").textContent =
      p.stock > 0 ? "In Stock" : " Out of Stock";
    document.getElementById("stock").style.color =
      p.stock > 0 ? "green" : "red";
    document.getElementById("warranty").textContent =
      ` ${p.warranty} year warranty`;
    document.getElementById("main-image").src = p.thumbnail;
    document.getElementById("main-image").alt = p.title;
  });
