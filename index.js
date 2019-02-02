const buttonBox = document.getElementById('button-box');

function randomRGB() {
    return Math.floor(Math.random() * Math.floor(255));
}

function randomColor() {
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    let rgb = r + ',' + g + ',' + b;
    return rgb;
}

for(let i = 0; i < 6; i++) {
    // console.log(randomColor());
    const rgbButton = document.createElement('button');
    rgbButton.value = randomColor();
    rgbButton.textContent = 'This is it!'
    console.log('rgb value', rgbButton.value);
    buttonBox.appendChild(rgbButton);

    //add event Listener
}
//draw 6 buttons
//each button has a




