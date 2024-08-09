const footer_container = document.createElement("div");
footer_container.id = "footer-container";

const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = "<p>© 2024 Owen's Shopping List. All rights reserved.</p>"

document.body.appendChild(footer_container);
footer_container.appendChild(footer);

// ----------------------------------------------- start of event listeners -----------------------------------------------
const itemQuantities = {};
const buttons = document.querySelectorAll(".fruit-button");

buttons.forEach(button => {
    button.addEventListener('click', function() {
    const fruitName = this.id;                  //"this" returns the ID of the clicked button. COOL!
    const price = getFruitPrice(fruitName);         //doesnt work until i made the next function getFruitPrice
    
    if (!itemQuantities[fruitName]) {
        itemQuantities[fruitName] = 0;
    }

    itemQuantities[fruitName] += 1;
    addItemToList(fruitName , price , itemQuantities[fruitName]);
 
});
});

function getFruitPrice(fruitName) {                                         //THIS IS AN OBJECT FUNCTION! COOL!
    const prices = {
        apple: 0.58,
        pear: 0.49,
        banana: 0.47,
        watermelon: 3.26,
        pineapple: 1.26,
        orange: 0.45,
        coconut: 2.27,
        strawberry: 0.15,
        cherry: 0.13
    };
    return prices[fruitName] || 0;
}

//  -------------------------------------------------- FUNCTION TO ADD FRUIT TO THE SHOPPING LIST ITSELF -------------------------------

function addItemToList(fruitName, price, quantity) {
    const listContainer = document.querySelector("#list-container");

    // Find existing item by iterating through list items
    let existingItem = null;
    const items = listContainer.querySelectorAll(".list-item");

    items.forEach(item => {
        if (item.querySelector(".item-name").textContent === fruitName) {
            existingItem = item;
        }
    });

    if (existingItem) {
        // Update the quantity and price of the existing item
        let itemQuantity = existingItem.querySelector(".item-quantity");
        let itemPrice = existingItem.querySelector(".item-price");
        let newQuantity = parseInt(itemQuantity.textContent.slice(1)) + 1;
        itemQuantity.textContent = `x${newQuantity}`;
        itemPrice.textContent = `$${(price * newQuantity).toFixed(2)}`;
    } else {
        // Create a new item if it doesn't exist
        const newItem = document.createElement("div");
        newItem.classList.add("list-item");
        newItem.innerHTML = `
            <span class="item-name">${fruitName}</span>
            <span class="item-quantity">x1</span>
            <span class="item-price">$${price.toFixed(2)}</span>
        `;
        listContainer.appendChild(newItem);
    }
}




