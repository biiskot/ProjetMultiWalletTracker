//Objet wallet (3 en tout)
class HoldingWallet {
    constructor(name, solde) {
        this.name = name;
        this.solde = solde;
    }

    addToken(tkn,qtty) {
        let holdStruct = {
            quantity: qtty,
            token: tkn,
            value: qtty*tkn.price
        }
        this.tabTokens.push(holdStruct);

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
    addToken(tkn,qtty,apr){
        let earnStruct = {
            quantity: qtty,
            token: tkn,
            apr: apr
        }

        this.tabTokensEarnings.push(earnStruct);
    }
    transferHoldEarn(tkn,qtty,apr,rewrd_tkn){
        Holding.removeToken(tkn,qtty);//On retire les fonds mis en earning du compte holding
        //On ajoute l'objet Earning au tableau du wallet
        addToken();
    }
    transferEarnHold(){

    }
}

class TradingWallet extends HoldingWallet{
    transferHoldTrade(tkn,qtty,tradingprice){
        let newtrade = new Trade();
        Holding.removeToken(tkn,qtty);
    }
    transferTradeHold(){

    }
}

//Objet crypto (sûrement fourni par l'API)
class Token {
    constructor(name,symbol,price,qtty,logo){
 
    }
}
