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
