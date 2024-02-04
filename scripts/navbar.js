document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[type="checkbox"]');
    const navbar = document.querySelector('.navbar');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            navbar.classList.add('navchecked');
        } else {
            navbar.classList.remove('navchecked');
        }
    });
});