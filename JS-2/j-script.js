// 1
// let x = Number(prompt("shemoitvanet ricxvi 100dan 300amde"))
// if (x !== x) {
//   alert("shemoitanet ricxvi!");
// } else if (x >= 100 && x <= 300) {
//   for (let i = x; i <= 300; i++) {
//     if (i % 3 === 0) {
//       console.log(i);
//     }
//   }
// } else {
//   alert("shemoitanet ricxvi range(100,300)!");
// }

// 2
// let x = Number(prompt("shemoitanet x"))
// let y = Number(prompt("shemoitanet y"))
// if (x !== x || y !== y) {
//   alert("mxolod ricxvebi shemoitanet!");
// } else if (y === 0) {
//   alert("y ar sheidzleba iyos 0");
// } else {
//   if (x % y === 0) {
//     console.log("iyofa");
//   } else {
//     console.log("ariyofa");
//   }
// }

// 3
// let input = prompt("shemoitanet ricxvi");

// if (input !== null && input.trim() !== "") {
//   let x = Number(input);

//   if (x === x) {
//     if (x > 0) {
//       console.log("dadebitia");
//     } else if (x < 0) {
//       console.log("uaryofitia");
//     } else {
//       console.log("0-ia");
//     }
//   } else {
//     alert("shemoitane ricxvi");
//   }
// } else {
//   alert("shemoitane ricxvi");
// }

// 4
// for(let i = 2; i <= 100; i += 2){
//     if(i % 6 != 0){
//         console.log(i)
//     }
// }

// 5
// for(let i = -96; i < 100; i += 6){
//     console.log( i ) 
// }

// 6
// for(let i = -98; i < 99; i++){
//     if(i % 4 == 1 || i % 4 == 2 || i % 4 == -1 || i % 4 == -2 ){
//         console.log(i)
//     }
// }

let numberArr = [20, 30,60, 50, 100, 70,90,30,11,33,7,3,7]
let luwi = 0
let kenti = 0
for(let i = 0;i < numberArr.length;i++){
    if (i == 0){
        console.log("udris 0");
    }
    else if (i % 2 == 0){
        liwi++
    }
    else{
        kenti++
    }
}