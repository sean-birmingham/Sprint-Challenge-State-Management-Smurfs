import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = event => {
        setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const smurfId = {
            ...newSmurf,
            id: Date.now()
        }
        props.addSmurf(smurfId)
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} />
                <label>Age: </label>
                <input type="text" name="age" onChange={handleChange} />
                <label>Height: </label>
                <input type="text" name="height" onChange={handleChange} />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default connect(null, { addSmurf })(SmurfForm);