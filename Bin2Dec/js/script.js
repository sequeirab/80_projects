const input = document.getElementById('input');
const result = document.getElementById('result');

const conversion = () => {
    let dec = 0
    if(input.value.match(/^[0-1]+$/g) === null) {
        alert('Insert valid binary')
    } else {
        let arr = input.value
        .split('')
        .map(Number)
        .reverse();

    for(let i = 0; i < arr.length; i++) {
        dec = dec + arr[i] * Math.pow(2, i);
        
    }
    
    

    result.innerHTML = dec;

    }

    

    input.value = ''
    dec = 0;


}



