import "./CompletedJob.css"
import { approveJob } from "../../functions/ApproveJob"
import { getFreelancer } from "../../functions/GetFreelancers"
import { useState } from "react"

const CompletedJob = (props) => {
    const aoClicar = (evento) => {
        evento.preventDefault()
        approveJob(props.id + 1);     
    }
const [freela, setFreela] = useState('')
getFreelancer(props.freela).then((res) =>
setFreela(res));
    return(
        <div className="completed-job">
            <h2>{props.title}</h2>
            <label>Description</label>
            <p>{props.description}</p>
            <label>Client</label>
            <p>{props.client}</p>
            <label>Freelancer</label>
            <p>{freela.name}</p>
            <button variant="primary" onClick={aoClicar}>
                Approve
            </button>
        </div>
    )
}

export default CompletedJob