import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./types";
import {uuid} from "uuidv4";

export const addTodo = (key, title, description ) => (dispatch, state) => {
    const id = uuid();
    let newState = null;
    if(state.allTodoes[key]){
        newState = {
            ...state,
            count: state.count + 1,
            allTodoes: {...state.allTodoes,
                 [key]: {...state.allTodoes[key],
                    todoes: [...state.allTodoes[key].todoes, {id, title, description, completed: false}]
                 }
            }
        }
    }
    else {
        newState = {
            ...state,
            count: state.count + 1,
            allTodoes: {...state.allTodoes, [key]:{
                    completedTodoesCount: 0,
                    todoes: [{id, title, description, completed: false}]} }
        }
    }
    localStorage.setItem("todos", JSON.stringify(newState));

    dispatch({type: ADD_TODO, newState})
};

export const deleteTodo = (key, id, completed) => (dispatch, state) => {

     const completedTodoesCount = state.allTodoes[key].completedTodoesCount;
     const innerCount = completed ? completedTodoesCount : completedTodoesCount -1;
     const todoes = [...state.allTodoes[key].todoes.filter(el => el.id !== id)];
     let allTodoes = null;
     if(!todoes.length){
         allTodoes = {...state.allTodoes}
         delete allTodoes[key];
     }
     else {
         allTodoes = {...state.allTodoes, [key] : {...state.allTodoes[key], completedTodoesCount: innerCount, todoes}}
     }

     const newState = {
         ...state,
         count: state.count - 1,
         completed: completed ? state.completed : state.completed -1,
         allTodoes,
     }
    localStorage.setItem("todos", JSON.stringify(newState));
    dispatch({type: DELETE_TODO, newState })
};

export const editTodo = (key, id ) => (dispatch, state) => {
    const todoes = state.allTodoes[key].todoes.map(el => {
        if(el.id === id) {
            el.completed = true;
            return el
        }
        return el
    })
    const completedTodoesCount = state.allTodoes[key].completedTodoesCount + 1;
    const newState = {
        ...state,
        completed: ++state.completed,
        allTodoes: {...state.allTodoes, [key] : {...state.allTodoes[key],
                completedTodoesCount,
                todoes}},
    }

    localStorage.setItem("todos", JSON.stringify(newState));
    dispatch({type: EDIT_TODO, newState})
};
