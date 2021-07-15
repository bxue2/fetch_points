class Db{
    constructor(){
        this.users = {}      //will contain "Username: Total Points"
        this.transactions = []   //will be used to store transaction history (maybe use heap instead?)
                            //bit confused, if subtracting brings it negative, should transaction be removed
    }

    print_test(){
        console.log("Hello")
    }
}

let fake_db = new Db()

module.exports = fake_db;
