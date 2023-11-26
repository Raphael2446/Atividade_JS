const numeros = [];

function adicionar() {
    const numInput = document.getElementById("numero");
    const num = parseFloat(numInput.value);

    if (!isNaN(num) && numInput.value.trim() !== "") {
        numeros.push(num);
        numInput.value = "";
    } else {
        alert("Insira um valor válido.");
    }
}

function todos() {
    document.getElementById("todos").textContent = numeros.join(", ");
}

function maior() {
    if (numeros.length > 0) {
        const maiorvalor = Math.max(...numeros);
        document.getElementById("maior").textContent = maiorvalor;
    } else {
        alert("Nenhum valor inserido.");
    }
}

function menor() {
    if (numeros.length > 0) {
        const menorvalor = Math.min(...numeros);
        document.getElementById("menor").textContent = menorvalor;
    } else {
        alert("Nenhum valor inserido.");
    }
}

function reset()
{
    numeros.length = 0;
    document.getElementById("numero").value = "";
    document.getElementById("todos").textContent = "";
    document.getElementById("maior").textContent = "";
    document.getElementById("menor").textContent = ""; 
}