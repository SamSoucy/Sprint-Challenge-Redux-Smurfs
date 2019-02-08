import React from "react";
import Smurfs from "./Smurfs"

const SmurfsList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurfs key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

export default SmurfsList;