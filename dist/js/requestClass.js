class RequestClass {
  index(){
    document.querySelector("#sendMail").addEventListener("click", sendMail);
  }

sendMail() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let msg = document.querySelector("#msg").value;
  let validate = this.validateFields(name, email, msg);

  // console.log(`${name} + ${email} :\n ${msg}`);
  // console.log(validate);

  if (validate) {
    axios.post("http://lcds.me/sendMail.php", {
      
        name,
        email,
        msg
    }/* , 
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    } */)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Erro");
      });
  } else {
    alert("Preencha todos os campos!");
  }
}

 validateFields(name, email, msg) {
  let isNameValid =
    name == undefined || name.length == 0 || name == " " ? false : true;
  let isEmailValid =
    email == undefined || email.length == 0 || email == " " ? false : true;
  let isMsgValid =
    msg == undefined || msg.length == 0 || msg == " " ? false : true;

  if (isNameValid && isEmailValid && isMsgValid) {
    return true;
  } else {
    return false;
  }
}

} 

/* axios
  .get("https://api.github.com/users/lcds90/repos")
  .then((req) => {
    // console.log(req.data);
    let ul = document.createElement("ul");
    for (let i = 0; i < req.data.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = req.data[i].name;
      ul.appendChild(li);
    }
    // console.log(ul);
    document.querySelector("#projects").appendChild(ul);
  })
  .catch((err) => {
    console.log(err);
  }); */

