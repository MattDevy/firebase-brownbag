import { combineReducers } from "redux";

const exampleReducer = (state = null, { type }) => {
    switch(type) {
        default:
            return state
    }
}

const reducers = {
    example: exampleReducer,
}

export default combineReducers(reducers)