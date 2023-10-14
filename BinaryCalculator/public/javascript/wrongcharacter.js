// const decimal = document.getElementById('decimal');
// const octal = document.getElementById('octal');
// const hexadecimal = document.getElementById('hexadecimal');
// const binary = document.getElementById('binary');

function validateInput(inputElement) {
    // Girilen değeri alın
    let inputValue = inputElement.value;

    // Girilen değer 0 ve ya 1 mi ?
    if (/^[01]*$/.test(inputValue)) {
        // Geçerli bir giriş, arka plan rengini varsayılan yapın
        inputElement.style.backgroundColor = "#d5a2ff";

    } else {
        // Yalniz 0 ve 1 kalmasi icin
        inputElement.style.animation = ".4s wrong linear";
        inputElement.value = inputValue.replace(/[^01]/g, '');

        setTimeout(function () {
            inputElement.style.animation = "";
        }, 400); // 400ms sonra sil
    }
}
function validateOctalInput(inputElement) {

    let inputValue = inputElement.value;

    if (/^[0-7]*$/.test(inputValue)) {

        inputElement.style.backgroundColor = "#d5a2ff";

    } else {

        inputElement.style.animation = ".4s wrong linear";
        inputElement.value = inputValue.replace(/[^0-7]/g, '');

        setTimeout(function () {
            inputElement.style.animation = "";
        }, 400);
    }
}
function validateDecimalInput(inputElement) {

    let inputValue = inputElement.value;


    if (/^[0-9]*$/.test(inputValue)) {

        inputElement.style.backgroundColor = "#d5a2ff";

    } else {

        inputElement.style.animation = ".4s wrong linear";
        inputElement.value = inputValue.replace(/[^0-7]/g, '');


        setTimeout(function () {
            inputElement.style.animation = "";
        }, 400);
    }
}
function validateHexaDecimalInput(inputElement) {

    let inputValue = inputElement.value;


    if (/^[0-9A-Fa-f]*$/.test(inputValue)) {

        inputElement.style.backgroundColor = "#d5a2ff";

    } else {

        inputElement.style.animation = ".4s wrong linear";
        inputElement.value = inputValue.replace(/[^0-7A-Fa-f]/g, '');


        setTimeout(function () {
            inputElement.style.animation = "";
        }, 400); 
    }
}
