const URL = "https://script.google.com/macros/s/AKfycbzu7KkeOKU4cu6FeFG32pPgKqSI-A06F4nAM24HXkZ3iZ_iOzBMY8a2TxJ2rhU_B446vw/exec";

// ตัวอย่างการ Login
fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    action: "login",
    username: "somchai1234",
    password: "password1"
  })
})
.then(res => res.json())
.then(data => console.log(data));
