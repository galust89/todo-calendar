import React, {memo} from 'react';
import Button from "../Button/Button";
import './index.scss'
import {useTodoDispatchContext} from "../../state/TodoProvider";
import {deleteTodo, editTodo} from "../../state/actions";

const Todo = ({id, title, description, completed, dayString}) => {
    const dispatch = useTodoDispatchContext();

    const removeTodo = () => {
        dispatch(deleteTodo(dayString, id))
    }

    const completeTodo = () => {
       dispatch(editTodo(dayString, id ))
    }

    return (
        <>
            <div className='item'>
                <h3>{title}</h3>
                {description}
            </div>
            <div className='item'>
                {completed ? "Completed" : "Incompleted"}
            </div>
            <div className='item'>
                <Button handleClick={removeTodo} className="remove"> Remove </Button>
                {!completed &&  <Button handleClick={completeTodo} className="done"> Mark as Completed </Button>}
            </div>
        </>);
};

export default memo(Todo);
