//if-else
let nota1, nota2, media, faltas
nota1 = 10
nota2 = 5
faltas = 3
media = (nota1 + nota2) / 2
//media >= 7 :) - 5
//media >= 7 :) - 5
if (media >= 7 && faltas <= 5) {
    //true
    console.log(`O jovem está aprovado com a média ${media} e quantidade de ${faltas}`);
} else {
    console.log(`O jovem está reprovado com a média ${media} e quantidade de ${faltas}`);
    //False
}
console.log(`Fim.`);