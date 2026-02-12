// Temperature Converter
(function() {
    'use strict';

    // DOM Elements
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');
    const clearBtn = document.getElementById('clear-btn');

    // Conversion formulas
    const conversions = {
        celsiusToFahrenheit: (c) => (c * 9/5) + 32,
        celsiusToKelvin: (c) => c + 273.15,
        
        fahrenheitToCelsius: (f) => (f - 32) * 5/9,
        fahrenheitToKelvin: (f) => (f - 32) * 5/9 + 273.15,
        
        kelvinToCelsius: (k) => k - 273.15,
        kelvinToFahrenheit: (k) => (k - 273.15) * 9/5 + 32
    };

    // Round to reasonable precision
    function roundValue(value) {
        if (Math.abs(value) >= 1000) {
            return Math.round(value);
        } else if (Math.abs(value) >= 100) {
            return Math.round(value * 10) / 10;
        } else {
            return Math.round(value * 100) / 100;
        }
    }

    // Format value for display
    function formatValue(value) {
        if (value === null || value === undefined || isNaN(value)) {
            return '';
        }
        return roundValue(value).toString();
    }

    // Update all inputs based on source
    function updateConversions(source) {
        let celsius, fahrenheit, kelvin;

        switch (source) {
            case 'celsius':
                celsius = parseFloat(celsiusInput.value);
                if (!isNaN(celsius)) {
                    fahrenheit = conversions.celsiusToFahrenheit(celsius);
                    kelvin = conversions.celsiusToKelvin(celsius);
                    fahrenheitInput.value = formatValue(fahrenheit);
                    kelvinInput.value = formatValue(kelvin);
                } else {
                    fahrenheitInput.value = '';
                    kelvinInput.value = '';
                }
                break;

            case 'fahrenheit':
                fahrenheit = parseFloat(fahrenheitInput.value);
                if (!isNaN(fahrenheit)) {
                    celsius = conversions.fahrenheitToCelsius(fahrenheit);
                    kelvin = conversions.fahrenheitToKelvin(fahrenheit);
                    celsiusInput.value = formatValue(celsius);
                    kelvinInput.value = formatValue(kelvin);
                } else {
                    celsiusInput.value = '';
                    kelvinInput.value = '';
                }
                break;

            case 'kelvin':
                kelvin = parseFloat(kelvinInput.value);
                if (!isNaN(kelvin)) {
                    celsius = conversions.kelvinToCelsius(kelvin);
                    fahrenheit = conversions.kelvinToFahrenheit(kelvin);
                    celsiusInput.value = formatValue(celsius);
                    fahrenheitInput.value = formatValue(fahrenheit);
                } else {
                    celsiusInput.value = '';
                    fahrenheitInput.value = '';
                }
                break;
        }
    }

    // Clear all inputs
    function clearAll() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        celsiusInput.focus();
    }

    // Event listeners
    celsiusInput.addEventListener('input', () => updateConversions('celsius'));
    fahrenheitInput.addEventListener('input', () => updateConversions('fahrenheit'));
    kelvinInput.addEventListener('input', () => updateConversions('kelvin'));
    clearBtn.addEventListener('click', clearAll);

    // Focus first input
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => celsiusInput.focus());
    } else {
        celsiusInput.focus();
    }
})();
