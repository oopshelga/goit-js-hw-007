// Порахує й виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе 
// в консоль текст заголовка елемента(тегу < h2 >) і кількість елементів у
// категорії(усіх < li >, вкладених у нього).


const categoryElements = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryElements.length}`);

categoryElements.forEach(element => {
    const categoryName = element.querySelector('h2');
    categoryName.textContent;
    const categoryElementsCount = element.querySelectorAll('ul li');
    categoryElementsCount.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});