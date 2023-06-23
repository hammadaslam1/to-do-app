// document.getElementById('btn').addEventListener('click', (e) => {
//     const parentDiv = e.target.parentNode;
//     parentDiv.style.backgroundColor = 'blue'
//     console.log(parentDiv)
// })

const handleContent = () => {
  const h1 = document.createElement("h1");
  var t = document.createTextNode("Welcome to My Homepage");
  h1.appendChild(t);
  document.getElementById("content").appendChild(h1);
  const h1Listener = document.getElementsByTagName("h1");

  for (const el of Array.from(h1Listener)) {
    console.log(el.target);
    el.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.style.color = 'red'
    });
  }
};
