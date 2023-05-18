const data = {
    "products": [
      {
        "name": "Product 1",
        "price": 10.99,
        "description": "This is the description of Product 1",
        "image": "path/to/image1.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ElliotRodgerDriverLicense.jpg/220px-ElliotRodgerDriverLicense.jpg"
      },
      {
        "name": "Product 2",
        "price": 19.99,
        "description": "This is the description of Product 2",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ElliotRodgerDriverLicense.jpg/220px-ElliotRodgerDriverLicense.jpg",
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/ElliotRodgerDriverLicense.jpg/220px-ElliotRodgerDriverLicense.jpg"
      },
      // Add more product objects with image and URL
    ],
    "categories": [
      {
        "name": "Men",
        "subcategories": [
          "Belts",
          "Shoes"
        ]
      },
      {
        "name": "Women",
        "subcategories": [
          "Dresses",
          "Bags"
        ]
      },
      {
        "name": "Kids",
        "subcategories": [
          "Toys",
          "Clothing"
        ]
      }
    ]
  };
  
  const subcategoriesElement = document.getElementById("subcategories");
  const mainNavLinks = document.querySelectorAll(".nav-link");
  
  // Event listener for main navigation links
  mainNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      const selectedCategory = link.dataset.category;
      renderSubcategories(selectedCategory);
      filterProducts(selectedCategory);
    });
  });
  
  // Function to render subcategories based on selected category
  function renderSubcategories(category) {
    const categoryData = data.categories.find(c => c.name === category);
    if (categoryData) {
      subcategoriesElement.innerHTML = "";
      categoryData.subcategories.forEach(subcategory => {
        const subcategoryItem = document.createElement("li");
        subcategoryItem.textContent = subcategory;
        subcategoriesElement.appendChild(subcategoryItem);
      });
    }
  }
  
  // Function to filter products based on selected category
  function filterProducts(category) {
    const filteredProducts = data.products.filter(product => {
      // Add your filtering logic here based on the selected category and subcategories
      return true; // Placeholder condition, modify as needed
    });
  
    renderProductCards(filteredProducts);
  }
  
  // Function to render product cards
  function renderProductCards(products) {
    const productCardsElement = document.getElementById("product-cards");
    productCardsElement.innerHTML = "";
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
      card.appendChild(productName);
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
      card.appendChild(productPrice);
  
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      card.appendChild(productDescription);
  
      productCardsElement.appendChild(card);
    });
  }
  