const imagePanelButton = document.getElementById("image-panel-button");
const textPanelButton = document.getElementById("text-panel-button");
const darkModeButton = document.getElementById("darkmode-button");
const lightModeButton = document.getElementById("lightmode-button");
const imagePanel = document.getElementById("image-panel");
const textPanel = document.getElementById('text-panel');
const styleSheet = document.getElementById('style-sheet');

textPanelButton.addEventListener('click', () => {
    imagePanel.style.display = "none";
    textPanel.style.display = "block";
})

imagePanelButton.addEventListener('click', () => {
    textPanel.style.display = "none";
    imagePanel.style.display = "block";
})

lightModeButton.addEventListener('click', () => {
    lightModeButton.style.display = "none";
    darkModeButton.style.display = "block";
    styleSheet.setAttribute('href', 'lightmode.css');
})

darkModeButton.addEventListener('click', () => {
    darkModeButton.style.display = "none";
    lightModeButton.style.display = "block";
    styleSheet.setAttribute('href', 'darkmode.css');
})

