const buttonBox = document.getElementById('button-box');

function randomRGB() {
    return Math.floor(Math.random() * Math.floor(255));
}

function randomColor() {
    let r = randomRGB();
    let g = randomRGB();
    let b = randomRGB();
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

function testMatch() {
    console.log('inside testMatch()');            //need to figure out how to test 
}

//test if guessSwatch has the same value as targetSwatch
    //this means I need to identify one of the swatches with an id of "target"



for(let i = 0; i < 6; i++) {
    const rgbButton = document.createElement('button');
    const color = randomColor();
    
    rgbButton.style.backgroundColor = color;
    rgbButton.value = color;
    rgbButton.classList.add('rgb-button');    
    rgbButton.textContent = 'This is it!';
    
    buttonBox.appendChild(rgbButton);

    rgbButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('you clicked', rgbButton.value);
        testMatch();
    });
}




