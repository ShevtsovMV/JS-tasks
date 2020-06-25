//=====Создание блоков=====
const number = document.querySelector('#number');
const blocks = document.querySelector('#blocks');

number.addEventListener('change', function () {
  while (blocks.firstChild) {
    blocks.removeChild(blocks.firstChild);
  }
  for (let i = 0; i < number.value; i++) {
    let newItem = document.createElement('li');
    newItem.classList.add('blocks__item');
    newItem.textContent = i + 1;
    blocks.appendChild(newItem);
  }
});

//=====Изменение цвета блоков=====
const color = document.querySelector('#color');
let flag = true;

color.addEventListener('change', function () {
  let colorBlockOdd;
  let colorBlockEven;
  if (flag) {
    colorBlockOdd = color.value;
    colorBlockEven = '#fff';
  } else {
    colorBlockOdd = '#fff';
    colorBlockEven = color.value;
  }
  Array.from(document.querySelectorAll('.blocks__item:nth-child(odd)')).forEach(element => {
    element.style.backgroundColor = colorBlockOdd;
  })
  Array.from(document.querySelectorAll('.blocks__item:nth-child(even)')).forEach(element => {
    element.style.backgroundColor = colorBlockEven;
  })
  console.log(flag);
  flag = !flag;
  console.log(flag);
  console.log(color.value);
});