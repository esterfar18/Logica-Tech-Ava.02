// Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

let numero = -5; // Substitua -5 pelo número desejado

if (numero > 0) {
    console.log(`O dobro de ${numero} é ${numero * 2}`);
} else if (numero < 0) {
    console.log(`O triplo de ${numero} é ${numero * 3}`);
} else {
    console.log("O número é zero.");
}