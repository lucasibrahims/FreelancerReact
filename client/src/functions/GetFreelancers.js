async function getFreelancer(_address)
{
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.freelancers(_address).call({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

