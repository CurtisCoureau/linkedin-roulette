async function loadJsonData(file) {
    const response = await fetch(file);
    return response.json();
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatContent(text) {
    return text.replace(/\n/g, '<br>'); // Convertit les sauts de ligne en balises <br>
}

async function animateAndDisplayResult(elementId, file) {
    const data = await loadJsonData(file);
    const outputElement = document.getElementById(elementId);
    const isAnimationEnabled = document.getElementById('toggleAnimation').checked;

    if (isAnimationEnabled) {
        outputElement.innerHTML = ''; // Efface le contenu précédent

        const tempContainer = document.createElement('div');
        tempContainer.className = 'scrollingText';
        data.forEach(item => {
            const p = document.createElement('p');
            p.innerHTML = formatContent(item); // Utilise innerHTML et la fonction formatContent
            tempContainer.appendChild(p);
        });
        outputElement.appendChild(tempContainer);

        setTimeout(() => {
            tempContainer.style.animation = 'scrollSlow 2s ease-out forwards';
        }, 2000); // Ralentissement après 2 secondes

        setTimeout(() => {
            tempContainer.style.animation = 'none'; // Arrête l'animation
            const finalText = formatContent(getRandomElement(data));
            outputElement.innerHTML = '<p>' + finalText + '</p>'; // Affiche le résultat final avec formatage
            outputElement.style.height = 'auto'; // Ajuste la hauteur au contenu
        }, 2000); // Arrêt total après 2 secondes
        
    } else {
        const finalText = formatContent(getRandomElement(data));
        outputElement.innerHTML = '<p>' + finalText + '</p>'; // Affiche le résultat final sans animation
    }
}

function generateAll() {
    animateAndDisplayResult('ideaOutput', '../assets/data/ideas.json');
    animateAndDisplayResult('hookOutput', '../assets/data/hooks.json');
    animateAndDisplayResult('frameworkOutput', '../assets/data/frameworks.json');
    animateAndDisplayResult('randomAdviceOutput', '../assets/data/randomAdvice.json');
}

function generateIdea() {
    animateAndDisplayResult('ideaOutput', '../assets/data/ideas.json');
}

function generateHook() {
    animateAndDisplayResult('hookOutput', '../assets/data/hooks.json');
}

function generateFramework() {
    animateAndDisplayResult('frameworkOutput', '../assets/data/frameworks.json');
}

function generateRandomAdvice() {
    animateAndDisplayResult('randomAdviceOutput', '../assets/data/randomAdvice.json');
}
