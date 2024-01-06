const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
const liList = document.createElement('li');
liList.classList.add('item');
liList.textContent = ingredient;
ulList.append(liList);
});
