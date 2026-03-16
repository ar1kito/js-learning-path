let sec1 = document.getElementById("sec1");
fetch(
  "https://api.everrest.educata.dev/shop/products/all?page_size=10&page_index=1",
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    let html = "";
    let btns = "";
    let totalpages = Math.ceil(data.total / 10);

    data.products.forEach((el) => {
      html += ` <div class="product-card">
    <div class="product-image">
      <img src="${el.thumbnail}" alt="${el.title}" referrerpolicy="no-referrer" >
    </div>
    <div class="product-info">
      <p class="product-brand">${el.brand}</p>
      <h3 class="product-name">${el.title}</h3>
      <div class="product-rating">
         ${el.rating}
      </div>
      <div class="product-price">
        ${el.price.current} ${el.price.currency}
      </div>
      <div class="product-stock">
        ${el.stock > 0 ? "In Stock" : "Out of Stock"}
      </div>
    </div>
  </div>
  `;
      sec1.innerHTML = html;
    });
    for (let i = 1; i < totalpages + 1; i++) {
      btns += `<button> ${i} </button>`;
    }
    sec1.innerHTML += btns;
  });
