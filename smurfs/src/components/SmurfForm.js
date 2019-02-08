import React from "react";

import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }

    addSmurf = ev => {
        ev.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: "",
            age: "",
            height: ""
        })
    }

    handleChanges = ev => {
        ev.preventDefault();
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                    <input
                        type="text"
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'          
                        name='age'
                        value={this.state.age}
                        placeholder='Age'
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'          
                        name='height'
                        value={this.state.height}
                        placeholder='Height'
                        onChange={this.handleChanges}
                    />
                    <button type ="submit">Add Smurf</button>
              </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addSmurf: state.addSmurf
    }
}

export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm)
