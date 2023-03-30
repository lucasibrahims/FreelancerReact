import Rating from "../Rating"
import "./AvailableFreelancer.css"

const AvailableFreelancer= (props) => {

    return(
        <div className="freelancer">
            <h2>{props.name}</h2>
            <label>Skills</label>
            <p>{props.skills}</p>
            <label>Experience</label>
            <p>{props.experience}</p>
            <label>Portfolio</label>
            <p>{props.portfolio}</p>
            <label>Rating</label>
            <p>{props.rating}</p>
            <Rating address={props.address}/>

        </div>
    )
}

export default AvailableFreelancer