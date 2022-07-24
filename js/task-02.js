const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
const listItem = ingredients.map((ingredient) => {
  const ingredientElement = document.createElement("li");
  ingredientElement.className = "item";
  ingredientElement.textContent = ingredient;
  return ingredientElement;
});

list.append(...listItem);