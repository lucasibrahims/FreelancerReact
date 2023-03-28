async function rateFreelancer(_address, _rating){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
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

async function getJobs(){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
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

async function applyForJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.applyForJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}
async function completeJob(_id){
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
            let call = await instance.methods.completeJob(_id).send({ from: accounts[0] })
            return call;
        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Please Install Metamask!!")
    } 
}

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

async function getAllFreelancer()
{
    if (ethereum) {
        try {
            let accounts = await ethereum.request({ method: "eth_requestAccounts" })
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



//FUNCTIONS
connectWalletBtn.addEventListener("click", () => {
    connectWallet().then((res) => {
        connectWalletBtn.innerHTML = res.slice(0, 7) + "..." + res.slice(35, -1);
        alert("conected");
    }).catch((err) => {
        alert(err);
    })
});

postJobBtn.addEventListener("click", () => {
    postJob(jobTitleInput.value, jobDescriptionInput.value, Number(jobBudgetInput.value)).then((res) => {
        alert("Posted!");
    }).catch((err) => {
        alert(err);
    })
});

addFreelancerBtn.addEventListener("click", () => {
    addFreelancer(freelancerNameInput.value, freelancerSkillsInput.value, freelancerExperienceInput.value, freelancerPortfolioInput.value).then((res) => {
        alert("Added!");
    }).catch((err) => {
        alert(err);
    })
});


const rating = document.querySelectorAll('.rating input');
for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('change', function() {
    if(addressRateInput.value == "")
    {
        alert("Enter the Address!")
    }
    else
    {rateFreelancer(addressRateInput.value, Number(this.value)).then((res) => {
        console.log(this.value); 
    }).catch((err) => {
        alert(err);
    })}
    alert("Rated!");
  });
}