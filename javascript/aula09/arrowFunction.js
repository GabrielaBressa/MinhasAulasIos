//function calcularMedia (n1 = 0, n2 = 0) {
   // let Valormedia = (n1 + n2) / 2
    //return Valormedia
//}

//console.log(`A media do aluno é ${calcularMedia(9, 6)}`);

const calcularImc = (altura = 0, peso = 0) => {
    let imc = peso / (altura * altura)
    return imc
}

console.log(`O IMC do usuario é: ${calcularImc(1.90,70).toFixed(2)}`);