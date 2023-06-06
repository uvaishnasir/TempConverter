const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function CtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function FtoC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function CtoK(celsius) {
  return celsius + 273.15;
}

function KtoC(kelvin) {
  return kelvin - 273.15;
}

function FtoK(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

function KtoF(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

celsiusInput.addEventListener("input", () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = CtoF(celsius);
  const kelvin = CtoK(celsius);

  fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
  kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = FtoC(fahrenheit);
  const kelvin = FtoK(fahrenheit);

  celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
  kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
});

kelvinInput.addEventListener("input", () => {
  const kelvin = parseFloat(kelvinInput.value);
  const celsius = KtoC(kelvin);
  const fahrenheit = KtoF(kelvin);

  celsiusInput.value = isNaN(celsius) ? "" : celsius.toFixed(2);
  fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
});
