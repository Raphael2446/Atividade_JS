function produtos()
{
   const val1 = parseFloat(document.getElementById("valor1").value);
   const val2 = parseFloat(document.getElementById("valor2").value);
   const val3 = parseFloat(document.getElementById("valor3").value);
   const quant1 = parseInt(document.getElementById("quantidade1").value);
   const quant2 = parseInt(document.getElementById("quantidade2").value);
   const quant3 = parseInt(document.getElementById("quantidade3").value);

    
   if (isNaN(val1, val2, val3) || isNaN(quant1, quant2, quant3)) {
    alert("Insira valores válidos para o valor e a quantidade dos produtos.")
    return;
}

   const result = (val1 * quant1) + (val2 * quant2) + (val3 * quant3);

   document.getElementById("total").textContent = result.toFixed(2);
}  