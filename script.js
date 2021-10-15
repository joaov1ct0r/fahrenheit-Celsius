const submitFahrenheit = document.getElementById("submitFahrenheit");

submitFahrenheit.addEventListener("click", transformFahrenheit);

const submitCelsius = document.getElementById("submitCelsius");

submitCelsius.addEventListener("click", transformCelsius);

function transformCelsius() {
    const celsiusDisplay = document.getElementById("celsiusDisplay");

    const userData = document.querySelector("#celsiusInput").value;

    let isFahrenheit = userData.toUpperCase().includes("F");

    if (!isFahrenheit) {
        celsiusDisplay.textContent = "GRAU NÃO IDENTIFICADO";
    } else {
        userData.toUpperCase().replace("F", "");

        let celsiusValue = (parseInt(userData) - 32) * (5 / 9);

        celsiusDisplay.textContent = celsiusValue.toFixed(1) + "°C";
    }
}

function transformFahrenheit() {
    const fahrenheitDisplay = document.getElementById("fahrenheitDisplay");

    const userData = document.querySelector("#fahrenheitInput").value;

    let isCelsius = userData.toUpperCase().includes("C");

    if (!isCelsius) {
        fahrenheitDisplay.textContent = "GRAU NÃO IDENTIFICADO";
    } else {
        userData.toUpperCase().replace("C", "");

        let fahrenheitValue = parseInt(userData) * (9 / 5) + 32;

        fahrenheitDisplay.textContent = fahrenheitValue.toFixed(1) + "°F";
    }
}
