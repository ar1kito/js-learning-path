

// 1
let developers = [
  {
    id: 4,
    name: "Arthur",
    age: 20,
    language: "JavaScript",
    level: "Junior"
  },
  {
    id: 1,
    name: "Luka",
    age: 25,
    language: "Python",
    level: "Middle"
  },
  {
    id: 5,
    name: "Nika",
    age: 22,
    language: "JavaScript",
    level: "Junior"
  },
  {
    id: 3,
    name: "Giorgi",
    age: 28,
    language: "Java",
    level: "Senior"
  },
  {
    id: 2,
    name: "Ana",
    age: 24,
    language: "Python",
    level: "Middle"
  }
];
function ObjFilt(objarr = [],prop = "",text = ""){
    return objarr.filter(el => el[prop].toLowerCase() == text.toLowerCase())
}
console.log(ObjFilt(developers,"language","javascript"));
console.log(ObjFilt(developers,"level","middle"));

// 2
function objNum(objarr,prop){
    return [...objarr].sort((a,b) => a[prop] -b[prop] )
}
console.log(objNum(developers,"id"));
console.log(developers);

// 3

function Ftext(arr,text){
    return arr.splice(arr.indexOf(text),1,text.toUpperCase())
}

let topics = [
  "JavaScript","fundamentals",
  "Object-oriented", "programming",
  "Asynchronous", "code",
  "Data structures and algorithms"
]
console.log(Ftext(topics,"fundamentals"));
console.log(topics);
console.log(Ftext(topics,"code"));
console.log(topics);

