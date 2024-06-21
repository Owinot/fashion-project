// store.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 1.jpg' },
        { id: 2, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 2.jpg' },
         { id: 3, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie3.jpg' },
         { id: 4, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 4.jpg' },
         { id: 5, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 5.jpg' },
         { id: 6, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 6.jpg' },
         { id: 7, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 7.jpg' },
         { id: 8, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 8.jpg' },
         { id: 9, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie 9.jpg' },
         { id: 10, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/hoddie10.jpg' },
         { id: 11, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/s1.jpg' },
         { id: 12, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/s2.jpg' },
         { id: 13, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/s3.jpg' },
         { id: 14, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/s4.jpg' },
         { id: 15, name: 'Hoodie', category: 'Hoodies', price: 29.99, image: 'images/.jpg' },
        { id: 16, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe16.jpg' },
        { id: 17, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/sho7.jpg' },
        { id: 18, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe1.jpg' },
        { id: 19, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe2.jpg' },
        { id: 20, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe3.jpg' },
        { id: 21, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe4.jpg' },
        { id: 22, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe5.jpg' },
        { id: 23, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe15.jpg' },
        { id: 24, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe11.jpg' },
        { id: 25, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe10.jpg' },
        { id: 26, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe12.jpg' },
        { id: 27, name: 'Shoes', category: 'Shoes', price: 49.99, image: 'images/shoe14.jpg' },
        { id: 28, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch1.jpg' },
        { id: 29, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch2.jpg' },
        { id: 30, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch3.jpg' },
        { id: 31, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch4.jpg' },
        { id: 32, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch5.jpg' },
        { id: 33, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch6.jpg' },
        { id: 34, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch7.jpg' },
        { id: 35, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch8.jpg' },
        { id: 36, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch9.jpg' },
        { id: 37, name: 'Watch', category: 'Watches', price: 99.99, image: 'images/watch10.jpg' },
        { id: 38, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt 1.jpg' },
        { id: 39, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweaatshirt7.jpg' },
        { id: 40, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt 3.jpg' },
        { id: 41, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt2.jpg' },
        { id: 42, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt6.jpg' },
        { id: 43, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt8.jpg' },
        { id: 44, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt9.jpg' },
        { id: 45, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt10.jpg' },
        { id: 46, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt 4.jpg' },
        { id: 47, name: 'Sweatshirt', category: 'Sweatshirts', price: 35.99, image: 'images/sweatshirt 5.jpg' },
        { id: 48, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap6.jpg' },
        { id: 49, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap2.jpg' },
        { id: 50, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap4.jpg' },
        { id: 50, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap5.jpg' },
        { id: 51, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap7.jpg' },
        { id: 52, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap8.jpg' },
        { id: 53, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap9.jpg' },
        { id: 54, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cap10.jpg' },
        { id: 55, name: 'Cap', category: 'Caps', price: 15.99, image: 'images/cAp1.jpg' },
        { id: 56, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g1.jpg' },
        { id: 57, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g2.jpg' },
        { id: 58, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g3.jpg' },
        { id: 59, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g4.jpg' },
        { id: 60, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g5.jpg' },
        { id: 61, name: 'Necklace', category: 'Necklaces', price: 19.99, image: 'images/g6.jpg' },
        { id: 62, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g7.jpg' },
        { id: 63, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g8.jpg' },
        { id: 64, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g9.jpg' },
        { id: 65, name: 'Glasses', category: 'Sweatpants', price: 25.99, image: 'images/g10.jpg' },
        { id: 66, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/neckless4.jpg' },
        { id: 67, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j1.jpg' },
        { id: 68, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j2.jpg' },
        { id: 69, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j3.jpg' },
        { id: 70, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j4.jpg' },
        { id: 72, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j5.jpg' },
        { id: 73, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j6.jpg' },
        { id: 74, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j7.jpg' },
        { id: 75, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j8.jpg' },
        { id: 76, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j9.jpg' },
        { id: 77, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/j10.jpg' },
        { id: 78, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/neckless1.jpg' },
        { id: 79, name: 'Jewelry', category: 'Jewelry', price: 39.99, image: 'images/neckless5.jpg' }

    ];

const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    let cart = [];

    function displayProducts(productsToDisplay) {
        productList.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
             <button class="update" onclick="updateProduct(${product.id})">Update</button>
            <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            
        `; 

        
         productList.appendChild(productDiv);


         
       });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        displayCart();
    }

    function displayCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} x ${item.quantity}`;
            cartItems.appendChild(cartItem);
        });
    }

    function filterProducts(category) {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
 
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            const category = event.target.getAttribute('data-category');
            filterProducts(category);
        });
    });
 
    window.addToCart = addToCart; // Expose the addToCart function to the global scope

    // Initially display all products
    displayProducts(products);
     // Update product details
     window.updateProduct = function(productId) {
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            const newName = prompt('Enter new product name:', products[productIndex].name);
            const newCategory = prompt('Enter new product category:', products[productIndex].category);
            const newPrice = parseFloat(prompt('Enter new product price:', products[productIndex].price));
            const newImage = prompt('Enter new product image URL:', products[productIndex].image);
            
            if (newName && newCategory && !isNaN(newPrice) && newImage) {
                products[productIndex].name = newName;
                products[productIndex].category = newCategory;
                products[productIndex].price = newPrice;
                products[productIndex].image = newImage;
                displayProducts(products);
            } else {
                alert('Invalid input. Please try again.');
            }
        }
    };

    // Delete a product
    window.deleteProduct = function(productId) {
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            products.splice(productIndex, 1);
            displayProducts(products);
        }
    };

});
  // Modal functionality
  window.openOrderForm = function() {
    document.getElementById('orderModal').style.display = 'block';
    calculateTotalPrice();
};

window.closeOrderForm = function() {
    document.getElementById('orderModal').style.display = 'none';
};

window.submitOrder = function() {
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;
    const payment = document.getElementById('payment').value;
    const total = document.getElementById('total').value;

    if (address && phone && quantity && payment && total) {
        alert(`Order submitted!\nAddress: ${address}\nPhone: ${phone}\nQuantity: ${quantity}\nPayment Method: ${payment}\nTotal: ${total}`);
        closeOrderForm();
    } else {
        alert('Please fill in all fields.');
    }
};

document.getElementById('quantity').addEventListener('input', calculateTotalPrice);

function calculateTotalPrice() {
    const quantity = document.getElementById('quantity').value;
    const total = cart.reduce((sum, item) => sum + (item.price * quantity), 0);
    document.getElementById('total').value = `$${total.toFixed(2)}`;
}
function submitOrder() {
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const payment = document.getElementById('payment').value;
    const total = document.getElementById('total').value;

  

function openOrderForm() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').value = totalPrice;
    document.getElementById('orderModal').style.display = 'block';
}

function closeOrderForm() {
    document.getElementById('orderModal').style.display = '';
}
// Attach event listeners to the update and delete buttons
document.querySelectorAll('.update-product').forEach(button => {
 button.addEventListener('click', handleUpdateProduct);
});

document.querySelectorAll('.delete-product').forEach(button => {
 button.addEventListener('click', handleDeleteProduct);
});
}


function enterStore() {
    document.querySelector('.landing-page').style.display = 'none';
    document.getElementById('storeContent').style.display = 'block';
}


window.addToCart = addToCart; // Expose the addToCart function to the global scope
window.updateProduct = updateProduct; // Expose the updateProduct function to the global scope
window.deleteProduct = deleteProduct; // Expose the deleteProduct function to the global scope


