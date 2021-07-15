//Using Heap structure to store transactions (to get newest order?)
class minHeap{
    constructor(){
        this.arr = [null];
    }

    getMin(){
        return this.arr[1];
    }

    insert(item){
        this.arr.push(item);

        //Bubble up to correct spot
        
    }
}

class Db{
    constructor(){
        this.payers = {}      //will contain "Username: Total Points"
        this.transactions = new minHeap();  //will be used to store transaction history (maybe use heap instead for optimization)
                            //bit confused, if subtracting brings it negative, should transaction be removed
    }

    //assume transaction object will be {payer: "", points: "", timestamp: ""}
    add_transaction(transaction){
        if(transaction.payer in this.payers){
            this.payers[transaction.payer] += transaction.points;   //Might need to convert to int from str
        }
        this.transactions.insert(transaction)
    }

    spend_points(){

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
