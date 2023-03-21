const dropdownButton = document.querySelector('.nav-toggle');
const navLinksMenu = document.querySelector('.nav-links');

const toggleDropdown = function () {
    navLinksMenu.classList.toggle('show');
}

dropdownButton.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener('click', function () {
    if (navLinksMenu.classList.contains('show')) {
        toggleDropdown();
    }
});