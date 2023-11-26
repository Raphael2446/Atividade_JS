function conversor()
{
const temp = parseFloat(document.getElementById("input2").value);
const tipoTemp = document.getElementById("tipo").value;
const totalTemp = document.getElementById("total");

var total = 0;


if (isNaN(temp)) {
    alert("Insira um valor válido para a temperatura.")
    return;
}

switch (tipoTemp)
    {
    case "Celsius":
        {
        total = temp * 1.8 + 32;

        totalTemp.textContent = total.toFixed(2) + "°F";
        break
        }        

    case "Fahrenheit":
        {
        total = (temp - 32) / 1.8;

        totalTemp.textContent = total.toFixed(2) + "°C";
        break;
        }
    }
}