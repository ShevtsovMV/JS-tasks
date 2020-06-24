const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const items = document.querySelector('#items');
items.style.right = 0;

leftArrow.addEventListener('click', function (event) {
  if (parseFloat(items.style.right) > 0) {
    items.style.right = parseFloat(items.style.right) - 100 + 'px';
  }
  event.preventDefault();
});
rightArrow.addEventListener('click', function (event) {
  if (parseFloat(items.style.right) < 500)
    items.style.right = parseFloat(items.style.right) + 100 + 'px';
  event.preventDefault();
});