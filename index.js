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

function setStage() {
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
        
    for(let i = 0; i < 6; i++) {
        const rgbButton = document.createElement('button');
        const color = randomColor();
            
        if(i === randomIndex) {
            rgbButton.setAttribute('id', 'target');
            console.log('rgbButton:', rgbButton);
        }
    
        rgbButton.style.backgroundColor = color;
        rgbButton.value = color;
        rgbButton.classList.add('rgb-button');    
        rgbButton.textContent = 'This is it!';
        
        buttonBox.appendChild(rgbButton);
    
        rgbButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('you clicked', rgbButton.value);
            testMatch(rgbButton);
        });
    }
}

function testMatch(rgbButton) {
    let target = document.getElementById('target');
    console.log('target', target);            
    
    if(rgbButton.id === 'target') {
        let swatches = document.getElementById('button-box');
        
        if(swatches) {
            swatches.removeChild(swatches.childNodes[0]);
            console.log('removed', swatches.childNodes[0]);
        }
        
        console.log('you win');
        buttonBox.textContent = 'You Win!';
    }
    
    //if the clicked value === target swatch value WIN
    //if the clicked value !== target swatch
        //remove swatch
        //replace with rgb of removed swatch
        //try = try++
            //three attempts?

}



setStage();



