const buttonBox = document.getElementById('button-box');
const revealBox = document.getElementById('reveal-box');
let guess = 0;

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

function restartOption() {
    let restartButton = '<button id="reset" type="button">Play Again!</button>';
    revealBox.innerHTML = restartButton;
    let reset = document.getElementById('reset');
    reset.addEventListener('click', function() {
        location.reload();
    });
}

function setStage() {
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    
    for(let i = 0; i < 6; i++) {
        const rgbButton = document.createElement('button');
        const color = randomColor();
        
        if(i === randomIndex) {
            let rgbMessage = '<h4 id="rgb-message">Color to match:<h4>' + color;
            revealBox.innerHTML = rgbMessage;
            
            
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
            testMatch(rgbButton);
            
            guess = guess + 1;   
            const countBox = document.getElementById('count');    
            const countMessage = '<h4>Guesses made so far:<h4>';
            countBox.innerHTML = countMessage + guess;     
            if(guess > 2) {
                let failImage = '<img id="fail"src=/assets/fail.png>';
                buttonBox.innerHTML = failImage;
                restartOption();
            }
        });
    }
}

function testMatch(rgbButton) {    
    if(rgbButton.id === 'target') {
        let swatches = document.getElementById('button-box');
        
        if(swatches) {
            let winImage = '<img src=/assets/win.png>';
            buttonBox.innerHTML = winImage;
            restartOption();
        }
    } else {
        rgbButton.classList.add('hidden');
    }
}

setStage();
