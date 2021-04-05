// par chave/valor

const saudacao = 'Opa!' //contexto léxico 1

function exec() {
    const saudacao = 'Faaala'
    return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Helton',
    idade: 28,
    peso: 80,
    endereco: {
        logradouro: 'Rua Aracatu',
        numero: 720,
        complemento: 'H'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)