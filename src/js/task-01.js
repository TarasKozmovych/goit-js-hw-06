const liQuantity =
    document.querySelectorAll('.item');
console.log(` Number of categories: ${liQuantity.length}`);

liQuantity.forEach((nameTitle) => {
    console.log("Category: ", nameTitle.firstElementChild.textContent);
    console.log(
        "Elements: ",
        nameTitle.querySelectorAll(`.${nameTitle.className} ul li`).length
    );
});