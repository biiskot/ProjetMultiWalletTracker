function soldesCalcul(wallet){
    for(let j=0; j<wallet.tabTokens.length; j++){
        wallet.solde += wallet.tabTokens[j].value
    }
}

function displayCoins(wallet,idWallet){
    switch (idWallet){
        case 'HoldingWallet' :
            break;
        case 'EarningWallet' : 
            break;
        case 'TradingWallet' :
            break;
    }
    let divAffiche = document.getElementById(idWallet);
    for(let i=0; i< wallet.tabTokens.length; i++){
      //affiche LOGO | SYMBOL | PRICE | VALUE      (/!\ dépend du wallet)
    }
}