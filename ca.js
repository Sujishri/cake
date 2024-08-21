


// Select all buttons with the class 'addtocart'
const buttons = document.querySelectorAll(".addtocart");

buttons.forEach(button => {
  // Find the associated 'done' element for the current button
  const done = button.querySelector(".done");

  // Initialize the state for the current button
  let added = false;

  // Add click event listener to each button
  button.addEventListener('click', () => {
    if (added) {
      done.style.transform = "translate(-110%) skew(-40deg)";
      added = false;
    } else {
      done.style.transform = "translate(0px)";
      added = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cartItems = [];
  const cartElement = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  const addToCartButtons = document.querySelectorAll('.addtocart');

  addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
          const productName = this.getAttribute('data-name');
          const productPrice = this.getAttribute('data-price');
          
          const item = {
              name: productName,
              price: productPrice
          };
          
          cartItems.push(item);
          updateCartDisplay();
          
          this.querySelector('.pretext').style.display = 'none';
          this.querySelector('.pretext.done').style.display = 'block';
      });
  });

  function updateCartDisplay() {
      if (cartItems.length === 0) {
          cartElement.innerHTML = '<p class="text-center">Your cart is empty.</p>';
          checkoutBtn.style.display = 'none';
      } else {
          cartElement.innerHTML = '';
          cartItems.forEach((item, index) => {
              const itemElement = document.createElement('div');
              itemElement.className = 'cart-item';
              itemElement.innerHTML = `
                  <p>${item.name} - Rs.${item.price}</p>
                  <button class="btn btn-danger btn-sm" onclick="removeCartItem(${index})">Remove</button>
              `;
              cartElement.appendChild(itemElement);
          });
          checkoutBtn.style.display = 'inline-block';
      }
  }

  window.removeCartItem = function(index) {
      cartItems.splice(index, 1);
      updateCartDisplay();
  };
});
