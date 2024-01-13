
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanValue = document.querySelector('.color')

 button.addEventListener ('click', () => {

   spanValue.textContent = getRandomHexColor();
   button.style.backgroundColor = getRandomHexColor();
   document.body.style.backgroundColor = getRandomHexColor();
 }) 
 
