
let main = document.querySelector("#main")

// https://api.everrest.educata.dev/shop/products/all 
fetch("https://api.everrest.educata.dev/shop/products/all").then(resp => resp.json()).then(data => {
    display(data.products)
})

function display(arr){
    arr.forEach(el => {
        main.innerHTML += `<div class = "cards"> 
        <img src="${el.category.image}" alt="">
        <p> ${el.title} </p>
        <p> ${el.brand} </p>
        <p> ${el.price.current} ${el.price.currency}</p>
        <p> instock: ${el.stock} </p>
        </div>`
    })
}

