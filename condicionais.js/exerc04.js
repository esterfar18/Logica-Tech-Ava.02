// Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela. 

// Valores inteiros A e B
const A = 5;
const B = 5; 

let C;

// Verifica se os valores são iguais
if (A === B) {
    C = A + B; 
} else {
    C = A * B; 
}

// Exibe o resultado
console.log("O resultado é:", C);
