let main = document.getElementById("main");

fetch("https://api.everrest.educata.dev/quote")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data, data.quotes);
    display(data.quotes);
  });

function display(arr) {
  arr.forEach((element) => {
    main.innerHTML += `
    <div>
    <p> ${element.author} </p> 
    <p> ${element.quote} </p>
     </div>
    `;
  });
}

fetch("https://api.everrest.educata.dev/auth/sign_up", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "gijime@gmail.com",
    password: "john123123",
    address: "somewhere",
    role: "default",
    zipcode: "0178",
    avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=Jane",
    gender: "MALE",
    phone: "+995599123456",
    verified: false,
  }),
})
  .then((resp) => {
    console.log(resp.status);
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch("https://api.everrest.educata.dev/auth/sign_in", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "gijime@gmail.com",
    password: "john123123",
  }),
});

