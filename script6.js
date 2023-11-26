function imc()
{
    const alt = parseFloat(document.getElementById("altura").value);
    const genero = document.getElementById("gen").value;

    var imc = 0

    
    if (isNaN(alt)) {
        alert("Insira um valor válido para a altura.")
        return;
    }

    switch (genero)
    {
        case "Homem":

        total = (72.7 * alt) - 58

        document.getElementById("total").textContent = total.toFixed(2) + "kg";
        break;

        case "Mulher":

        total = (62.1 * alt) - 44.7;

        document.getElementById("total").textContent = total.toFixed(2) + "kg";
        break;

    }
}