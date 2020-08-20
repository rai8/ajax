const btn = document.getElementById("btn")

btn.addEventListener("click", getText)

function getText() {
  //console.log("you cllicked me")
  fetch("./sample.txt")
    .then((res) => res.text())
    .then((data) => {
      const output = document.getElementById("output")
      output.innerHTML = data
    })
    .catch((err) => {
      console.log(err)
    })
}
