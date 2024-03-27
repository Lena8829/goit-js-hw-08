// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`); //кол-во категорий

// Для кажд. катег. выводим заголовок и кол-во элем-в
categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

// let items = document.querySelectorAll("li.item");
// console.log(`categories: ${items.length}`);
// items.forEach((item) => {
//   showCategoryInfo(item);
// });
// function showCategoryInfo(category) {
//   let categoryTitle = category.querySelector("h2").textContent;
//   let categoryElementsCount = category.querySelectorAll("li").length;
//   console.log(`category: ${categoryTitle}`);
//   console.log(`elements: ${categoryElementsCount}`);
//   console.log("------------------------");
// }
