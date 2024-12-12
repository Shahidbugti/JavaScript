// Select elements
const colors = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const libraryPanel = document.querySelector('.library-panel');
const savePanel = document.querySelector('.save-panel');

// Generate random color
function generateColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Update color boxes
function updateColors() {
    colors.forEach((colorDiv, index) => {
        const hex = generateColor();
        const h2 = colorDiv.querySelector('h2');
        const lockBtn = colorDiv.querySelector('.lock');
        const isLocked = lockBtn.classList.contains('locked');

        if (!isLocked) {
            colorDiv.style.background = hex;
            h2.textContent = hex;
        }
    });
}

// Toggle adjustment sliders
function toggleAdjustment(e) {
    const slider = e.target.closest('.color').querySelector('.sliders');
    slider.classList.toggle('open');
}

// Lock and unlock color
function lockColor(e) {
    const lockIcon = e.target;
    lockIcon.classList.toggle('fas');
    lockIcon.classList.toggle('fa-lock');
    lockIcon.classList.toggle('fa-lock-open');
    lockIcon.closest('.lock').classList.toggle('locked');
}

// Event listeners
generateBtn.addEventListener('click', updateColors);
colors.forEach(color => {
    color.querySelector('.adjust').addEventListener('click', toggleAdjustment);
    color.querySelector('.lock').addEventListener('click', lockColor);
});

// Initial color generation
updateColors();
