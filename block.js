class Block {
    constructor() {
        this.id = 0
        this.previousHash = ""
        this.hash = ""
        this.nonce = 0
        this.transactions = []
    }
    get key() {
        return JSON.stringify(this.transactions) + this.previousHash + this.index + this.nonce
    }
    addTransaction(transaction){
        this.transactions.push(transaction)
    }
}

module.exports = {
    Block
}

// export default Block