document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    fetch('common/header.html')
        .then(response => response.text())
        .then(data => {
            header.innerHTML = data;
        });

    fetch('common/footer.html')
        .then(response => response.text())
        .then(data => {
            footer.innerHTML = data;
        });
});
