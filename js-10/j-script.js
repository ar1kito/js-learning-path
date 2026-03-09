let color = document.querySelector("#color");
let asc = document.querySelector("#asc");
let desc = document.querySelector("#desc");
let clear = document.querySelector("#clr");
let main = document.querySelector("#main");

function randcolor() {
  let r = Math.round(Math.random() * 225);
  let g = Math.round(Math.random() * 225);
  let b = Math.round(Math.random() * 225);
  return `rgb(${r},${g},${b})`;
}

function print(arr) {
  document.body.style.backgroundColor = "";
  main.innerHTML = "";
  for (let el of arr) {
    main.innerHTML += `
        <h2>${el.title}</h2>
        <p>${el.genre}</p>
        <p>${el.rating}</p>
        `;
  }
}

let games = [
  {
    title: "The Witcher 3",
    genre: "RPG",
    rating: 9.2,
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    rating: 9,
  },
  {
    title: "Counter-Strike 2",
    genre: "FPS",
    rating: 8,
  },
  {
    title: "FIFA 24",
    genre: "Sports",
    rating: 8.4,
  },
  {
    title: "Elden Ring",
    genre: "Action RPG",
    rating: 10,
  },
];

print(games);

color.addEventListener("click", () => {
  document.body.style.backgroundColor = randcolor();
});

clear.addEventListener("click", () => {
  document.main = print(games);
});

asc.addEventListener("click", () => {
  let sortedarr = [...games].sort((a, b) => a.rating - b.rating);
  print(sortedarr);
});

desc.addEventListener("click", () => {
  let sortedarr = [...games].sort((a, b) => b.rating - a.rating);
  print(sortedarr);
});
