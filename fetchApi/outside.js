const btn = document.getElementById("btn")

const form = document.getElementById("addPost")
btn.addEventListener("click", getPosts)
form.addEventListener("submit", addPost)
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const posts = document.getElementById("posts")
      let output = "<h2 class='mb-4'>Posts</h2>"

      // console.log(data)
      data.forEach((post) => {
        output += `
      <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
      </div>
       `
      })
      posts.innerHTML = output
    })
}
function addPost(e) {
  e.preventDefault()
  let title = document.getElementById("title").value
  let body = document.getElementById("body").value

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
