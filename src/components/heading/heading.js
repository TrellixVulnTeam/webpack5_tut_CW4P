import "./heading.scss";

function Heading(pageName) {
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");
  h1.innerHTML = `Webpack is awesome. This is ${pageName} page`;
  body.appendChild(h1);
}

export default Heading;
