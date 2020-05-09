import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO
} from "./types";

const initialState = {
    allTodoes: {
    },
    count: 0,
    completed: 0,
};

const getInitialState = () => {
    return  JSON.parse(localStorage.getItem("todos")) || initialState
}


const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return action.newState;
        }
        case EDIT_TODO: {
            return action.newState
        }
        case DELETE_TODO: {
            return action.newState
        }
        default:
            return state;
    }
};

export { reducer, getInitialState };
