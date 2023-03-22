const dropdownButton = document.querySelector('.nav-toggle');
const navItemMenu = document.querySelector('.nav-items');

const toggleDropdown = function () {
    navItemMenu.classList.toggle('active');
}

dropdownButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener('click', function () {
    if (navItemMenu.classList.contains('active')) {
        toggleDropdown();
    }
});