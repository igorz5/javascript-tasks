const path = "/users/download/index.html";
const path2 = "/users/download/index.js";

function isHtml(path) {
  return path.endsWith(".html");
}

console.log(isHtml(path)); // true
console.log(isHtml(path2)); // false
