function veiculos()
{
    const dist = parseFloat(document.getElementById("distancia").value);
    const valor = parseFloat(document.getElementById("preco"). value);
    var consumo = 8;

    
    if (isNaN(dist) || isNaN(valor)) {
        alert("Insira valores válidos para a distância e o valor do combustível.")
        return;
    }

    var gasto = (dist/consumo) * valor;

    document.getElementById("total").textContent = gasto.toFixed(2);
} 