let circles = document.querySelector("#circles");

function randcolor() {
  let r = Math.round(Math.random() * 225);
  let g = Math.round(Math.random() * 225);
  let b = Math.round(Math.random() * 225);
  return `rgb(${r},${g},${b})`
}

for (let i = 0; i < 6; i++) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.backgroundColor = randcolor()
  circle.textContent = i + 1
  circles.appendChild(circle);
  circle.addEventListener("click",()=> {
    console.log(circle.style.backgroundColor);
    
  })
}
