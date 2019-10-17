const Block = require('./block').Block;
const Blockchain = require('./blockchain').Blockchain;
const Transaction = require('./transaction').Transaction;

let transaction = new Transaction('Adriano','Gusta',15000);
let genesisBlock = new Block();
let blockchain = new Blockchain(genesisBlock);

let block = blockchain.getNextBlock([transaction]);
blockchain.addBlock(block);

let transactionTwo = new Transaction('Fulano','Ciclano',245321);
let blockTwo = blockchain.getNextBlock([transactionTwo,transaction])
blockchain.addBlock(blockTwo)
console.log(blockchain);
// console.log(transaction);