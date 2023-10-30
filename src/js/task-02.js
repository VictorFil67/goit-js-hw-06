const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
function createIngredient(ingredient) {
    const item = document.createElement('li');
    item.textContent = `${ingredient}`;
    item.classList.add('item');
  return item;
};

function ingredientsArr(ingredients) {
  return ingredients.map(createIngredient);
}

function renderIngredients(ingredients) {
  const ingredientsList = document.querySelector('#ingredients');
  const ingredientList = ingredientsArr(ingredients);
  ingredientsList.append(...ingredientList);
}

renderIngredients(ingredients);
  
