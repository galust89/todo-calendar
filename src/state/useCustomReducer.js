import { useReducer, useRef, useMemo, useCallback } from "react";

const useCustomReducer = (reducer, intialState, enableLogger) => {
    const [state, dispatch] = useReducer(reducer, intialState);
    const preState = useRef();

    const disPatchWithLogging = useCallback((action) => {
        if (typeof action === "function") {
            return action(disPatchWithLogging, preState.current.state);
        }
        const actionType = typeof action === "object" ? action.type : action;
        preState.current.actions = preState.current.actions || [];
        preState.current.actions.push({ actionType, action });

        dispatch(action);
    }, []);

    const customDispatch = enableLogger ? disPatchWithLogging : dispatch;

    useMemo(() => {
        if (!enableLogger || !preState.current) return;

        for (let i = 0; i < preState.current.actions.length; i++) {
            const { actionType, action } = preState.current.actions[i];
            console.groupCollapsed(`${actionType}`);
            console.log("%c Previous State", "color: red;", preState.current.state);
            console.log("%c Action", "color: blue;", action);
            console.log("%c Current State", "color: green;", state);
            console.groupEnd();
        }
        preState.current.actions = [];
    }, [state, enableLogger]);

    preState.current = { ...preState.current, state };

    return [state, customDispatch];
};

export default useCustomReducer;
