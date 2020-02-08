import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, ADD_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                smurfs: []
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case FETCH_SMURFS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        case ADD_SMURFS:
            return {
                ...state,
                isPosting: true
            }
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isPosting: false
            }
        case ADD_SMURFS_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state
    }
}

