import Header from "./components/Header";
import FormularioDeCadastro from "./components/FormularioDeCadastro"
import FormularioDeJob from "./components/FormularioDeJob"
import AvailableJob from "./components/AvailableJob";
import { getJobs } from "./functions/GetJobs.js"
import { useState } from "react";
import { getAllFreelancer } from "./functions/GetAllFreelancer";
import AvailableFreelancer from "./components/AvailableFreelancer";
import PendentJob from "./components/PendentJob";
import CompletedJob from "./components/CompletedJob";




function App() {
    const [jobs, setJobs] = useState([]);
      getJobs().then((res) => {
        setJobs(res)
      });

    const [freelancers, setFreelancers] = useState([]);
    getAllFreelancer().then((res) =>
    {
      setFreelancers(res)
    })

let availableJobs = jobs.filter((job) => job.freelancer === "0x0000000000000000000000000000000000000000" && !job.jobApproved)
let pendentJobs = jobs.filter((job) => job.freelancer !== "0x0000000000000000000000000000000000000000" && !job.jobCompleted)
let completedJobs = jobs.filter((job) => job.jobCompleted && !job.jobApproved)

  return (
    <div className="App">
      <Header />
      <div className="forms">
        <FormularioDeCadastro />
        <FormularioDeJob />
      </div>
      <div className="jobs">
        <h1>Available Jobs</h1>
        <div className="available">
          {availableJobs.map((job) => (
            <AvailableJob
              title={job.jobTitle}
              client={job.client}
              description={job.jobDescription}
              budget={job.jobBudget + " ETH"}
              id={jobs.indexOf(job)}
            />
          ))}
        </div>
        <h1>Pendent Jobs</h1>
        <div className="available">
          {pendentJobs.map((job) => 
          <PendentJob 
          title={job.jobTitle}
          client={job.client}
          description={job.jobDescription}
          id={jobs.indexOf(job)}/>)}

        </div>
        <h1>Completed Jobs</h1>
        <div className="available">
          {completedJobs.map((job) => 
          <CompletedJob 
          title={job.jobTitle}
          client={job.client}
          description={job.jobDescription}
          freela={job.freelancer}
          id={jobs.indexOf(job)}/>)}

        </div>
      </div>
      <div className="freelancers">
        <h1>Available Freelancers</h1>
        <div className="available-freela">
        {freelancers.map((freela) =>
        (
          <AvailableFreelancer
          name={freela.name}
          skills={freela.skills}
          portfolio={freela.portfolio}
          experience={freela.experience}
          rating={freela.rating}
          address={freela.freelancerAddress}
          />
        ))}
      </div>

      </div>
    </div>
  );
}

export default App;

//

