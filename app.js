function changeColor() {
  function random(num) {
    return Math.floor(Math.random() * (num + 1));
  }
  let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return (this.style.backgroundColor = randomColor);
}

const div = document.querySelectorAll("span");

div.forEach(div => {
  div.style.padding = "35px";
  div.style.margin = "5px";
  div.style.border = "2px solid black";
  div.style.display = "block";
  div.addEventListener("click", changeColor);
});
