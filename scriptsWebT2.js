const inputValue = document.getElementById('inputValue');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const convertBtn = document.getElementById('convertBtn');
const outputValue = document.getElementById('outputValue');

convertBtn.addEventListener('click', () => {
  const value = parseFloat(inputValue.value);
  const fromUnit = inputUnit.value;
  const toUnit = outputUnit.value;

  if (isNaN(value)) {
    alert('Please enter a valid number');
    return;
  }

  let result;
  if (fromUnit === 'meters' && toUnit === 'feet') {
    result = value * 3.28084;
  } else if (fromUnit === 'feet' && toUnit === 'meters') {
    result = value / 3.28084;
  } else {
    result = value;
  }

  outputValue.value = result.toFixed(2);
});
