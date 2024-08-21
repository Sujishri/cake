


// // Select all buttons with the class 'addtocart'
// const buttons = document.querySelectorAll(".addtocart");

// buttons.forEach(button => {
//   // Find the associated 'done' element for the current button
//   const done = button.querySelector(".done");

//   // Initialize the state for the current button
//   let added = false;

//   // Add click event listener to each button
//   button.addEventListener('click', () => {
//     if (added) {
//       done.style.transform = "translate(-110%) skew(-40deg)";
//       added = false;
//     } else {
//       done.style.transform = "translate(0px)";
//       added = true;
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const cartItems = [];
//   const cartElement = document.getElementById('cart-items');
//   const checkoutBtn = document.getElementById('checkout-btn');
  
//   const addToCartButtons = document.querySelectorAll('.addtocart');

//   addToCartButtons.forEach(button => {
//       button.addEventListener('click', function () {
//           const productName = this.getAttribute('data-name');
//           const productPrice = this.getAttribute('data-price');
          
//           const item = {
//               name: productName,
//               price: productPrice
//           };
          
//           cartItems.push(item);
//           updateCartDisplay();
          
//           this.querySelector('.pretext').style.display = 'none';
//           this.querySelector('.pretext.done').style.display = 'block';
//       });
//   });

//   function updateCartDisplay() {
//       if (cartItems.length === 0) {
//           cartElement.innerHTML = '<p class="text-center">Your cart is empty.</p>';
//           checkoutBtn.style.display = 'none';
//       } else {
//           cartElement.innerHTML = '';
//           cartItems.forEach((item, index) => {
//               const itemElement = document.createElement('div');
//               itemElement.className = 'cart-item';
//               itemElement.innerHTML = `
//                   <p>${item.name} - Rs.${item.price}</p>
//                   <button class="btn btn-danger btn-sm" onclick="removeCartItem(${index})">Remove</button>
//               `;
//               cartElement.appendChild(itemElement);
//           });
//           checkoutBtn.style.display = 'inline-block';
//       }
//   }

//   window.removeCartItem = function(index) {
//       cartItems.splice(index, 1);
//       updateCartDisplay();
//   };
// });

// // Function to get the cart from localStorage
// function getCart() {
//   return JSON.parse(localStorage.getItem('cart')) || [];
// }

// // Function to save the cart to localStorage
// function saveCart(cart) {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Function to add item to the cart
// function addToCart(productId, productName, productPrice) {
//   let cart = getCart();
//   let itemIndex = cart.findIndex(item => item.id === productId);

//   if (itemIndex > -1) {
//       cart[itemIndex].quantity += 1;  // Increase quantity if the item is already in the cart
//   } else {
//       cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
//   }

//   saveCart(cart);
//   updateCartButton(productId);  // Update the button to show "ADDED"
// }

// // Function to update the "Add to Cart" button to show "ADDED"
// function updateCartButton(productId) {
//   const button = document.querySelector(`.addtocart[data-product-id="${productId}"]`);
//   if (button) {
//       button.querySelector('.pretext').style.display = 'none';
//       button.querySelector('.pretext.done').style.display = 'block';
//   }
// }

// // Add event listeners to all "Add to Cart" buttons
// document.querySelectorAll('.addtocart').forEach(button => {
//   button.addEventListener('click', function () {
//       const productId = this.getAttribute('data-product-id');
//       const productName = this.getAttribute('data-product-name');
//       const productPrice = this.getAttribute('data-product-price');
//       addToCart(productId, productName, productPrice);
//   });
// });

// // On page load, update the "Add to Cart" buttons if items are already in the cart
// window.onload = function () {
//   getCart().forEach(item => updateCartButton(item.id));
// };

// // Function to get the cart from localStorage
// function getCart() {
//   return JSON.parse(localStorage.getItem('cart')) || [];
// }

// // Function to save the cart to localStorage
// function saveCart(cart) {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Function to add item to the cart
// function addToCart(productId, productName, productPrice, productImage) {
//   let cart = getCart();
//   let itemIndex = cart.findIndex(item => item.id === productId);

//   if (itemIndex > -1) {
//       cart[itemIndex].quantity += 1;  // Increase quantity if the item is already in the cart
//   } else {
//       cart.push({
//           id: productId,
//           name: productName,
//           price: productPrice,
//           image: productImage,
//           quantity: 1
//       });
//   }

//   saveCart(cart);
//   updateCartButton(productId);  // Update the button to show "ADDED"
// }

// // Function to update the "Add to Cart" button to show "ADDED"
// function updateCartButton(productId) {
//   const button = document.querySelector(`.addtocart[data-product-id="${productId}"]`);
//   if (button) {
//       button.querySelector('.pretext').style.display = 'none';
//       button.querySelector('.pretext.done').style.display = 'block';
//   }
// }

// // Add event listeners to all "Add to Cart" buttons
// document.querySelectorAll('.addtocart').forEach(button => {
//   button.addEventListener('click', function () {
//       const productId = this.getAttribute('data-product-id');
//       const productName = this.getAttribute('data-product-name');
//       const productPrice = this.getAttribute('data-product-price');
//       const productImage = this.getAttribute('data-product-image');
//       addToCart(productId, productName, productPrice, productImage);
//   });
// });

// // On page load, update the "Add to Cart" buttons if items are already in the cart
// window.onload = function () {
//   getCart().forEach(item => updateCartButton(item.id));
// };

document.addEventListener('DOMContentLoaded', function () {
  // Retrieve cart items from localStorage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartElement = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  // Function to add item to the cart
  function addToCart(productId, productName, productPrice) {
      let itemIndex = cartItems.findIndex(item => item.id === productId);

      if (itemIndex > -1) {
          // If the item is already in the cart, increase its quantity
          cartItems[itemIndex].quantity += 1;
      } else {
          // If the item is not in the cart, add it
          cartItems.push({
              id: productId,
              name: productName,
              price: productPrice,
              quantity: 1
          });
      }

      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cartItems));
      updateCartDisplay();
  }

  // Function to update the cart display
  function updateCartDisplay() {
      cartElement.innerHTML = ''; // Clear the cart element

      if (cartItems.length === 0) {
          cartElement.innerHTML = '<p class="text-center">Your cart is empty.</p>';
          checkoutBtn.style.display = 'none';
      } else {
          cartItems.forEach((item, index) => {
              const itemElement = document.createElement('div');
              itemElement.className = 'cart-item';
              itemElement.innerHTML = `
                  <p>Product Name : ${item.name} </P><br>
                  <p>Price Rs.${item.price} </P><br>
                  <p>Quantity : ${item.quantity}</p><br>
                  <button class="btn btn-danger btn-sm" onclick="removeCartItem(${index})">Remove</button>
              `;
              cartElement.appendChild(itemElement);
          });
          checkoutBtn.style.display = 'inline-block';
      }
  }

  // Function to remove an item from the cart
  window.removeCartItem = function(index) {
      cartItems.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cartItems)); // Update localStorage
      updateCartDisplay();
  };

  // Add event listeners to all "Add to Cart" buttons
  document.querySelectorAll('.addtocart').forEach(button => {
      button.addEventListener('click', function () {
          const productId = this.getAttribute('data-product-id');
          const productName = this.getAttribute('data-product-name');
          const productPrice = this.getAttribute('data-product-price');
          addToCart(productId, productName, productPrice);
      });
  });

  // On page load, update the cart display
  updateCartDisplay();
});

