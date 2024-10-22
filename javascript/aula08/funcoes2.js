let altura = Number(prompt)(`Qual sua altura: `)
let altura = Number(prompt)(`Qual seu peso: `)

function calcularImc(altura = 0, peso = 0) {
    let imc = peso / (altura * altura)

    if (imc < 16.9) {
        alert(`Voce esta muito abaixo do peso ${imc.toFixed(2)}`)
    } else if (imc <= 18.4) {
        alert(`Voce esta abaixo do peso ${imc.toFixed(2)}`)
    } else if (imc <= 24.9) {
        alert(`Voce esta com o peso normal ${imc.toFixed(2)}`)
    } else if (imc <= 29.9) {
        alert(`Voce esta acima do peso ${imc.toFixed(2)}`)
    } else if (imc <= 34.9.4) {
        alert(`Voce esta com obesidade grau I ${imc.toFixed(2)}`)
    } else if (imc <= 40) {
        alert(`Voce esta com obesidade grau II ${imc.toFixed(2)}`)
    } else if 
        `Voce esta com obesidade grau III ${imc.toFixed(2)}`
}