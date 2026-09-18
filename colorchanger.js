const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const borderWidthSlider = document.getElementById('borderWidthSlider');
const borderWidthNumber = document.getElementById('borderWidthNumber');
const targetParagraph = document.getElementById('targetParagraph');
const colorPreview = document.getElementById('colorPreview');
const widthDisplay = document.getElementById('widthDisplay');

function updateColors() {
    // clamp values 0-255 for rgb
    const r = Math.max(0, Math.min(255, parseInt(redInput.value) || 0));
    const g = Math.max(0, Math.min(255, parseInt(greenInput.value) || 0));
    const b = Math.max(0, Math.min(255, parseInt(blueInput.value) || 0));

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    targetParagraph.style.color = rgbColor;
    targetParagraph.style.borderColor = rgbColor;
    colorPreview.style.backgroundColor = rgbColor;
}

function updateBorderWidth() {
    const width = Math.max(0, Math.min(20, parseInt(borderWidthSlider.value) || 0));
    borderWidthSlider.value = width;
    borderWidthNumber.value = width;
    targetParagraph.style.borderWidth = width + 'px';
    widthDisplay.textContent = width + 'px';
}

// update colors on input change
redInput.addEventListener('input', updateColors);
greenInput.addEventListener('input', updateColors);
blueInput.addEventListener('input', updateColors);
// update border width on input change
borderWidthSlider.addEventListener('input', updateBorderWidth);
borderWidthNumber.addEventListener('input', updateBorderWidth);

// Initialize colors and border width
updateColors();
updateBorderWidth();