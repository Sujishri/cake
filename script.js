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
