import Header from "./components/Header";
import FormularioDeCadastro from "./components/FormularioDeCadastro"
import FormularioDeJob from "./components/FormularioDeJob"
import AvailableJob from "./components/AvailableJob";
import { getJobs } from "./functions/GetJobs.js"
import { useState } from "react";
import { getAllFreelancer } from "./functions/GetAllFreelancer";
import AvailableFreelancer from "./components/AvailableFreelancer";




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
          {jobs.map((job) => (
            <AvailableJob
              title={job.jobTitle}
              client={job.client}
              description={job.jobDescription}
              budget={job.jobBudget + " ETH"}
              id={jobs.indexOf(job)}
            />
          ))}
        </div>
      </div>
      <div className="freelancers">
        <h1>Available Freelancers</h1>
        <div className="available">
        {freelancers.map((freela) =>
        (
          <AvailableFreelancer
          name={freela.name}
          skills={freela.skills}
          portfolio={freela.portfolio}
          experience={freela.experience}
          rating={freela.rating}
          />
        ))}

      </div>
      </div>
    </div>
  );
}

export default App;



// import { useState, useEffect } from "react";
// import Header from "./Header";
// import FormularioDeCadastro from "./FormularioDeCadastro";
// import FormularioDeJob from "./FormularioDeJob";
// import AvailableJob from "./AvailableJob";

// function App() {
//   const [jobs, setJobs] = useState([]);

//   // retrieve the list of available jobs
//   useEffect(() => {
//     const fetchJobs = async () => {
//       const response = await fetch("/api/jobs");
//       const data = await response.json();
//       setJobs(data);
//     };
//     fetchJobs();
//   }, []);

//   // filter the available jobs that have no assigned freelancer


//   return (
//     <div className="App">
//       <Header />
//       <div className="forms">
//         <FormularioDeCadastro />
//         <FormularioDeJob />
//       </div>
//       <div className="jobs">
//         <h1>Available Jobs</h1>
//         <div className="available">
//           {/* map over the available jobs and create an AvailableJob component for each one */}
//           {availableJobs.map((job) => (
//             <AvailableJob
//               key={job.id}
//               title={job.title}
//               client={job.client}
//               description={job.description}
//               budget={job.budget}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
