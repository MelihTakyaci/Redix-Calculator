// Binary Calculator
const binaryInput = document.getElementById('binary');
const decimalInput = document.getElementById('decimal');
const octalInput = document.getElementById('octal');
const hexadecimalInput = document.getElementById('hexadecimal');

binaryInput.addEventListener('input', function () {
    const binaryValue = binaryInput.value;
    const decimalValue = parseInt(binaryValue, 2);
    const octalValue = parseInt(binaryValue, 2).toString(8);
    const hexadecimalValue = parseInt(binaryValue , 2).toString(16)
    decimalInput.value = isNaN(decimalValue) ? '' : decimalValue;
    octalInput.value = isNaN(octalValue) ? '' : octalValue;
    hexadecimalInput.value =hexadecimalValue;
    if(hexadecimalInput.value == "NaN"){
        hexadecimalInput.value = ''
    }
});

// Decimal Calculator
decimalInput.addEventListener('input', function () {
    const decimalValue = decimalInput.value;
    if (!isNaN(decimalValue)) {
        binaryInput.value = (decimalValue >>> 0).toString(2);
        const octalValue = parseInt(binaryInput.value , 2).toString(8)
        const hexadecimalValue = parseInt(binaryInput.value , 2).toString(16)
        octalInput.value = isNaN(octalValue) ?  '' : octalValue;
        hexadecimalInput.value = hexadecimalValue;

      }
    if (decimalValue == null || decimalValue == '' ){
        octalInput.value = '';
        binaryInput.value = '';
        hexadecimalInput.value = '';
    }
});

//Octal Calculator
octalInput.addEventListener('input', function () {
    const octalValue = octalInput.value;
    if(!isNaN(octalValue)) {
        const decimalValue = parseInt(octalValue , 8);
        const binaryValue = (decimalValue >>> 0).toString(2)
        const hexadecimalValue = parseInt(octalValue , 8).toString(16);
        hexadecimalInput.value = hexadecimalValue
        binaryInput.value = binaryValue
        decimalInput.value = decimalValue;
    }
    if(octalValue == null || octalValue == '') {
        binaryInput.value = '';
        decimalInput.value = '';
        hexadecimalInput.value ='';
    }
});

//HexaDecimal Calculator
hexadecimalInput.addEventListener('input' , function () {
    const hexadecimalValue = hexadecimalInput.value;
    const decimalValue = parseInt(hexadecimalValue , 16);
    const binaryValue = parseInt(hexadecimalValue , 16).toString(2);
    const octalValue = parseInt(hexadecimalValue , 16).toString(8);
    decimalInput.value = decimalValue
    binaryInput.value = binaryValue
    octalInput.value = octalValue
    if(hexadecimalValue == null || hexadecimalValue == ''){
        decimalInput.value = '';
        binaryInput.value = '';
        octalInput.value = '';
    }
})