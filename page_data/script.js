const body = document.querySelector("body");

const interfase = document.querySelector(".interfase");
const profase = document.querySelector(".profase");
const metafase = document.querySelector(".metafase");
const anafase = document.querySelector(".anafase");
const telofase = document.querySelector(".telofase");
const citocinesis = document.querySelector(".citocinesis");

document.getElementById("goToInteractive")?.addEventListener("click", () => {
  window.location.href = "page_data/interactive.html";
});

document.addEventListener("click", (e) => {
  if (e.target.tagName === "HTML") {
    body.className = "";
  }
});

interfase.addEventListener("click", () => {
  if (body.className === "" || body.className === "interfase") {
    body.classList.toggle("interfase");
  }
});

profase.addEventListener("click", () => {
  if (body.className === "" || body.className === "profase") {
    body.classList.toggle("profase");
  }
});

metafase.addEventListener("click", () => {
  if (body.className === "" || body.className === "metafase") {
    body.classList.toggle("metafase");
  }
});

anafase.addEventListener("click", () => {
  if (body.className === "" || body.className === "anafase") {
    body.classList.toggle("anafase");
  }
});

telofase.addEventListener("click", () => {
  if (body.className === "" || body.className === "telofase") {
    body.classList.toggle("telofase");
  }
});

citocinesis.addEventListener("click", () => {
  if (body.className === "" || body.className === "citocinesis") {
    body.classList.toggle("citocinesis");
  }
});
