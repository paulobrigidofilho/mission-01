// ======================================== //
//              STORE JS                    //
// ======================================== //

// ======================================== //
//              NAVIGATION BUTTONS
// ======================================== //

// ===== Page Buttons - HTML Elements ===== //

const addToCart = document.getElementById("addToCart"); // Use getElementById

// ===== Creating a Products Array ===== //

class ShoppingItem {
  constructor(name, resolution, format, price, description) {
    this.name = name;
    this.resolution = resolution;
    this.format = format;
    this.price = price;
    this.description = description;
  }
}

// ======================================== //
//           EXISTING PRODUCTS              //
// ======================================== //

const map1 = new ShoppingItem(
  "Sumer & Akkad Map",
  "7016 x 4961 pixels 300 dpi",
  "A2 (420 x 594 mm)",
  350,
  "This is the Sumerian & Akkad Map"
);

const map2 = new ShoppingItem(
  "Ancient Egypt and Kush Kingdoms Map",
  "7016 x 4961 pixels 300 dpi",
  "A3 (420 x 297 mm)",
  250,
  "This is the Ancient Egypt and Kush Kingdoms Map"
);

const map3 = new ShoppingItem(
  "Clash of Worlds: Hittites vs Achaens Map",
  "4961 x 7016 pixels 300 dpi",
  "A3 (297 x 420 mm)",
  250,
  "This is the Clash of Worlds: Hittites vs Achaens Map"
);

const map4 = new ShoppingItem(
  "Assyrian Empire Map",
  "7016 x 4961 pixels 300 dpi",
  "A2 (420 x 594 mm)",
  350,
  "This is the Assyrian Empire Map"
);

const map5 = new ShoppingItem(
  "Aotearoa New Zealand Map",
  "4961 x 7016 pixels 300 dpi",
  "A2 (420 x 594 mm)",
  350,
  "This is the Aotearoa New Zealand Map"
);

// ======================================== //
//           SHOPPING ITEMS TOTAL           //
// ======================================== //

const shoppingItems = [map1, map2, map3, map4, map5];

console.log(shoppingItems);

// ======================================== //
//           SHOPPING DISPLAY TOTAL           //
// ======================================== //

const shopItemDisplay = document.getElementById("shop-item-display");

// Use DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Your code to populate shopItemDisplay
  shoppingItems.forEach((item, index) => {
    // Create a new shop-item element for each item
    const shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");

    // Create child elements for each property
    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.textContent = `${item.name}`;

    const itemResolution = document.createElement("p");
    itemResolution.classList.add("item-resolution");
    itemResolution.textContent = `Resolution: ${item.resolution}`;

    const itemFormat = document.createElement("p");
    itemFormat.classList.add("item-format");
    itemFormat.textContent = `Format: ${item.format}`;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `NDZ$ ${item.price}`;

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = item.description;   


    // Append child elements to the shopItem
    shopItem.appendChild(itemName);
    shopItem.appendChild(itemResolution);
    shopItem.appendChild(itemFormat);
    shopItem.appendChild(itemPrice);
    shopItem.appendChild(itemDescription);

    // Create buttons
    const viewMoreButton = document.createElement("button");
    viewMoreButton.classList.add("page-button");
    viewMoreButton.textContent = "View More";
   
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("page-button");
    addToCartButton.textContent = "Add to Cart";
   
    // Append buttons to the shopItem
    shopItem.appendChild(viewMoreButton);
    shopItem.appendChild(addToCartButton);
   
    // Append the shopItem to the shopItemDisplay
    shopItemDisplay.appendChild(shopItem);

    // Append the shopItem to the shopItemDisplay
    shopItemDisplay.appendChild(shopItem);
  });
});