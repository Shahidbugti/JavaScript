const btn = document.querySelector('.button');
const colorBox = document.querySelector('.color-box');
const body =  document.getElementsByTagName("body");
// Add an event listener to the button
btn.addEventListener('click', () => {
    const boxColor = getRandomColor();
    let bodyColor;
    do {
        bodyColor = getRandomColor();
    } while (bodyColor === boxColor); // Ensure body color is different from box color
    
    colorBox.style.backgroundColor = boxColor;
    document.body.style.backgroundColor = bodyColor; // Change the background color of the body
});



// Define the function to generate a random hex color code
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
