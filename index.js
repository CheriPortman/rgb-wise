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

function setStage() {
    const randomIndex = Math.floor(Math.random() * Math.floor(6));
    
    for(let i = 0; i < 6; i++) {
        const rgbButton = document.createElement('button');
        const color = randomColor();
        
        if(i === randomIndex) {
            rgbButton.setAttribute('id', 'target');
            //here make rgb code show up in revealBox
            revealBox.innerHTML = color;

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
            
            console.log('guesses:', guess);
            
            if(guess > 2) {
                let failImage = '<img id="fail"src=/assets/fail.png>';
                buttonBox.innerHTML = failImage;
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
        }

    } else {
        console.log(rgbButton);
        rgbButton.classList.add('hidden');
    }
}

setStage();
