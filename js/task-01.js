// 1.
const categoriesItems = document.querySelectorAll('li.item');
const categoriesAmount = categoriesItems.length;
console.log(`Number of categories: ${categoriesAmount}`);
// 2.
const itemTitle = document.querySelectorAll('li.item>h2');
categoriesItems.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`); 
});
// console.log(itemTitle[1].textContent);