
// 1
let arr = ["Saba","Lilith","kenny","johny","akaza"]
let arr2 = ["smith","kvaracxelia","jonjoladze","kusdze","kandelaki"]

for(let i = 0; i < arr.length;i++){
    for(let y = 0; y < arr2.length;y++){
        console.log(`${arr[i]} ${arr2[y]}`);
        
    }
}
// 2
let arrRicxv = [3,4,5,6,6,7,8,8,9,9,10,11,123,123]
for(let i = 0; i < arrRicxv.length ;i++ ){
    if( (i + 1) !== arrRicxv.length){
        if(arrRicxv[i] == arrRicxv[i+1]){
            console.log(arrRicxv[i],arrRicxv[i+1]);
        }
    }
}
// 3
let randomi = Math.floor(Math.random()*101 + 100)
let UserRandom = Number(prompt("shemoiyvanet ricxvi 300dan 400mde"))
if(UserRandom === UserRandom && (300 < UserRandom && UserRandom < 400)){
    if(randomi % 3 == 0){
        for(let i = randomi; i < UserRandom; i+=3){
            console.log(i);
        }
    }
    else{
        for(let i = randomi + (3 - randomi%3); i < UserRandom; i+=3){
            console.log(i);
            
        }
    }
}
else{
    alert("araswori inputi");
    
}
