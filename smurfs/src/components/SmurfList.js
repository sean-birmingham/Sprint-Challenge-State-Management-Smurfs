import React, { useEffect } from "react";
import Smurf from "./Smurf";

import { connect } from "react-redux";
import { getData } from "../actions";

const SmurfList = props => {

    useEffect(() => {
        props.getData()
    }, [])

    return (
        <div>
            {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getData })(SmurfList);