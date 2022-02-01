
let Holding = new HoldingWallet(); // Spot
let Earning = new EarningWallet();
let Trading = new TradingWallet();

let tabChains = ['centralized','ethereum','avalanche','polygon','fantom','cronos','celo','velas','elrond'];

Holding.addToken(ether);


//Test affichage token holding avec ses attributs
//      --> Equivaut à l'affichage user
console.log(Holding.tabTokens[0].quantity);
console.log(Holding.tabTokens[0].value);

