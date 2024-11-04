document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.submenu').classList.toggle('show');
});

let display = document.getElementById('display');
let currentOperation = '';
let currentValue = '';

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    currentOperation = operation;
    currentValue = display.value;
    display.value = '';
}

function calculate() {
    if (currentOperation && currentValue) {
        let result;
        switch (currentOperation) {
            case '+':
                result = parseFloat(currentValue) + parseFloat(display.value);
                break;
            case '-':
                result = parseFloat(currentValue) - parseFloat(display.value);
                break;
            case '*':
                result = parseFloat(currentValue) * parseFloat(display.value);
                break;
            case '/':
                result = parseFloat(currentValue) / parseFloat(display.value);
                break;
        }
        display.value = result;
        currentOperation = '';
        currentValue = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    currentValue = '';
}

// Scientific Mode Functions
document.getElementById('scientific').addEventListener('click', () => {
    let scientificMenu = prompt("Choose a scientific function:\n1. Square Root\n2. Exponentiation\n3. Sine\n4. Cosine\n5. Tangent");
    let value = parseFloat(display.value);

    switch (scientificMenu) {
        case '1':
            display.value = Math.sqrt(value);
            break;
        case '2':
            let exponent = prompt("Enter the exponent:");
            display.value = Math.pow(value, exponent);
            break;
        case '3':
            display.value = Math.sin(value * Math.PI / 180); // converting to radians
            break;
        case '4':
            display.value = Math.cos(value * Math.PI / 180); // converting to radians
            break;
        case '5':
            display.value = Math.tan(value * Math.PI / 180); // converting to radians
            break;
        default:
            alert("Invalid option selected.");
    }
});

// Unit Conversion Functions
document.getElementById('unit-conversion').addEventListener('click', () => {
    let unitMenu = prompt("Choose a unit conversion:\n1. Length\n2. Weight\n3. Temperature");

    switch (unitMenu) {
        case '1':
            convertLength();
            break;
        case '2':
            convertWeight();
            break;
        case '3':
            convertTemperature();
            break;
        default:
            alert("Invalid option selected.");
    }
});

function convertLength() {
    let value = parseFloat(prompt("Enter the length to convert:"));
    let conversionType = prompt("Choose a conversion:\n1. Meters to Kilometers\n2. Kilometers to Meters\n3. Feet to Meters\n4. Meters to Feet");

    switch (conversionType) {
        case '1':
            display.value = value / 1000 + " km";
            break;
        case '2':
            display.value = value * 1000 + " m";
            break;
        case '3':
            display.value = value * 0.3048 + " m";
            break;
        case '4':
            display.value = value / 0.3048 + " ft";
            break;
        default:
            alert("Invalid option selected.");
    }
}

function convertWeight() {
    let value = parseFloat(prompt("Enter the weight to convert:"));
    let conversionType = prompt("Choose a conversion:\n1. Grams to Kilograms\n2. Kilograms to Grams\n3. Pounds to Kilograms\n4. Kilograms to Pounds");

    switch (conversionType) {
        case '1':
            display.value = value / 1000 + " kg";
            break;
        case '2':
            display.value = value * 1000 + " g";
            break;
        case '3':
            display.value = value * 0.453592 + " kg";
            break;
        case '4':
            display.value = value / 0.453592 + " lbs";
            break;
        default:
            alert("Invalid option selected.");
    }
}

function convertTemperature() {
    let value = parseFloat(prompt("Enter the temperature to convert:"));
    let conversionType = prompt("Choose a conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\n3. Celsius to Kelvin\n4. Kelvin to Celsius");

    switch (conversionType) {
        case '1':
            display.value = (value * 9/5) + 32 + " °F";
            break;
        case '2':
            display.value = (value - 32) * 5/9 + " °C";
            break;
        case '3':
            display.value = value + 273.15 + " K";
            break;
        case '4':
            display.value = value - 273.15 + " °C";
            break;
        default:
            alert("Invalid option selected.");
    }
}
