while (true) {
    num = Number(prompt('Digite um número em celsius: '))

    function cover(a=0) {
        if (typeof a == 'number') {
            return (a * (9/5) + 32)
        } else {
        return (0 * (9/5) + 32)
        }
    }

    console.log(`${cover(num)} fareinheit`)
    quest = prompt('Deseja fazer outra operação? [SIM/NÃO]')
    if (quest.toUpperCase() != 'SIM') {
        break
    }
}

console.log('Programa finalizado.')