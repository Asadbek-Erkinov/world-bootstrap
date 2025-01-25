const body = document.body,
  darkModeBtn = document.querySelector("#darkmode-toggle");

darkModeBtn.addEventListener("click", () => {
  if(body.classList == "darkmode") {
    body.classList.remove("darkmode")
  }
  else {
    body.classList.add("darkmode")
  }
})
