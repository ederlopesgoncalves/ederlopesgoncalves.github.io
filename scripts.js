function delayToShow(elemento, timer) {
  const html = elemento.innerHTML;
  elemento.innerHTML = "";
  setTimeout(() => {
    elemento.innerHTML += html;
  }, timer);
}

function typeWriter(elemento, timer) {
  const textArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  setTimeout(() => {
    textArray.forEach((letra, i) => {
      setTimeout(() => (elemento.innerHTML += letra), 75 * i);
    });
  }, timer);
}

const titulo = document.querySelector("h1");
typeWriter(titulo, 1500);

const subTitulo = document.querySelector("h2");
typeWriter(subTitulo, 2550);

const conectText = document.querySelector(".conecte-text");
typeWriter(conectText, 3375);

const conectLinks = document.querySelector(".social-links");
delayToShow(conectLinks, 5200);

/* Theme/Style Manager */

const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
};

const whiteMode = {
  bg: "#fff",
  bgPanel: "#434343",
  colorHeadings: "#3664FF",
  colorText: "#000",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(whiteMode) : changeColors(initialColors);
});

const currentYear = new Date().getFullYear();
document.getElementById("ano").textContent = currentYear;
