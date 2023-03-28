async function approveJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.approveJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}


