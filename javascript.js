/* Cambio de panel */

const imagePanelButton = document.getElementById("image-panel-button");
const textPanelButton = document.getElementById("text-panel-button");
const imagePanel = document.getElementById("image-panel");
const textPanel = document.getElementById('text-panel');

textPanelButton.addEventListener('click', () => {
    imagePanel.style.display = "none";
    textPanel.style.display = "block";
})

imagePanelButton.addEventListener('click', () => {
    textPanel.style.display = "none";
    imagePanel.style.display = "block";
})

/* Modo oscuro / Modo claro */

const darkModeButton = document.getElementById("darkmode-button");
const lightModeButton = document.getElementById("lightmode-button");
const styleSheet = document.getElementById('style-sheet');

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

/* Panel de texto */

const topText = document.getElementById("top-text");
const topTextInput = document.getElementById("top-text-input");

const topTextFunction = () => {
    topTextInput.addEventListener('input', () => {
        topText.innerText = topTextInput.value;
    })   
}

topTextFunction();

const bottomText = document.getElementById("bottom-text");
const bottomTextInput = document.getElementById("bottom-text-input");

const bottomTextFunction = () => {
    bottomTextInput.addEventListener('input', () => {
        bottomText.innerText = bottomTextInput.value;
    })   
}

bottomTextFunction();

const topTextCheckbox = document.getElementById("no-top-text-checkbox");
const bottomTextCheckbox = document.getElementById("no-bottom-text-checkbox");

const noTopText = () => {
    if (topTextCheckbox.checked === true) {
        topText.style.display = "none";
    } else {
        topText.style.display = "block";
    }
}

const noBottomText = () => {
    if (bottomTextCheckbox.checked === true) {
        bottomText.style.display = "none";
    } else {
        bottomText.style.display = "block";
    }
}

const fontOptions = document.getElementById("font-options");

const selectFont = () => {
    if (fontOptions.value == "arial") {
        topText.style.fontFamily = "Arial";
        bottomText.style.fontFamily = "Arial";
    } else if (fontOptions.value == "arialBlack") {
        topText.style.fontFamily = "Arial Black";
        bottomText.style.fontFamily = "Arial Black";
    } else if (fontOptions.value == "american") {
        topText.style.fontFamily = "American Typewriter";
        bottomText.style.fontFamily = "American Typewriter"; 
    } else if (fontOptions.value == "andale") {
        topText.style.fontFamily = "Andale Mono";
        bottomText.style.fontFamily = "Andale Mono";
    } else if (fontOptions.value == "comicSans") {
        topText.style.fontFamily = "Comic Sans MS";
        bottomText.style.fontFamily = "Comic Sans MS";
    } else if (fontOptions.value == "helvetica") {
        topText.style.fontFamily = "Helvetica";
        bottomText.style.fontFamily = "Helvetica";
    } else if (fontOptions.value == "impact") {
        topText.style.fontFamily = "Impact";
        bottomText.style.fontFamily = "Impact";
    } else if (fontOptions.value == "verdana") {
        topText.style.fontFamily = "Verdana";
        bottomText.style.fontFamily = "Verdana";
    } else if (fontOptions.value == "TNR") {
        topText.style.fontFamily = "Times New Roman";
        bottomText.style.fontFamily = "Times New Roman";
    }
}

selectFont();


