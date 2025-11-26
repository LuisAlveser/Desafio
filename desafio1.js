vendas=[
  { "vendedor": "João Silva", "valor": 1200.50 },
  { "vendedor": "João Silva", "valor": 950.75 },
  { "vendedor": "João Silva", "valor": 1800.00 },
  { "vendedor": "João Silva", "valor": 1400.30 },
  { "vendedor": "João Silva", "valor": 1100.90 },
  { "vendedor": "João Silva", "valor": 1550.00 },
  { "vendedor": "João Silva", "valor": 1700.80 },
  { "vendedor": "João Silva", "valor": 250.30 },
  { "vendedor": "João Silva", "valor": 480.75 },
  { "vendedor": "João Silva", "valor": 320.40 },

  { "vendedor": "Maria Souza", "valor": 2100.40 },
  { "vendedor": "Maria Souza", "valor": 1350.60 },
  { "vendedor": "Maria Souza", "valor": 950.20 },
  { "vendedor": "Maria Souza", "valor": 1600.75 },
  { "vendedor": "Maria Souza", "valor": 1750.00 },
  { "vendedor": "Maria Souza", "valor": 1450.90 },
  { "vendedor": "Maria Souza", "valor": 400.50 },
  { "vendedor": "Maria Souza", "valor": 180.20 },
  { "vendedor": "Maria Souza", "valor": 90.75 },

  { "vendedor": "Carlos Oliveira", "valor": 800.50 },
  { "vendedor": "Carlos Oliveira", "valor": 1200.00 },
  { "vendedor": "Carlos Oliveira", "valor": 1950.30 },
  { "vendedor": "Carlos Oliveira", "valor": 1750.80 },
  { "vendedor": "Carlos Oliveira", "valor": 1300.60 },
  { "vendedor": "Carlos Oliveira", "valor": 300.40 },
  { "vendedor": "Carlos Oliveira", "valor": 500.00 },
  { "vendedor": "Carlos Oliveira", "valor": 125.75 },

  { "vendedor": "Ana Lima", "valor": 1000.00 },
  { "vendedor": "Ana Lima", "valor": 1100.50 },
  { "vendedor": "Ana Lima", "valor": 1250.75 },
  { "vendedor": "Ana Lima", "valor": 1400.20 },
  { "vendedor": "Ana Lima", "valor": 1550.90 },
  { "vendedor": "Ana Lima", "valor": 1650.00 },
  { "vendedor": "Ana Lima", "valor": 75.30 },
  { "vendedor": "Ana Lima", "valor": 420.90 },
  { "vendedor": "Ana Lima", "valor": 315.40 }
]
 let comissaoTotalJoao=0;
   let  comissaoTotalCarlos=0;
   let  comissaoTotalMaria=0;
   let    comissaoTotalAna=0;
for(const itens of  vendas){

  let comissao = 0;

  
  if (itens.valor < 500) {
    comissao = itens.valor * 0.01;
  } else if (itens.valor > 500) { 
    comissao = itens.valor * 0.05;
  }
  
 
  switch (itens.vendedor) {
    case "João Silva":
      comissaoTotalJoao += comissao;
      break;
    case "Maria Souza":
      comissaoTotalMaria += comissao;
      break;
    case "Carlos Oliveira":
      comissaoTotalCarlos += comissao;
      break;
    case "Ana Lima":
      comissaoTotalAna += comissao;
      break;
  }

   


    
}
console.log(`
  Resumo de Comissões:
  João Silva: R$ ${comissaoTotalJoao.toFixed(2)}
  Maria Souza: R$ ${comissaoTotalMaria.toFixed(2)}
  Carlos Oliveira: R$ ${comissaoTotalCarlos.toFixed(2)}
  Ana Lima: R$ ${comissaoTotalAna.toFixed(2)}
`);
