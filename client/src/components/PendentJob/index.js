import "./PendentJob.css"
import { completeJob } from "../../functions/CompleteJob"

const PendentJob = (props) => {
    const aoClicar = (evento) => {
        evento.preventDefault()
        completeJob(props.id + 1);     
    }
    return(
        <div className="pendent-job">
            <h2>{props.title}</h2>
            <label>Description</label>
            <p>{props.description}</p>
            <label>Client</label>
            <p>{props.client}</p>
            <button variant="primary" onClick={aoClicar}>
                Completed
            </button>
        </div>
    )
}

export default PendentJob