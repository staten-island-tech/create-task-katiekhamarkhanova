import './style.css';

let item = document.querySelector(".item");
let price = document.querySelector(".price");
let wishList = [];
let totalPrice = 0;
let budget; 

function addWishListItem (item, price) {
    let wishItem = {
        item: item,
        price: Number(price)
    };
    wishList.push(wishItem);
    displayItems(wishItem);
    budgetList();
};
function budgetList() {
    budget = Number(document.querySelector(".budget").value);
    totalPrice = 0;
    for (let i = 0; i < wishList.length; i++) {
        totalPrice += wishList[i].price; 
      }
    if (totalPrice > budget) {
        document.querySelector("#container-box").insertAdjacentHTML(
            "beforeend",
            `<h2>Overbudget!</h2>`
        );
    }
    else if (totalPrice === budget) {
        document.querySelector("#container-box").insertAdjacentHTML(
            "beforeend",
            `<h2>You are right on budget! </h2>`
        );
    }
};
function displayItems(wishItem) {
    document.querySelector("#container-box").insertAdjacentHTML(
        "beforeend",
        `<h2>- Item: ${wishItem.item}</h2>
        <h3>Price: $ ${wishItem.price}</h3>`
    );
};
document.querySelector("#itemForm").addEventListener("submit", function (event) {
    event.preventDefault();
    addWishListItem(item.value, price.value);
});

document.querySelector("#budgetForm").addEventListener("submit", function (event) {
    event.preventDefault();
    budgetList();
});

console.log(wishList);