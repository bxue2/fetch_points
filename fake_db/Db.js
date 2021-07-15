class Db{
    constructor(){
        this.payers = {}      //will contain "Username: Total Points"
        this.transactions = []   //will be used to store transaction history (maybe use heap instead?)
                            //bit confused, if subtracting brings it negative, should transaction be removed
    }

    //assume transaction object will be {payer: "", points: "", timestamp: ""}
    add_transaction(transaction){
        if(transaction.payer in this.payers){
            this.payers[transaction.payer] += transaction.points;   //Might need to convert to int from str
        }
        this.transactions.push(transaction)
    }

    all_balances(){
        return this.payers;
    }

    print_test(){
        console.log("Hello")
    }
}

let fake_db = new Db()

module.exports = fake_db;
