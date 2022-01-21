//Objet wallet (3 en tout)
class Wallet {
    constructor(name, solde) {
        this.name = name;
        this.solde = solde;
    }

    addToken(tkn,qtty) {
        let structToken = {
            quantity: qtty,
            token: tkn,
            price: qtty*tkn.price
        }
        this.tabTokens.push(structToken);

    }
}

//Objet crypto (sûrement fourni par l'API)
class Token {
    constructor(name,symbol,price,logo){

    }
}

let Holding = new Wallet();
let ether = new Token();


Holding.addToken(ether);


//Test affichage token holding avec ses attributs
//      --> Equivaut à l'affichage user
console.log(Holding.tabTokens[0].quantity);