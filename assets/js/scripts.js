var scripts = [
  "js/animationClass.js",
  "js/requestClass.js",
  "js/ready.js",
];

for (let i = 0; i < scripts.length; i++) {
  let s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute(
    "src",
     scripts[i] + "?version=" + Math.floor(Math.random() * 9999999 + 1)
  );
  document.body.appendChild(s);
}
