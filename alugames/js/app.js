function alterarStatus (id) {
    let gamerClicado = document.getElementById(`game-${id}`);
    let imagem = gamerClicado.querySelector('.dashboard__item__img');
    let botao = gamerClicado.querySelector('.dashboard__item__button');
    
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove ('dashboard__item__button--return');
        botao.textContent = 'alugar'; 

    } 
    else {
     
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';
      botao.classList.add ('dashboard__item__button--return');
    }
   
    
}