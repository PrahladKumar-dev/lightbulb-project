const bulb = document.getElementById("bulb");
const switchBox = document.getElementById("switch");
const content = document.getElementById("content");

let isOn = false;

switchBox.addEventListener("click", () => {
  isOn = !isOn;

  bulb.classList.toggle("on");

  if (isOn) {
    content.classList.add("show");
  } else {
    content.classList.remove("show");
  }
});