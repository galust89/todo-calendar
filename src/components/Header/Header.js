import React from 'react';
import {useTodoStateContext} from "../../state/TodoProvider";
import './index.scss'

const Header = () => {
    const {count, completed} = useTodoStateContext()
    return (
        <div className="main-header">
            <h3>Header</h3>
            <div className="count-info">{count} To do items {count - completed} of which is incomplete</div>
        </div>
    );
};

export default Header;
