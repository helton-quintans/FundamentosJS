// novo recurso do ES2015

const pessoa = {
    nome: 'Helton',
    idade: '28',
    endereco: {
        logradouro: 'Rua aracatu',
        numero: 720,
        complemento: 'H'
    }
}

//console.log(nome, idade)// gera um erro

// destructuring
//tire os atributos nome e idade do obj pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, endereco: e } = pessoa
console.log(n, e)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num) //ERRO