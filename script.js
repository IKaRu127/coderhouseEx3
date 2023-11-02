
//DECLARANDO VARIÁVEIS

let numero1 = parseFloat(prompt('Insira aqui o 1° número ->'))
let numero2 = parseFloat(prompt('Insira aqui o 2° número ->'))
let media = 0
let soma = 0
let sub = 0
let lista_numeros = ''

lista_numeros += numero1
lista_numeros += ', ' + numero2

soma = numero1 + numero2
media = soma / 2
if (numero1 > numero2) {
    sub = numero1 - numero2
} else {
    sub = numero2 - numero1
}

alert('Os resultados são:\n -> A soma de ' + numero1 + ' e ' + numero2 + ' é igual a -> ' + soma
    + '\n-> A subtração dos números ' + numero1 + ' e ' + numero2 + ' é igual a -> ' + sub
    + '\n-> A média dos números ' + numero1 + ' e ' + numero2 + ' é igual a -> ' + media)


let answer = parseInt(prompt('Deseja continuar?\n [ 1 ] - Sim\n [ 2 ] - Não'))

while (answer == 1) {
    //inicialização;condição;finalização;
    for(i = 3; answer != 2; i++ ) {
        let numAdicional = parseFloat(prompt('Insira outro número aqui -> '))
        soma = soma + numAdicional
        media = Math.round((soma / i), -2)
        sub = sub - numAdicional
        alert('Os resultados são:\n -> A soma dos números ' + lista_numeros + ' e ' + numAdicional + ' é igual a -> ' + soma
        + '\n-> A subtração dos números ' + lista_numeros + ' e ' + numAdicional + ' é igual a -> ' + sub
        + '\n-> A média dos números ' + lista_numeros + ' e ' + numAdicional + ' é igual a -> ' + media)
        lista_numeros += ', ' + numAdicional
        answer = parseInt(prompt('Deseja continuar?\n [ 1 ] - Sim\n [ 2 ] - Não'))        
    }
}
