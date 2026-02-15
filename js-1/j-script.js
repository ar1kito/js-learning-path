// 1
let x = Number(prompt("how much is temperature?"));
if (x !== x) {
  alert("shemoitanet mxolod ricxvebi");
} else if (x == 0) {
  alert("temperatura udris 0");
} else if (x < 0) {
  alert("gare temperatura minusshia!");
} else {
  alert("gare temperatura plusshia!");
}

// 2
let text = prompt("shemoiyvanet kviris dge");
if (text == "shabati" || text == "kvira") {
  console.log("dasvenebaa");
} else {
  console.log("samushao dgea!!");
}

// 3
let num1 = Number(prompt("shemoitanet pirveli ricxvi"));
let opr = prompt("shemoitanet operatori");
let num2 = Number(prompt("shemoitanet meore ricxvi"));
if (num1 !== num1 || num2 !== num2) {
  alert("shemoitane swori ricxvebi!!");
} else {
  if (opr == "+") {
    console.log(num1 + num2);
  } else if (opr == "-") {
    console.log(num1 - num2);
  } else if (opr == "*") {
    console.log(num1 * num2);
  } else if (opr == "/") {
    console.log(num1 / num2);
  } else if (opr == "%") {
    console.log(num1 % num2);
  } else {
    console.log("shemoitanet swori operatori");
  }
}
