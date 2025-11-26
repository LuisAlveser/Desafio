const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`\n--- Vencimento ---\n`);


rl.question('Digite a data de vencimento digite esse formato AAAA-MM-DD: ', (data) => {
  
const data_ventimento= new Date(`${data}`);
const dataAtual = new Date();
if(data_ventimento>dataAtual){
    console.log(" Sua conta não venceu!!!");
}
else
{
    const tempo=data_ventimento.getTime()-dataAtual.getTime();
    const dias_restantes=Math.ceil(tempo/(24*60*60*1000));
    console.log(dias_restantes);
    const juros= 2.5*dias_restantes;
   console.log(`Sua conta venceu! Você deve R$ ${juros.toFixed(2)} de juros`);
} 


    
    rl.close();
});
