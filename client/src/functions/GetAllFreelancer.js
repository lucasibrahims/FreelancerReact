import Web3 from "web3";
import FreelancePlatform from "../../../truffle/build/contracts/FreelancePlatform.json" 
const web3 = new Web3(window.ethereum);
const freelancePlatformABI = FreelancePlatform.abi;
const freelancePlatformAddress = FreelancePlatform.networks[4002].address;
const instance = new web3.eth.Contract(freelancePlatformABI, freelancePlatformAddress)

export async function getAllFreelancer()
{
    if (window.ethereum) {
        try {
            let accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            let numberOfFreelancers = await instance.methods.freelancerCounter().call({ from: accounts[0] })
            let freelancers = [];
            for(let i=0; i<numberOfFreelancers; i++){
            let call = await instance.methods.freela(i).call({ from: accounts[0] })
            freelancers.push(call);
            }
            return freelancers;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}