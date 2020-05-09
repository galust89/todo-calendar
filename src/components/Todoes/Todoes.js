import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'

import "./index.scss"
import Todo from "../Todo/Todo";
import Button from "../Button/Button";
import AddTodo from "../Modals/AddTodo/AddTodo";
import {useTodoStateContext} from "../../state/TodoProvider";
import {months} from "../../constants";

const Todoes = () => {
    const location = useLocation();
    const state = useTodoStateContext();
    const [showAddNewTodoModal, setShowAddNewTodoModal] = useState(false);

    if(!location.state){
        return<div>Empty</div>
    }

    const {number, month, year, dayString } = location.state;
    const todoes = state.allTodoes[dayString] ? state.allTodoes[dayString].todoes : [];

    const openModal = () => {
        setShowAddNewTodoModal(true)
    }
    const hideModal = () => {
        setShowAddNewTodoModal(false)
    }

    return (
        <div className='todoes'>
            {showAddNewTodoModal && <AddTodo hideModal={hideModal} {...location.state}/>}
             <div className='header'>
                 <div className="title">
                     To-do list due to {number} {months[month]} {year}
                 </div>
                 <Button className="addTodoBtn" handleClick={openModal}>
                     Add new To do
                 </Button>
             </div>
            <div className="todo-table">
                  <div className='item'>To do item</div>
                  <div className='item'>Status</div>
                  <div className='item'>Action</div>
                  {
                    todoes.map(item => <Todo key={item.id} {...item} dayString={dayString}/>)
                  }
            </div>
        </div>
    );
};

export default Todoes;
