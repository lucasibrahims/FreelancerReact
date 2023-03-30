import Web3 from "web3";
import FreelancePlatform from "../build/contracts/FreelancePlatform.json"
import { getFreelancer } from "./GetFreelancers"; 
const web3 = new Web3(window.ethereum);
const freelancePlatformABI = FreelancePlatform.abi;
const freelancePlatformAddress = FreelancePlatform.networks[4002].address;
const instance = new web3.eth.Contract(freelancePlatformABI, freelancePlatformAddress)

export async function rateFreelancer(_address, _rating){
    if (window.ethereum) {
        try {
            let accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            getFreelancer(_address).then(async (res) => {
                let freelanceRating = Number(res.rating);
                let freelanceCountRate = Number(res.rateCount) + 1;
                let rate = (freelanceRating + _rating)/freelanceCountRate;
                rate = Math.round(rate)
                let call = await instance.methods.rateFreelancer(_address, Math.round(Number(rate))).send({ from: accounts[0] })
                return call;
            });
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}
