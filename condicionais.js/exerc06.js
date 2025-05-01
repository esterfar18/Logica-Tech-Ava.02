//  Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS. 

function verificarBooleanos(valor1, valor2) {
    if (valor1 === true && valor2 === true) {
        console.log("Ambos são VERDADEIROS.");
    } else if (valor1 === false && valor2 === false) {
        console.log("Ambos são FALSOS.");
    } else {
        console.log("Os valores são diferentes.");
    }
}

verificarBooleanos(true, true);  // Ambos são VERDADEIROS.
verificarBooleanos(false, false); // Ambos são FALSOS.
verificarBooleanos(true, false);  // Os valores são diferentes.