const inputTopLeft = document.getElementById('input-top-left');
const inputTopRight = document.getElementById('input-top-right');
const inputBottomLeft = document.getElementById('input-bottom-left');
const inputBottomRight = document.getElementById('input-bottom-right');
const borderBox = document.getElementById('border-box')
const output = document.getElementById('output');
const inputs = document.querySelectorAll('input');

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

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {

    })
}
