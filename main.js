const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto) =>{
     const botaoControle = produto.querySelectorAll('.botaoControle');
     const quantidadeItens = produto.querySelector('.quantidadeItens');

     botaoControle.forEach((botao) =>{
          botao.addEventListener('click', () => {
               const quantidade = parseInt(quantidadeItens.innerText || 0);

               if(botao.innerText === "+"){
                    quantidadeItens.innerText = quantidade + 1;
               } else if(botao.innerText === "-" && quantidade > 0){
                    quantidadeItens.innerText = quantidade - 1;
               } else{
                    alert("Quantidade não pode ser negativa")
               }
          })
     })
})