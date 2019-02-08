import React from "react";

const Smurfs = props => {
    return (
        <div>
            <h1>{props.smurf.name} Smurf</h1>
            <p>Age: {props.smurf.age} years old</p>
            <p>Height {props.smurf.height}</p>
        </div>
    )
}

export default Smurfs;