 estoque= [
    {
      "codigoProduto": 101,
      "descricaoProduto": "Caneta Azul",
      "estoque": 150
    },
    {
      "codigoProduto": 102,
      "descricaoProduto": "Caderno Universitário",
      "estoque": 75
    },
    {
      "codigoProduto": 103,
      "descricaoProduto": "Borracha Branca",
      "estoque": 200
    },
    {
      "codigoProduto": 104,
      "descricaoProduto": "Lápis Preto HB",
      "estoque": 320
    },
    {
      "codigoProduto": 105,
      "descricaoProduto": "Marcador de Texto Amarelo",
      "estoque": 90
    }
  ]

 const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`\n--- Consulta de Estoque ---\n`);


rl.question('Digite o código do produto: ', (codigo) => {
    let codigonumero = parseInt(codigo, 10);
    let produtoEncontrado = false;

   
 for (let produto of estoque) {
    if (parseInt(produto.codigoProduto, 10) === codigonumero) {
            
      let produto_selecionado_estoque = parseInt(produto.estoque, 10);
        produtoEncontrado = true;
            
         console.log(`Produto encontrado: ${produto.descricaoProduto}. Estoque atual: ${produto_selecionado_estoque}`);
            
         rl.question('Digite a para adicionar estoque ou r para remover: ', (escolha) => {         
               
         switch (escolha.toLowerCase()) {
             case "a":
                rl.question('Digite a quantidade de itens a serem adicionados: ', (adicao) => {
                let adicionar = parseInt(adicao, 10);
                            
                           
                 produto.estoque = parseInt(produto.estoque, 10) + adicionar;
                            
                console.log(`Estoque atualizado de ${produto.descricaoProduto}: ${produto.estoque}`);
              rl.close();
                  });
             break;
                    
   case "r":
  rl.question('Digite a quantidade de itens a serem removidos: ', (remocao) => {
    let remover = parseInt(remocao, 10);

                           
    if (remover > parseInt(produto.estoque, 10)) {
         console.log('ERRO: Quantidade de remoção maior que o estoque atual.');
          } else {
                          produto.estoque = parseInt(produto.estoque, 10) - remover;
                         console.log(`Estoque atualizado de ${produto.descricaoProduto}: ${produto.estoque}`);
                      }
                            rl.close();
                      });
                        break;
                    
                    default:
                        console.log('Opção inválida. Operação cancelada.');
                        rl.close();
                        break;
                }
            });
           
            return; 
        }
    }

    
    if (!produtoEncontrado) {
        console.log(`ERRO: O código ${codigonumero} não corresponde a nenhum produto no estoque.`);
        rl.close();
    }
});
