let sec1 = document.getElementById("sec1");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let currentpage = 1;
fetch(
  "https://api.everrest.educata.dev/shop/products/all?page_size=10&page_index=1",
)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    let totalpages = Math.ceil(data.total / 10);
    display(data.products);
    displayButtons(data.total);
    activeNonactive(1);
  });

function display(arr) {
  div1.innerHTML = "";
  arr.forEach((el) => {
    let div = document.createElement("div");
    div.innerHTML = ` <div class="product-card">
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
  div.addEventListener("click", () => {
    window.location.href = `./shop-description.html?id=${el._id}`
  })
    div1.appendChild(div);
  });
}

function displayButtons(total) {
  div2.innerHTML = "";
  let totalpages = Math.ceil(total / 10);
  for (let i = 1; i < totalpages + 1; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.dataset.page = i;
    btn.addEventListener("click", () => {
      currentpage = i;
      fetchpage(i);
    });
    div2.appendChild(btn);
  }
}
function fetchpage(index) {
  fetch(
    `https://api.everrest.educata.dev/shop/products/all?page_size=10&page_index=${index}`,
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      display(data.products);
      displayButtons(data.total);
      activeNonactive(currentpage);
    });
}
function activeNonactive(index) {
  let btns = document.querySelectorAll("#div2 button");
  btns.forEach((el) => {
    el.classList.remove("active");
    if (Number(el.dataset.page) == currentpage) {
      el.classList.add("active");
    }
  });
}
