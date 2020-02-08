import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error("error fetching smurf", err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: "error fetching smurf" })
        })
}

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURFS });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            dispatch({ type: ADD_SMURFS_SUCCESS, payload: smurf })
        })
        .catch(err => {
            console.log("error adding smurf", err)
            dispatch({ type: ADD_SMURFS_FAILURE, payload: "error adding smurf" })
        })
}