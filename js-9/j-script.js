
// 1
function FiveName(){
    arr = []
    alert("shemoitanet 5 name");
    for(let i =0;i<5;i++){
        arr.push(prompt(`shemoitanet saxeli ${i+1}`));
    }
    console.log(arr.sort());
    
}
FiveName()

// 2
let ProductArr = [
    {
        saxeli : "coca-cola",
        price : 4.50
    } ,
    {
        saxeli : "puri",
        price : 2.40
    } ,
    {
        saxeli : "rdze",
        price : 5.50
    } ,
    {
        saxeli : "fanta",
        price : 4.50
    } 
];
let NewArr = ProductArr.map(el => el.price * 0.8);
console.log(NewArr);

// 3
let games = [
  {
    name: "The Witcher 3",
    genre: "RPG",
    rating: 9.8
  },
  {
    name: "God of War",
    genre: "Action-Adventure",
    rating: 9.6
  },
  {
    name: "Minecraft",
    genre: "Sandbox",
    rating: 9.3
  },
  {
    name: "Counter-Strike 2",
    genre: "FPS",
    rating: 8.7
  },
  {
    name: "Elden Ring",
    genre: "Action RPG",
    rating: 9.9
  }
];
let MaxVal = games[0].rating
for(let i = 0;i<games.length;i++){
    if(games[i].rating > MaxVal){
        MaxVal = games[i].rating
    }
};
console.log(MaxVal);

// 4
let transactions = [
  {
    id: 1,
    type: "income",
    amount: 2500
  },
  {
    id: 2,
    type: "expense",
    amount: 300
  },
  {
    id: 3,
    type: "income",
    amount: 1200
  },
  {
    id: 4,
    type: "expense",
    amount: 450
  },
  {
    id: 5,
    type: "expense",
    amount: 150
  }
];
let a = transactions.filter(el => el.type == "income").reduce((a,b) => a+b.amount,0);
let b = transactions.filter(elem => elem.type == "expense").reduce((x,y) => x+y.amount,0);
console.log(a); // income 
console.log(b); // expense
console.log(a - b); // balance

