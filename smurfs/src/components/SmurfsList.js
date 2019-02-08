import React from "react";
import Smurfs from "./Smurfs"

const SmurfsList = props => {
    return (
        <div className="list">
            {props.smurfs.map(smurf => {
                return <Smurfs key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

export default SmurfsList;