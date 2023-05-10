const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: '$10.00'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: '$20.00'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: '$30.00'
    },
    // add more products as needed
  ];
  
  const listBtn = document.getElementById('list-btn');
  const gridBtn = document.getElementById('grid-btn');
  const productsContainer = document.querySelector('.products');
  
  function renderProducts(products, viewType) {
    let html = '';
    
    products.forEach((product) => {
      if (viewType === 'list') {
        html += `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
          </div>
        `;
      } else if (viewType === 'grid') {
        html += `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
          </div>
        `;
      }
    });
    
    productsContainer.innerHTML = html;
  }
  
  function toggleView(viewType) {
    if (viewType === 'list') {
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    } else if (viewType === 'grid') {
      listBtn.classList.remove('active');
      gridBtn.classList.add('active');
    }
    
    renderProducts(products, viewType);
  }
  
  listBtn.addEventListener('click', () => {
    toggleView('list');
  });
  
  gridBtn.addEventListener('click', () => {
    toggleView('grid');
  });
  
  // initialize with list view
  toggleView('list');
  