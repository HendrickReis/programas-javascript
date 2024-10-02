num = Number(prompt('Digite um número para ver sua tabuada: '))
quant = Number(prompt('Insira o final da tabuada: '))

smo(num, quant)

function smo(num, quant) {
    for (var c = 1; c <= quant; c++) {
        console.log(`${num} x ${c} = ${num*c}`)
        }
}