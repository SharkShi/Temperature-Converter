document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const resultText = document.getElementById('resultText');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;

        switch (unit) {
            case 'celsius':
                convertedTemperature = (temperature * 9/5) + 32;
                break;
            case 'fahrenheit':
                convertedTemperature = (temperature - 32) * 5/9;
                break;
            case 'kelvin':
                convertedTemperature = temperature + 273.15;
                break;
            default:
                convertedTemperature = NaN;
        }

        if (!isNaN(convertedTemperature)) {
            resultText.textContent = `${temperature} ${unit.toUpperCase()} is ${convertedTemperature.toFixed(2)} ${unit === 'celsius' ? '°F' : unit === 'fahrenheit' ? '°C' : 'K'}`;
        } else {
            resultText.textContent = 'Invalid input. Please try again.';
        }
    });
});

