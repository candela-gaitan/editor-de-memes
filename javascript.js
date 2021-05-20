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

/* PANEL DE TEXTO */

const topText = document.getElementById("top-text");
const topTextInput = document.getElementById("top-text-input");

/* Cambio de texto */

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

/* Sacar texto */

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

/* Cambiar fuente VER HACERLO CON FONT FACE E IMPORTAR FUENTES */

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

/* Cambiar tamaño de fuente */

const textFontSize = document.getElementById("text-font-size");

const changeFontSize = () => {
    textFontSize.addEventListener('input', () => {
        topText.style.fontSize = `${textFontSize.value}px`;
        bottomText.style.fontSize = `${textFontSize.value}px`;
    })

}

changeFontSize();

/* Alineación */

const leftAlign = document.getElementById('left-align-text');
const centeredAlign = document.getElementById('centered-text');
const rightAlign = document.getElementById('right-align-text');
const imageContainer = document.getElementById('image-container');


leftAlign.addEventListener('click', () => {
    topText.style.textAlign = 'left';
    bottomText.style.textAlign = 'left';
})

centeredAlign.addEventListener('click', () => {
    topText.style.textAlign = 'center';
    bottomText.style.textAlign = 'center';
})

rightAlign.addEventListener('click', () => {
    topText.style.textAlign = 'right';
    bottomText.style.textAlign = 'right';
})

/* Cambiar color texto */

const colorInput = document.getElementById('color-input');
const tagColorText = document.getElementById('color-text');

colorInput.addEventListener('input', () => {
    topText.style.color = colorInput.value;
    bottomText.style.color = colorInput.value;
    tagColorText.innerText = colorInput.value;
})

/* Cambiar color de fondo */

const bgColorInput = document.getElementById('bg-color-input');
const tagBgColorText = document.getElementById('bg-color-text');

bgColorInput.addEventListener('input', () => {
    topText.style.backgroundColor = bgColorInput.value;
    bottomText.style.backgroundColor = bgColorInput.value;
    tagBgColorText.innerText = bgColorInput.value;
})

/* Fondo transparente */

const bgTransparentCheckbox = document.getElementById("bg-transparent-checkbox");

const bgTransparent = () => {
    if (bgTransparentCheckbox.checked === true) {
        topText.style.backgroundColor = "transparent";
        bottomText.style.backgroundColor = "transparent";
    } else {
        topText.style.backgroundColor = bgColorInput.value;
        bottomText.style.backgroundColor = bgColorInput.value;
    }
}

/* Contorno */

const noOutline = document.getElementById('no-outline');
const lightOutline = document.getElementById('light-outline');
const darkOutline = document.getElementById('dark-outline');

noOutline.addEventListener('click', () => {
    topText.style.textShadow = "none";
    bottomText.style.textShadow = "none";
})

lightOutline.addEventListener('click', () => {
    topText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px";
    bottomText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px";
})

darkOutline.addEventListener('click', () => {
    topText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px";
    bottomText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px";
})

/* Espaciado VER CENTRADO Y PADDING */

const textPadding = document.getElementById("text-padding");

textPadding.addEventListener('input', () => {
    topText.style.padding = `${textPadding.value}px`;
    bottomText.style.padding = `${textPadding.value}px`;
})

/* Interlineado */

const lineheightInput = document.getElementById("lineheight-input");

const selectLineheight = () => {
    if (lineheightInput.value == "0.8") {
        topText.style.lineHeight = "0.8";
        bottomText.style.lineHeight = "0.8";
    } else if (lineheightInput.value == "1") {
        topText.style.lineHeight = "1";
        bottomText.style.lineHeight = "1";
    } else if (lineheightInput.value == "1.2") {
        topText.style.lineHeight = "1.2";
        bottomText.style.lineHeight = "1.2";
    } else if (lineheightInput.value == "1.5") {
        topText.style.lineHeight = "1.5";
        bottomText.style.lineHeight = "1.5";
    } else if (lineheightInput.value == "2") {
        topText.style.lineHeight = "2";
        bottomText.style.lineHeight = "2";
    } else if (lineheightInput.value == "2.5") {
        topText.style.lineHeight = "2.5";
        bottomText.style.lineHeight = "2.5";
    }
}

selectLineheight();  

/* PANEL DE IMAGEN */

/* Cambio de imagen */

const memeImage = document.getElementById("meme-image");
const urlInput = document.getElementById("url-input");

urlInput.addEventListener('input', () => {
    memeImage.style.backgroundImage = `url(${urlInput.value})`;
})

/* Cambio de fondo */

const bgMemeInput = document.getElementById('bg-meme-input');
const colorMeme = document.getElementById('color-meme');

bgMemeInput.addEventListener('input', () => {
    memeImage.style.backgroundColor = bgMemeInput.value;
    colorMeme.innerText = bgMemeInput.value;
})

/* Background Blend Mode */

const bgBlendModeInput = document.getElementById('bg-blend-mode');

const selectBgBlendMode = () => {
    if (bgBlendModeInput.value == "unset") {
        memeImage.style.backgroundBlendMode = "unset";
    } else if (bgBlendModeInput.value == "lighten") {
        memeImage.style.backgroundBlendMode = "lighten";
    } else if (bgBlendModeInput.value == "darken") {
        memeImage.style.backgroundBlendMode = "darken";
    } else if (bgBlendModeInput.value == "difference") {
        memeImage.style.backgroundBlendMode = "difference";
    } else if (bgBlendModeInput.value == "luminosity") {
        memeImage.style.backgroundBlendMode = "luminosity";
    } else if (bgBlendModeInput.value == "multiply") {
        memeImage.style.backgroundBlendMode = "multiply";
    }
}

selectBgBlendMode(); 

/* Filtros */

const brightnessRange = document.getElementById('brightness-range');
const opacityRange = document.getElementById('opacity-range');
const blurRange = document.getElementById('blur-range');
const contrastRange = document.getElementById('contrast-range');
const grayscaleRange = document.getElementById('grayscale-range');
const hueRotateRange = document.getElementById('hue-rotate-range');
const sepiaRange = document.getElementById('sepia-range');
const saturateRange = document.getElementById('saturate-range');
const invertRange = document.getElementById('invert-range'); 

const changeFilters = () => {
    memeImage.style.filter = `brightness(${brightnessRange.value}) opacity(${opacityRange.value}) contrast(${contrastRange.value}%) blur(${blurRange.value}px) grayscale(${grayscaleRange.value}%) hue-rotate(${hueRotateRange.value}deg) sepia(${sepiaRange.value}%) saturate(${saturateRange.value}%) invert(${invertRange.value})`;
}

brightnessRange.addEventListener('input', changeFilters);
opacityRange.addEventListener('input', changeFilters);
contrastRange.addEventListener('input', changeFilters);
blurRange.addEventListener('input', changeFilters);
grayscaleRange.addEventListener('input', changeFilters);
hueRotateRange.addEventListener('input', changeFilters);
sepiaRange.addEventListener('input', changeFilters);
saturateRange.addEventListener('input', changeFilters);
invertRange.addEventListener('input', changeFilters);

changeFilters();

/* Reestablecer filtros */

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    memeImage.style.filter = "none";
}) 



