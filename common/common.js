document.addEventListener('DOMContentLoaded', function () {
    // Charger le contenu du header et du footer avant de configurer le menu burger
    Promise.all([
        fetch('../common/header.html').then(response => {
            if (!response.ok) throw new Error('Failed to load header');
            return response.text();
        }),
        fetch('../common/footer.html').then(response => {
            if (!response.ok) throw new Error('Failed to load footer');
            return response.text();
        })
    ]).then(([headerData, footerData]) => {
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        if (header) header.innerHTML = headerData;
        if (footer) footer.innerHTML = footerData;

        // Configurer le menu burger après que le contenu dynamique soit chargé
        setupBurgerMenu();
    }).catch(error => {
        console.error('Error loading page components:', error);
    });
});

function setupBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.main-nav');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function () {
            nav.classList.toggle('active');
            console.log('Burger menu toggled'); // Pour débogage
        });
    } else {
        console.log('Burger menu or navigation not found');
    }
}
