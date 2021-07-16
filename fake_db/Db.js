//Using Heap structure to store transactions (to get newest order?)
class minHeap{
    constructor(){
        this.arr = [null];
    }

    peek(){
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

    pop(){
        if(this.arr.length === 2){
            return this.arr.pop();
        }
        let popped = this.arr[1]
        //Need to move last element to root, then bubble down
        let last = this.arr.pop();
        this.arr[1] = last;
        if(this.arr.length > 2){
            //edge case if there's only 2 nodes left in heap
            if(this.arr.length === 3){
                if(this.arr[2] < this.arr[1]){
                    [this.arr[1], this.arr[2]] = [this.arr[2], this.arr[1]]
                }
            }
            else{
                let currIdx = 1;
                let leftChild = 2;
                let rightChild = 3;
                while(this.arr[leftChild] && this.arr[rightChild] && (
                    this.arr[currIdx].timestamp > this.arr[leftChild].timestamp ||
                    this.arr[currIdx].timestamp > this.arr[rightChild].timestamp
                )){

                    //Swap with the smaller child
                    if(this.arr[leftChild].timestamp < this.arr[rightChild].timestamp){
                        [this.arr[currIdx], this.arr[leftChild]] = [this.arr[leftChild], this.arr[currIdx]]
                        currIdx = leftChild;
                    }
                    else{
                        [this.arr[currIdx], this.arr[rightChild]] = [this.arr[rightChild], this.arr[currIdx]]
                        currIdx = rightChild;
                    }

                    leftChild = currIdx * 2;
                    rightChild = (currIdx * 2) + 1;
                }
            }
        }

        return popped;
    }

    isEmpty(){
        return this.arr.length <= 1;
    }
}

class Db{
    constructor(){
        this.payers = {}      //will contain "Username: Total Points"
                              //could remove this and just loop through transactions too for better memory but slower speed
        this.transactions = new minHeap();  //will be used to store transaction history (use heap for optimization)
                            //bit confused on this, if subtracting brings it negative, should transaction be removed
    }

    //assume transaction object will be {payer: "", points: "", timestamp: ""}
    addTransaction(transaction){
        if(transaction.payer in this.payers){
            this.payers[transaction.payer] += transaction.points;
        }
        else{
            this.payers[transaction.payer] = transaction.points;
        }
        this.transactions.insert(transaction)
    }

    spendPoints(total){
        let remain = total;
        while(remain > 0 && !this.transactions.isEmpty()){
            let currTrans = this.transactions.pop();
            // console.log("Current: ", currTrans)
            //Handling remainders
            if(currTrans.points > remain){
                currTrans.points -= remain;
                this.transactions.insert(currTrans)
                remain = 0;
            }
            else{
                remain -= currTrans.points;
            }
        }
    }

    allBalances(){
        return this.payers;
    }

    allTransactions(){
        return this.transactions.arr.slice(1);
    }
}

let fakeDb = new Db()

//Testing minHeap implementation

// let testHeap = new minHeap()
// testHeap.insert({timestamp: 5})
// testHeap.insert({timestamp: 4})
// testHeap.insert({timestamp: 3})
// testHeap.insert({timestamp: 2})
// testHeap.insert({timestamp: 1})

// console.log(testHeap.arr);

// testHeap.pop();
// console.log("After first pop:" , testHeap.arr);
// testHeap.insert({timestamp: 5})
// console.log(testHeap.arr);
// testHeap.pop();
// console.log(testHeap.arr);

module.exports = fakeDb;
