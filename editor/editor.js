// Historique des modifications pour annuler
let history = [];
let historyIndex = -1;

// Enregistrer l'état initial ou après chaque modification
function saveHistory(text) {
    historyIndex++;
    history[historyIndex] = text;
    history = history.slice(0, historyIndex + 1); // Tronquer l'avenir si des modifications ont été annulées puis de nouvelles sont faites
}

// Fonction pour gérer l'annulation des actions
function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        const textarea = document.getElementById('text-input');
        textarea.value = history[historyIndex];
        textarea.focus();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('text-input');
    textarea.addEventListener('input', () => saveHistory(textarea.value)); // Sauvegarder chaque changement
    saveHistory(textarea.value); // Sauvegarder l'état initial

    // Écouter les touches pour gérer l'annulation
    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
            event.preventDefault(); // Empêcher tout autre comportement par défaut de 'ctrl/cmd + z'
            undo();
        }
    });
});

function applyBold() {
    const textarea = document.getElementById('text-input');
    wrapText(textarea, '*', '*');
    saveHistory(textarea.value); // Sauvegarder après la mise en forme
}

function applyItalic() {
    const textarea = document.getElementById('text-input');
    wrapText(textarea, '_', '_');
    saveHistory(textarea.value); // Sauvegarder après la mise en forme
}

function wrapText(textarea, prefix, suffix) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);
    
    textarea.value = before + prefix + selected + suffix + after;
    textarea.selectionStart = start + prefix.length;
    textarea.selectionEnd = end + prefix.length;
    textarea.focus();
}

function copyToClipboard() {
    const textarea = document.getElementById('text-input');
    textarea.select(); // Sélectionner le texte à copier
    document.execCommand('copy'); // Copier le texte sélectionné

    // Alternative moderne avec Clipboard API
    // navigator.clipboard.writeText(textarea.value)
    //     .then(() => alert('Texte copié avec succès!'))
    //     .catch(err => console.error('Erreur lors de la copie :', err));

    alert('Texte copié avec succès!'); // Optionnel: Afficher une confirmation
}

function updateCounters() {
    const textarea = document.getElementById('text-input');
    const text = textarea.value;

    const charCount = text.length;
    const charCountElement = document.getElementById('char-count');
    charCountElement.textContent = charCount;

    // Mettre à jour le style en fonction de la limite de caractères
    if (charCount > 3000) {
        charCountElement.parentNode.classList.add('text-danger');
    } else {
        charCountElement.parentNode.classList.remove('text-danger');
    }

    const wordCount = text.match(/\b\w+\b/g) ? text.match(/\b\w+\b/g).length : 0;
    document.getElementById('word-count').textContent = wordCount;

    const emojiCount = (text.match(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}]/gu) || []).length;
    document.getElementById('emoji-count').textContent = emojiCount;

    const mentionCount = (text.match(/@\w+/g) || []).length;
    document.getElementById('mention-count').textContent = mentionCount;

    const hashtagCount = (text.match(/#\w+/g) || []).length;
    document.getElementById('hashtag-count').textContent = hashtagCount;
}


let currentFontSize = 18; // Taille initiale de la police en pixels

function increaseFontSize() {
    const textarea = document.getElementById('text-input');
    currentFontSize += 2; // Augmenter la taille de la police de 2px
    textarea.style.fontSize = `${currentFontSize}px`;
}

function decreaseFontSize() {
    const textarea = document.getElementById('text-input');
    if (currentFontSize > 10) { // Empêcher la police de devenir trop petite
        currentFontSize -= 2; // Diminuer la taille de la police de 2px
        textarea.style.fontSize = `${currentFontSize}px`;
    }
}

function updateSeeMoreIndicator() {
    const textarea = document.getElementById('text-input');
    const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 10);
    const seeMoreLine = document.getElementById('see-more-line');

    // Positionner après la troisième ligne
    seeMoreLine.style.top = `${3 * lineHeight}px`;
    seeMoreLine.style.width = `${textarea.offsetWidth}px`;
    seeMoreLine.style.display = 'block'; // Afficher la ligne
    seeMoreLine.style.position = 'absolute';
    seeMoreLine.style.borderTop = '1px solid red'; // Style de la ligne
    seeMoreLine.style.pointerEvents = 'none'; // Pour ne pas interférer avec le texte
}
