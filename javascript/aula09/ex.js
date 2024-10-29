 let botaoCalcular = document.querySelector(``)
 const calcular = () => {
    let altura = Number(document.querySelector(`#altura`).value)
    let peso = Number(document.querySelector(`#peso`).value)
    let res = document.querySelector(`p`)

    let imc = peso/(altura * altura)
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
}