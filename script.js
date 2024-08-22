document.addEventListener('DOMContentLoaded', function () {
    function setupPasswordToggle(toggleId, passwordId, eyeIconId) {
        const togglePassword = document.getElementById(toggleId);
        const passwordField = document.getElementById(passwordId);
        const eyeIcon = document.getElementById(eyeIconId);

        if (togglePassword && passwordField && eyeIcon) {
            togglePassword.addEventListener('click', function () {
                const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordField.setAttribute('type', type);

                if (type === 'text') {
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                } else {
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                }
            });
        }
    }

    setupPasswordToggle('toggle-password', 'password', 'eye-icon');
    setupPasswordToggle('signup-toggle-password', 'signup-password', 'signup-eye-icon');
    setupPasswordToggle('confirm-toggle-password', 'confirm-password', 'confirm-eye-icon');
});

function incrementQuantity(id) {
    const qtyInput = document.getElementById(id);
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decrementQuantity(id) {
    const qtyInput = document.getElementById(id);
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

function viewItem(itemName) {
    alert("Viewing details for " + itemName);
}

function deleteItem(element) {
    if (confirm("Are you sure you want to delete this item?")) {
        element.closest('.cart-item').remove();
    }
}

function addMore() {
    alert("Redirecting to the products page to add more items.");
}

function proceedToPayment() {
    alert("Proceeding to the payment page.");
}

function backToHome() {
    window.location.href = "JINI.html"; // Update this with your homepage URL
}

document.addEventListener("DOMContentLoaded", function() {
    const addressForm = document.getElementById('address-form');
    const addressList = document.getElementById('address-list');
    const modal = document.getElementById('modal');
    const addBtn = document.querySelector('.add-btn');
    const closeBtn = document.querySelector('.close-btn');
    const proceedBtn = document.getElementById('proceed-btn');
    let selectedAddressIndex = null;

    // Load saved addresses from localStorage
    loadAddresses();

    addBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    addressForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;

        // Create an address object
        const address = {
            name,
            street,
            city,
            state,
            zip
        };

        // Save the address to localStorage
        saveAddress(address);

        // Reset the form
        addressForm.reset();

        // Close the modal
        modal.style.display = 'none';

        // Display the updated list of addresses
        loadAddresses();
    });

    function saveAddress(address) {
        let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
        addresses.push(address);
        localStorage.setItem('addresses', JSON.stringify(addresses));
    }

    function loadAddresses() {
        addressList.innerHTML = ''; // Clear the list before loading
        const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
        
        addresses.forEach((address, index) => {
            const addressItem = document.createElement('div');
            addressItem.className = 'address-item';

            addressItem.innerHTML = `
                <input type="radio" name="address" id="address-${index}" data-index="${index}">
                <label for="address-${index}">
                    <p><strong>${address.name}</strong></p>
                    <p>${address.street}, ${address.city}, ${address.state} ${address.zip}</p>
                </label>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            // Append the new address item to the list
            addressList.appendChild(addressItem);
        });

        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', function() {
                deleteAddress(button.getAttribute('data-index'));
            });
        });

        // Add event listeners to select address radio buttons
        document.querySelectorAll('input[name="address"]').forEach(radio => {
            radio.addEventListener('change', function() {
                selectedAddressIndex = radio.getAttribute('data-index');
                proceedBtn.disabled = false;
            });
        });
    }

    function deleteAddress(index) {
        let addresses = JSON.parse(localStorage.getItem('addresses')) || [];
        addresses.splice(index, 1);
        localStorage.setItem('addresses', JSON.stringify(addresses));
        loadAddresses();
    }

    proceedBtn.addEventListener('click', function() {
        if (selectedAddressIndex !== null) {
            const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
            const selectedAddress = addresses[selectedAddressIndex];
            alert(`Proceeding with address: ${selectedAddress.name}, ${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zip}`);
            // Redirect to the next page or perform the next action
        }
    });
});
