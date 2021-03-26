const inputTopLeft = document.getElementById('input-top-left');
const inputTopRight = document.getElementById('input-top-right');
const inputBottomLeft = document.getElementById('input-bottom-left');
const inputBottomRight = document.getElementById('input-bottom-right');
const borderBox = document.getElementById('border-box')
const inputs = document.querySelectorAll('input');
const button = document.getElementById('button');
const outputBox = document.getElementById('output');
const box = document.getElementById('inOutput');
let outputTopLeft;
let outputTopRight;
let outputBottomLeft;
let outputBottomRight;


inputTopLeft.addEventListener('input',  () => {
    borderBox.style.borderTopLeftRadius = inputTopLeft.value + 'px';
    
})

inputTopRight.addEventListener('input', () => {
    borderBox.style.borderTopRightRadius = inputTopRight.value + 'px';
    
})


inputBottomLeft.addEventListener('input', () => {
    borderBox.style.borderBottomLeftRadius = inputBottomLeft.value + 'px';
    
})

inputBottomRight.addEventListener('input', () => {
    borderBox.style.borderBottomRightRadius = inputBottomRight.value + 'px';
   
})

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const value = input.value;
        switch(input) {
            case inputTopLeft:
                outputTopLeft = value + 'px';
                output(outputTopLeft, outputTopRight, outputBottomLeft, outputBottomRight);
                button.classList.remove('none')
                box.value = outputBox.innerHTML;
                box.classList.remove('none');
                break;
            case inputBottomLeft:
                outputBottomLeft = value + 'px';
                output(outputTopLeft, outputTopRight, outputBottomLeft, outputBottomRight);
                button.classList.remove('none')
                box.value = outputBox.innerHTML;
                box.classList.remove('none');
                break;
            case inputBottomRight:
                outputBottomRight = value + 'px';
                output(outputTopLeft, outputTopRight, outputBottomLeft, outputBottomRight);
                button.classList.remove('none')
                box.value = outputBox.innerHTML;
                box.classList.remove('none');
                break;
            case inputTopRight:
                outputTopRight = value + 'px';
                output(outputTopLeft, outputTopRight, outputBottomLeft, outputBottomRight);
                button.classList.remove('none')
                box.value = outputBox.innerHTML;
                box.classList.remove('none');
                break;
        }
    })
})


const output = (tl = 0, tr = 0, bl = 0, br = 0) => {
    outputBox.innerHTML =  `border-radius: ${tl} ${tr} ${br} ${bl}`;
}



const copy = () =>  {
    box.select();
    box.setSelectionRange(0, 99999);
    document.execCommand('copy');
    
}

