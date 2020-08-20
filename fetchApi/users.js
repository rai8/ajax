const btn = document.getElementById("btn")

btn.addEventListener("click", getUsers)

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>"

      // console.log(data)
      data.forEach((user) => {
        //console.log(user.name, user.email)
        output += `
       <ul class="list-group mb-3">
       <li class="list-group-item"> ID : ${user.id}</li>
       <li class="list-group-item"> Name : ${user.name}</li>
       <li class="list-group-item"> Email : ${user.email}</li>
       </ul>
       `
      })
      btn.innerHTML = output
    })
}
