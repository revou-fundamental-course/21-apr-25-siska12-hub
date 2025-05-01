function convertToFahrenheit() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  if (isNaN(celsius)) {
    alert("Masukkan angka yang valid di kolom Celsius!");
    return;
  }

  let fahrenheit = (celsius * 9 / 5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  document.getElementById("calc").value = `${celsius}°C * (9 / 5) + 32 ; ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (isNaN(fahrenheit)) {
    alert("Masukkan angka yang valid di kolom Fahrenheit!");
    return;
  }

  let celsius = (fahrenheit - 32) * 5 / 9;
  document.getElementById("celsius").value = celsius.toFixed(2);
  document.getElementById("calc").value = `${fahrenheit}°F - 32) * 5 / 9 ; ${celsius.toFixed(2)}°C`;
}

function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calc").value = "";
}