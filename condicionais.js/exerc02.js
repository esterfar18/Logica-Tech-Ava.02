// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).

// Dados simulados (como se tivessem sido inseridos em um formulário)
let nome = "Maria";
let sexo = "F";
let estadoCivil = "CASADA";

// Verifica se é do sexo feminino e casada
if (sexo === "F" && estadoCivil === "CASADA") {
    let tempoCasada = 5; // tempo de casada em anos
    console.log("Nome: " + nome);
    console.log("Sexo: " + sexo);
    console.log("Estado civil: " + estadoCivil);
    console.log("Tempo de casada: " + tempoCasada + " anos");
} else {
    console.log("Nome: " + nome);
    console.log("Sexo: " + sexo);
    console.log("Estado civil: " + estadoCivil);
}
