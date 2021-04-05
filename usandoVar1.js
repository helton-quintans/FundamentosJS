// Var fica visível para todo o código (desde que n esteja dentro de uma função)

{
    {
        {
            {
                var sera = 'será??'
                console.log(sera)

            }
        }
    }
}

console.log(sera) // imprime 'será??' mesmo estando fora do bloco

function teste() {
    var local = 123
}

teste()
console.log(local) // não consegue imprimir a var local pois está fora do escopo