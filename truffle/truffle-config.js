const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const infuraKey = fs.readFileSync(".env").toString().trim();
const mnemonic = fs.readFileSync(".secret").toString().trim();

const infuraFantom = "wss://ws-nd-826-696-231.p2pify.com/c431b28391187875944bc530c2f473ba"

module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",   
      port: 7545,            
      network_id: "*",       
    },

    goerli: {
      provider: () => new HDWalletProvider(mnemonic, infuraKey),
      network_id: 5,       
      gas: 5500000,        
      confirmations: 2,    
      timeoutBlocks: 600,  
      skipDryRun: true     
    },

    bscTestnet: {
      provider: () => new HDWalletProvider(mnemonic, infuraKey),
      network_id: 97,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 600,
      skipDryRun: true
    },

    fantomtest: {
      provider: () => new HDWalletProvider(mnemonic, infuraFantom),
      network_id: 4002,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 600,
      skipDryRun: true
    }



  },

  compilers: {
    solc: {
      version: "^0.8.2",    
    }
  },
}

