let celsius = document.querySelector('.input1');
let fahrenheit = document.querySelector('.input2');

function convertCtoF () {
let output = (parseFloat(celsius.value) * 9/5) + 32;
fahrenheit.value = (parseFloat(output))
}

function convertFtoC () {
    let output = (parseFloat(fahrenheit.value) - 32) *5/9;
    celsius.value = (parseFloat(output))
}