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

//Testing minHeap implementation

// let testHeap = new minHeap()
// testHeap.insert({timestamp: 5})
// testHeap.insert({timestamp: 4})
// testHeap.insert({timestamp: 3})
// testHeap.insert({timestamp: 2})
// testHeap.insert({timestamp: 1})

// console.log(testHeap.arr);

// console.log(testHeap.pop());
// console.log(testHeap.arr);

// console.log(testHeap.pop());
// console.log(testHeap.arr);

module.exports = fakeDb;
