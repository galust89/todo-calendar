import React, {useCallback, useMemo, useState} from 'react';
import {useHistory} from 'react-router-dom'

import "./index.scss"
import Todo from "../Todo/Todo";
import Button from "../Button/Button";
import AddTodo from "../Modals/AddTodo/AddTodo";
import {useTodoStateContext} from "../../state/TodoProvider";
import {months} from "../../constants";

const Todoes = ({state}) => {
    const history = useHistory();
    const {allTodoes} = useTodoStateContext();
    const [showAddNewTodoModal, setShowAddNewTodoModal] = useState(false);
    const {number, month, year, dayString } = useMemo(() => state, [state]) ;
    const todoes = useMemo(() => allTodoes[dayString] ? allTodoes[dayString].todoes : [], [allTodoes, dayString])


    const openModal = useCallback(() => {
        setShowAddNewTodoModal(true)
    },[]);

    const hideModal = useCallback(() => {
        setShowAddNewTodoModal(false)
    },[]);

    const backToMainPage = useCallback(() => {
        history.push("/");
    },[])

    return (
        <div className='todoes'>
            {showAddNewTodoModal && <AddTodo hideModal={hideModal} {...state}/>}
             <div className='header'>
                 <div className="title">
                     To-do list due to {number} {months[month]} {year}
                 </div>
                 <Button className="addTodoBtn" handleClick={openModal}>
                     Add new To do
                 </Button>
                 <Button handleClick={backToMainPage}>Back to main page</Button>
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
