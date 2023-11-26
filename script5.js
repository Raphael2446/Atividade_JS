function piso()
{
    const comp = parseFloat(document.getElementById("comprimento").value);
    const larg = parseFloat(document.getElementById("largura").value);

    const preco = 36;

    if (isNaN(comp) || isNaN(larg)) {
        alert("Insira valores válidos para o comprimento e a largura.")
        return;
    }

    var area = comp * larg

    var valPiso = area * preco

    document.getElementById("total").textContent = valPiso.toFixed(2);

}