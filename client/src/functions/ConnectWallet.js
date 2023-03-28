import Web3 from "web3";

const FANTOM_NETWORK_ID = 4002; // Network ID for Fantom Opera

export async function ConnectWallet(){
    if (window.ethereum) {
        try {
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.requestAccounts();
            
            // Check if the user is connected to the correct network
            const chainId = await web3.eth.getChainId();
            if (chainId !== FANTOM_NETWORK_ID) {
                throw new Error(`Please connect to the Fantom network`);
            }
            
            // User is connected to the correct network, update UI and return the account
            const address = accounts[0];
            window.ethereum.on('accountsChanged', function (accounts) {
                const newAddress = accounts[0];
                document.getElementById('connect-btn').textContent = newAddress.slice(0, 7) + "..." + newAddress.slice(35, -1);
                
            });
            document.getElementById('connect-btn').textContent = address.slice(0, 7) + "..." + address.slice(35, -1);
            return (address.slice(0, 7) + "..." + address.slice(35, -1)) ;
        } catch (error) {
            
            throw new Error("Please, log in your account on the correct network! \n For this website use: Fantom Testnet  \n"); 
            
        }
    } else {
        throw new Error("Please install MetaMask.");
    }
}
