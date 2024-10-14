//switch
// :D - Ótimo - 1
// :) - Bom - 2 
// :| - Regular - 3
// :( - Ruim - 4
// >:( - Péssimo. - 5
let atendimento = 5

switch (atendimento) {
    case 1:
        console.log(`Ótimo.`);
        break;
    case 2:
        console.log(`Bom.`);
    case 3:
        console.log(`Regular.`);
        break;
    case 4:
        console.log(`Ruim.`);
        break;
    case 5:
        console.log(`Péssimo.`);
        break;
    default:
        console.log(`Valor não encontrado.`);
        break;
}


