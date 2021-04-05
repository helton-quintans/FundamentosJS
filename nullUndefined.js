let valor // não inicializada
console.log(valor) //undefined

valor = null //ausência de valor - não aponta para nenhum endereço de memória
console.log(valor)
    // console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.35
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)