import "./AvailableJob.css"
import { applyForJob } from "../../functions/ApplyForJob"

const AvailableJob = (props) => {
    const aoClicar = (evento) => {
        evento.preventDefault()
        applyForJob(props.id);     
    }
    return(
        <div className="job">
            <h2>{props.title}</h2>
            <label>Description</label>
            <p>{props.description}</p>
            <label>Client</label>
            <p>{props.client}</p>
            <label>Budget</label>
            <p>{props.budget}</p>
            <button variant="primary" onClick={aoClicar}>
                Accept
            </button>
        </div>
    )
}

export default AvailableJob