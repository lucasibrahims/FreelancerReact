import Web3 from "web3";
import FreelancePlatform from "../build/contracts/FreelancePlatform.json"
const web3 = new Web3(window.ethereum);
const freelancePlatformABI = FreelancePlatform.abi;
const freelancePlatformAddress = FreelancePlatform.networks[4002].address;
const instance = new web3.eth.Contract(freelancePlatformABI, freelancePlatformAddress)

export async function getJobs(){
    if (window.ethereum) {
        try {
            let accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            let numberOfJobs = await instance.methods.jobCounter().call({ from: accounts[0] })
            let jobs = [];
            for(let i = 1; i<=numberOfJobs; i++)
            {
                let call = await instance.methods.jobs(i).call({ from: accounts[0] })
                jobs.push(call);
            }
            return jobs;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}
