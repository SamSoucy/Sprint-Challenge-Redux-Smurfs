import React from "react";

const Smurfs = props => {
    return (
        <div>
            <h1>{props.smurf.name}</h1>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurfs;