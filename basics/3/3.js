const path = "/users/download/index.html";
let isHtml = link => link.search('\.html$') != -1;
console.log(isHtml(path));