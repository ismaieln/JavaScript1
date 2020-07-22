const celciusInput = document.querySelector("#celcius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNumb(num) {
  return Math.round(num * 100) / 100;
}

function celciusToOthers() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNumb(fTemp);
  kelvinInput.value = roundNumb(kTemp);
}

function fahrenheitToOthers() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = ((fTemp - 32) * 5) / 9;
  const kTemp = fTemp + 459.67;
  celciusInput.value = roundNumb(cTemp);
  kelvinInput.value = roundNumb(kTemp);
}

function kelvinToOthers() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  celciusInput.value = roundNumb(cTemp);
  fahrenheitInput.value = roundNumb(fTemp);
}

function main() {
  celciusInput.addEventListener("input", celciusToOthers);
  fahrenheitInput.addEventListener("input", fahrenheitToOthers);
  kelvinInput.addEventListener("input", kelvinToOthers);
}

main();
