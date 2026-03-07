// 1
let car = {
  title: "baby",
  price: {
    amount: 23000,
    currency: "$",
  },
  color: ["blue", "black", "red"],
  brand: "Mercedes",
  motor: 3.5,
  year: 2015,
  instock: true,
  printProp(prop) {
    console.log(this.prop.toLowerCase());
  },
  printAll() {
    console.log(
      `${this.brand}, ${this.price.amount}$, ${this.color}, ${this.motor}, ${this.year}, ${this.instock}`,
    );
  },
};

car.printAll();
// 2
function prinTitle(obj) {
  console.log(obj.title);
}
prinTitle(car);
// 3
function NumArr(arr = [], dirt) {
  if (dirt == 1) {
    return arr.sort((a, b) => a - b);
  } else if (dirt == 2) {
    return arr.sort((a, b) => b - a);
  } else {
    console.log("gaugebari direction");
  }
}
let ArrNum = [2, 6, 9, 3, 0, 10, 4, 18, 7, 7];
console.log(NumArr(ArrNum, 1));
