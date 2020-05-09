import React, { useContext, createContext } from "react";
import { reducer, getInitialState } from "./reducer";
import useCustomReducer from "./useCustomReducer";

const TodoStateProvider = createContext();
const TodoDispatchProvider = createContext();


const TodoProvider = ({ children }) => {
    const [state, dispatch] = useCustomReducer(reducer, getInitialState(), true);

    return (
        <TodoStateProvider.Provider value={state}>
            <TodoDispatchProvider.Provider value={dispatch}>
                {children}
            </TodoDispatchProvider.Provider>
        </TodoStateProvider.Provider>
    );
};

const useTodoStateContext = () => {
    const context = useContext(TodoStateProvider);
    if (!context) {
        throw new Error(
            "useTodoStateContext must be used within a TodoProvider"
        );
    }
    return context;
};

const useTodoDispatchContext = () => {
    const context = useContext(TodoDispatchProvider);
    if (!context) {
        throw new Error(
            "useTodoDispatchContext must be used within a TodoProvider"
        );
    }
    return context;
};

export {
    useTodoStateContext,
    useTodoDispatchContext,
};

export default TodoProvider;
