import React from 'react';
import './index.scss'
import Button from "../../Button/Button";
import {useTodoDispatchContext} from "../../../state/TodoProvider";
import useInput from "../../../hooks/useInput";
import {addTodo} from "../../../state/actions";
import {months} from "../../../constants";

const AddTodo = ({hideModal, dayString, number, month, year}) => {
    const dispatch = useTodoDispatchContext();
    const [title, setTitle] = useInput("");
    const [description, setDescription] = useInput("");

    const addNewTodo = () => {
        dispatch(addTodo(dayString, title, description ));
        hideModal();
    }
    return (
        <div className="modal">
            <div className="content">
                <h3 className='titleText'>Add new Todo Item due to {number} {months[month]} {year} </h3>
                <input value={title} onChange={setTitle} type='text' className="title" placeholder="Title"/>
                <textarea value={description} onChange={setDescription} rows={5} className='description' placeholder="Description" />
                <Button className="addBtn" handleClick={addNewTodo} >ADD </Button>
                <Button className="cancelBtn" handleClick={hideModal}>Cancel</Button>
            </div>
        </div>
    );
};

export default AddTodo;
