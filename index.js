const swatchBox = document.getElementById('swatch-box');

function randomRGB() {
    return Math.floor(Math.random() * Math.floor(255));
    
}

function swatch() {
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    let rgb = r + ',' + g + ',' + b;
    console.log(rgb);
}

swatch();

// lets start by randomly generating an rgb color code
//draw 6 buttons
//each button has a




// for(let i = 0; i < 6; i++) {
//     const swatch = document.createElement('button');


// }
