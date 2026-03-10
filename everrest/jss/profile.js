let token = localStorage.getItem("token");
let ref_token = localStorage.getItem("refreshToken");
if (isTokenExpired(token)) {
  if (ref_token != null || ref_token != undefined) {
    fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: ref_token }),
    });
  }
  else{
    window.location.href = "./signIn.html"
  }
}

const BASE_URL = "https://api.everrest.educata.dev";

fetch(`${BASE_URL}/auth`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
})
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    console.log(2312);
  });

function isTokenExpired(token) {
  if (token == null) {
    return true;
  } else {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000;
    return Date.now() > expirationTime;
  }
}
