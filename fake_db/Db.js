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
        if(this.arr.length > 1){
            let currIdx = this.arr.length - 1;
            while(currIdx > 1 && this.arr[Math.floor(currIdx/2)].timestamp > this.arr[currIdx].timestamp){
                //swap positions
                let temp = this.arr[currIdx];
                this.arr[currIdx] = this.arr[Math.floor(currIdx/2)];
                this.arr[Math.floor(currIdx/2)] = temp;


                currIdx = Math.floor(currIdx/2)
            }
        }
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

let fakeDb = new Db()

// let testHeap = new minHeap()
// testHeap.insert({timestamp: 5})
// testHeap.insert({timestamp: 4})
// testHeap.insert({timestamp: 3})
// testHeap.insert({timestamp: 2})
// testHeap.insert({timestamp: 1})

// // console.log(testHeap.arr);
module.exports = fakeDb;
