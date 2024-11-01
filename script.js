const item5 = document.getElementById('item5');
const item6 = document.querySelector('#item6');

let item5Clicked = false;
let item6Clicked = false;

const toggleColors = (element, clicked) => {
  if (clicked) {
    element.style.backgroundColor = 'blue';
    element.style.color = 'white';
  } else {
    element.style.backgroundColor = 'darkgreen';
    element.style.color = 'yellow';
  }
};

item5.addEventListener('click', () => {
  item5Clicked = !item5Clicked;
  toggleColors(item5, item5Clicked);
});

item6.addEventListener('click', () => {
  item6Clicked = !item6Clicked;
  toggleColors(item6, item6Clicked);
});

const imageContainer = document.getElementById('imageContainer');
const addButton = document.getElementById('addImage');
const increaseButton = document.getElementById('increaseImage');
const decreaseButton = document.getElementById('decreaseImage');
const removeButton = document.getElementById('removeImage');

const addImage = () => {
  const anchor = document.createElement('a');
  anchor.href = 'https://zt-rada.gov.ua/';
  anchor.className = 'img-link';
  anchor.target = '_blank';

  const img = document.createElement('img');
  img.src = './img/zhytomyr.jpg';
  img.alt = 'Фото міста Житомир';
  img.className = 'photo-img';

  anchor.appendChild(img);

  imageContainer.appendChild(anchor);
}

const increaseImage = () => {
  const img = imageContainer.lastElementChild.firstElementChild;
  if (img) {
    const currentWidth = img.offsetWidth;
    img.style.width = (currentWidth + 200) + 'px'; 
  }
}

const decreaseImage = () => {
  const img = imageContainer.lastElementChild.firstElementChild;
  if (img) {
    const currentWidth = img.offsetWidth;
    img.style.width = (currentWidth - 200) + 'px'; 
  }
}

const removeImage = () => {
  const imgLink = imageContainer.lastElementChild;
  if (imgLink) {
    imgLink.remove();
  }
}

addButton.addEventListener('click', () => addImage());

increaseButton.addEventListener('click', () => increaseImage());

decreaseButton.addEventListener('click', () => decreaseImage());

removeButton.addEventListener('click', () => removeImage());
