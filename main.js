const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
]

// 01 - Listar nomes 
const nomes = empresas.map(empresas => empresas.CEO)
console.log("Nomes de empresas")
console.log(empresas)

//  02 - Filtrar valor de mecado

// for(const empresa of empresas) {
//     if (empresa.valorDeMercado > 100) {
//         console.log(
//             `nome ${empresa.nome} - Valor de mercado ${empresa.valorDeMercado}`
//         )
//     }
// }

const valorMapeados = empresas.filter(empresa => empresa.valorDeMercado > 100);
console.log("\nEmpresas com valor de mercado maior que 100");
console.table(valorMapeados); 

// 03 - Calcular o valor total de mercado de todas as empresas;

const totalValorDeMercado = empresas.reduce((acumulador, empresa) => {
    return acumulador + empresa.valorDeMercado
}, 0);
console.log("\nomes.valor total: ");
console.log(totalValorDeMercado);


// 04 - Encontrar empresa mais antiga;
const empresaMaisAntiga = empresas.reduce((maisAntiga, empresa) => {
    return empresa.anoDeCriacao < maisAntiga.anoDeCriacao ? empresa : maisAntiga;
});

console.log(`A empresa mais antiga é ${empresaMaisAntiga.nome}, fundada em ${empresaMaisAntiga.anoDeCriacao}.`);

const base = empresas.sort((a, b) => a.anoDeCriacao - b.anoDeCriacao);
const maisAntiga = base[0]
console.log(maisAntiga);

// Criar um novo array com nome e CEO 

const nomeEmpresaCEO = [];
empresas.forEach(empresa => {
    nomeEmpresaCEO.push({
        nome: empresa.nome, 
        CEO: empresa.CEO
    });
});
console.log("Nomes e CEO");
console.log(nomeEmpresaCEO);













