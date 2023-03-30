// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract FreelancePlatform {
    address owner;
        constructor(){
        owner = msg.sender;
    }
    
    struct Job {
        uint jobId;
        string jobTitle;
        string jobDescription;
        uint jobBudget;
        address client;
        address freelancer;
        bool jobCompleted;
        bool jobApproved;
    }
    
    struct Freelancer {
        uint freelancerId;
        address freelancerAddress;
        string name;
        string skills;
        string experience;
        string portfolio;
        uint rating;
        uint rateCount;
    }
    
    mapping (uint => Job) public jobs;
    mapping (address => Freelancer) public freelancers;
    Freelancer[] public freela;
    
    uint public jobCounter;
    uint public freelancerCounter;
    
    function postJob(string memory _title, string memory _description, uint _budget) public payable {
        require(msg.value>=(_budget*10**18), "You should pay for your job");
        jobCounter++;
        jobs[jobCounter] = Job(jobCounter, _title, _description, _budget, msg.sender, address(0), false, false);
    }
    
    function applyForJob(uint _jobId) public {
        require(jobs[_jobId].freelancer == address(0), "Job already assigned");
        require(jobs[_jobId].client != msg.sender, "You can't apply for your job");
        require(keccak256(abi.encodePacked(freelancers[msg.sender].name)) != keccak256(""), "You should register to apply for a job");
        jobs[_jobId].freelancer = msg.sender;
    }
    
    function completeJob(uint _jobId) public {
        require(jobs[_jobId].freelancer == msg.sender, "Only freelancer can complete job");
        jobs[_jobId].jobCompleted = true;
    }
    
    function approveJob(uint _jobId) public {
        require(jobs[_jobId].client == msg.sender, "Only client can approve job");
        require(jobs[_jobId].jobCompleted, "Job not completed");
        jobs[_jobId].jobApproved = true;
        (bool sent, ) = payable(jobs[_jobId].freelancer).call{value: (jobs[_jobId].jobBudget * 9*10**17)}("");
        require(sent, "There was a problem to transfer");
        (bool sentt, ) = payable(owner).call{value: (jobs[_jobId].jobBudget *10**17)}("");
        require(sentt, "There was a problem to transfer");

        // release payment using cryptocurrency
    }
    
    function addFreelancer(string memory _name, string memory _skills, string memory _experience, string memory _portfolio) public {
        require(freelancers[msg.sender].freelancerId == 0, "Freelancer already added");
        freelancerCounter++;
        freelancers[msg.sender] = Freelancer(freelancerCounter, msg.sender, _name, _skills, _experience, _portfolio, 0, 0);
        freela.push(Freelancer(freelancerCounter, msg.sender, _name, _skills, _experience, _portfolio, 0, 0));
    }
    
    function rateFreelancer(address _freelancer, uint _rating) public {
        require(freelancers[_freelancer].freelancerId > 0, "Freelancer not found");
        require(_freelancer != msg.sender, "You can't rate yourself");
        freela[(freelancers[_freelancer].freelancerId)-1].rateCount++;
        freela[(freelancers[_freelancer].freelancerId)-1].rating = _rating;
        freelancers[_freelancer].rateCount++;
        freelancers[_freelancer].rating = _rating;
    }
}
