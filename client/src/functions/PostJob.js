import Web3 from "web3";
import FreelancePlatform from "../../../truffle/build/contracts/FreelancePlatform.json" 
const web3 = new Web3(window.ethereum);
const freelancePlatformABI = FreelancePlatform.abi;
const freelancePlatformAddress = FreelancePlatform.networks[4002].address;
const instance = new web3.eth.Contract(freelancePlatformABI, freelancePlatformAddress)

export async function postJob(_title, _description, _budget){
    if (window.ethereum) {
        try {
            let accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.postJob(_title, _description, (_budget)).send({ from: accounts[0], value: _budget * 10 ** 18})
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

