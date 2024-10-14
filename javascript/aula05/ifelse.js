let nota1, nota2, media, faltas;
nota1 = 6.8;
nota2 = 6.8;
faltas = 9;
media = 3;

if (media >= 7 && faltas < 6) {
    //true
    console.log(` aluno aprovado`);
}else if (media >= 6.5 && faltas <= 5) {
    console.log(`Aluno ap. conselho`);
}else if (media > 6 && faltas <6 ) {
    console.log(`Atividade de rep. ${media}`);
    media += 0.5
    console.log(media);
}else {
    console.log(`Aluno reprovado`);
}
console.log(`Fim`);
//   &&
// V + V = V
// V + F = V
// F + V = V
// F + F = F