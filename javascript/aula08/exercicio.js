function valor() {
    let real = parseFloat(prompt("Digite um valor"))
    let euro = 5.57
    let valor = real/euro
    return valor.toFixed(2)
}
alert(valor())