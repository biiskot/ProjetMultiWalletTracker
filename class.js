//Objet wallet (1 principale et 3 détaillés)
class MainWallet{
    constructor(){
        this.solde = Holding.solde + Earning.solde + Trading.solde;
        this.tabTokens = (Holding.tabTokens.concat(Earning.tabTokens)).concat(Trading.tabTokens);
        this.PnL=0;
    }
}

class HoldingWallet {
    constructor() {
        this.solde = 0;
        this.PnL=0;
        this.tabTokens = new Array();
    }

    addToken(tkn,qtty) {
        let holdStruct = {
            quantity: qtty,
            token: tkn,
            value: qtty*tkn.price
        }
        this.tabTokens.push(holdStruct); //Tab to display
    }
    removeToken(tkn,qtty){
        //Trouver dans le tab holding le token et enlever la qtté voulue
        for (let i = 0; i < this.tabTokens.length; i++){
            if(tkn.name==this.tabTokens[i].name){
                if(qtty>=this.tabTokens[i].quantity)
                    tabTokens[i].pop;
                else
                    this.tabTokens[i].quantity -= qtty; //retirer la bonne quantité
            }
        }
    }
}

class EarningWallet extends HoldingWallet{
    addTokenAPR(tkn,qtty,apr){
        let earnStruct = {
            quantity: qtty,
            token: tkn,
            earnedValueDaily: ((tkn.price*qtty)*apr/100)/365,
            apr: apr
        }

        this.tabTokensEarnings.push(earnStruct); //Tab to display
        this.tabTokens.push(tkn,qtyy);//Résumé actifs calculSoldes()
    }
    transferHoldEarn(tkn,qtty,apr,rewrd_tkn){
        Holding.removeToken(tkn,qtty);//On retire les fonds mis en earning du wallet holding
        //On ajoute l'objet Earning au tableau du wallet
        this.addToken();
        this.addTokenAPR();
    }
    transferEarnHold(tkn,qtty){
        this.removeToken(tkn,qtty);
        Holding.addToken(tkn,qtty);
    }
}

class TradingWallet extends HoldingWallet{
    addTrade(tkn,qtty,entry){ //addTrade
        let tradeStruct = {
            token: tkn,
            quantity: qtty,
            entryPrice: entry
        }
        this.tabTokensTrading.push(tradeStruct);//Tab to display
        this.tabTokens.push(tkn,qtyy);
    }
    transferHoldTrade(tkn,qtty,tradingprice){
        let newtrade = new Trade();
        Holding.removeToken(tkn,qtty);
    }
    transferTradeHold(){
        this.removeToken(tkn,qtty);
        Holding.addToken(tkn,qtty);
    }
}

/*
//Objet crypto (sûrement fourni par l'API)
class Token {
    constructor(name,symbol,price,logo){
        this.name = name;
        this.symbol = symbol;
        this.price = 'get api price'
        this;logo = logo
    }
}
*/

class User {
    constructor(pseudo){
        this.pseudo = pseudo;
        this.uid = 0;
        this.mainwallet = new MainWallet();
        this.holdwallet = new HoldingWallet();
        this.earnwallet = new EarningWallet();
        this.tradingwallet = new TradingWallet();
    }
}