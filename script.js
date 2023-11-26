function displayNumeros()
{
    const input = parseInt(document.getElementById("input").value);
    const evenNumeros = document.getElementById("numeros");
    const somaEven = document.getElementById("soma");

    if (isNaN(input))
    {
        alert("Insira um valor válido.");
        return
    }

    let numeros = [];
    let soma = 0;

    for (let i = 2; i <= input; i += 2) {
        numeros.push(i);
        soma += i;
    }

    evenNumeros.textContent = numeros.join(", ");
    somaEven.textContent = soma;
}
