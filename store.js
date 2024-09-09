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
  constructor(image, name, category, material, price, specs, description) {
    this.image = image;
    this.name = name;
    this.category = category;
    this.material = material;
    this.price = price;
    this.specs = specs;
    this.description = description;
  }
}

// ======================================== //
//           EXISTING PRODUCTS              //
// ======================================== //

const map1 = new ShoppingItem(
  "imgs/shop-items/sumershop1.jpg",
  "Sumer & Akkad",
  "Artistic Map",
  "Fine Art Smooth Cotton Rag 330gsm Matte",
  350,
  "A2 (420 x 594 mm) - 7016 x 4961 pixels 300 dpi - Museum Quality Fine Art",
  "This is the Sumerian & Akkad Map"
);

const map2 = new ShoppingItem(
  "imgs/shop-items/egyptshop1.jpg",
  "Ancient Egypt & Kush Kingdoms",
  "Artistic Map",
  "Fine Art Smooth Cotton Rag 330gsm Matte",
  250,
  "A3 (420 x 297 mm) - 7016 x 4961 pixels 300 dpi - Museum Quality Fine Art",
  "This is the Ancient Egypt and Kush Kingdoms Map"
);

const map3 = new ShoppingItem(
  "imgs/shop-items/hitshop1.jpg",
  "Clash of Worlds: Hittites vs Achaens",
  "Artistic Map",
  "Fine Art Smooth Cotton Rag 330gsm Matte",
  250,
  "A3 (297 x 420 mm) - 4961 x 7016 pixels 300 dpi - Museum Quality Fine Art",
  "This is the Clash of Worlds: Hittites vs Achaens Map"
);

const map4 = new ShoppingItem(
  "imgs/shop-items/assyriashop1.jpg",
  "Assyrian Empire",
  "Artistic Map",
  "Fine Art Smooth Cotton Rag 330gsm Matte",
  350,
  "A2 (420 x 594 mm) - 7016 x 4961 pixels 300 dpi - Museum Quality Fine Art",
  "This is the Assyrian Empire Map"
);

const map5 = new ShoppingItem(
  "imgs/shop-items/nzshop1.jpg",
  "Aotearoa New Zealand",
  "Artistic Map",
  "Fine Art Smooth Cotton Rag 330gsm Matte",
  350,
  "A2 (420 x 594 mm) - 4961 x 7016 pixels 300 dpi - Museum Quality Fine Art",
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
document.addEventListener("DOMContentLoaded", function () {
  // Your code to populate shopItemDisplay
  shoppingItems.forEach((item, index) => {
    // Create a new shop-item element for each item
    const shopItem = document.createElement("div");
    shopItem.classList.add("shop-item");

    // Create divs for image and information
    const shopGallery = document.createElement("div");
    shopGallery.classList.add("shop-gallery");

    const shopInfo = document.createElement("div");
    shopInfo.classList.add("shop-info");

    // Create child elements for each property

    const itemImage = document.createElement("img");
    itemImage.classList.add("item-image");
    itemImage.setAttribute("src", item.image);
    

    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.textContent = `${item.name}`;

    const itemCategory = document.createElement("p");
    itemCategory.classList.add("item-category");
    itemCategory.textContent = `${item.category}`;

    const itemMaterial = document.createElement("p");
    itemMaterial.classList.add("item-material");
    itemMaterial.textContent = `${item.material}`;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `NZD$ ${item.price}`;

    const itemSpecs = document.createElement("p");
    itemSpecs.classList.add("item-specs");
    itemSpecs.textContent = `Specifications: ${item.specs}`;
    itemSpecs.style.display = "none"; // Initially hidden

    const itemDescriptionTitle = document.createElement("h3");
    itemDescriptionTitle.textContent = "Full Description";
    itemDescriptionTitle.classList.add("item-description-header")
    itemDescriptionTitle.style.display ="none";

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = `${item.description}`;   

    itemDescription.style.display = "none";

    // Append child elements to the shopItem
    shopGallery.appendChild(itemImage);
    shopInfo.appendChild(itemName);
    shopInfo.appendChild(itemCategory);
    shopInfo.appendChild(itemMaterial);
    shopInfo.appendChild(itemPrice);   
    shopInfo.appendChild(itemSpecs);
    shopInfo.appendChild(itemDescriptionTitle);
    shopInfo.appendChild(itemDescription);

    // Create buttons
    const viewMoreButton = document.createElement("button");
    viewMoreButton.classList.add("page-button");
    viewMoreButton.textContent = "View More";

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("page-button");
    addToCartButton.textContent = "Add to Cart";

        // Toggle display of detailed information on button click
        viewMoreButton.addEventListener("click", function () {
            if (itemSpecs.style.display === "none") {
              itemSpecs.style.display = "block";
              itemDescription.style.display = "block";
              itemDescriptionTitle.style.display = "block";
              viewMoreButton.textContent = "View Less";
            } else {
              itemSpecs.style.display = "none";
              itemDescription.style.display = "none";
              itemDescriptionTitle.style.display = "none";
              viewMoreButton.textContent = "View More";
            }
          });

    // Append buttons to the shopItem
    shopInfo.appendChild(viewMoreButton);
    shopInfo.appendChild(addToCartButton);

    // Append the shopItem to the shopItemDisplay
    shopItem.appendChild(shopGallery);
    shopItem.appendChild(shopInfo);

    // Append the shopItem to the shopItemDisplay
    shopItemDisplay.appendChild(shopItem);
  });
});
