document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    fetch('../common/header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });

    fetch('../common/footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
