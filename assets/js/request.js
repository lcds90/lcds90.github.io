axios
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
  });
