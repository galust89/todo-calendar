import React, {useState, memo, useMemo} from 'react';
import { Link } from "react-router-dom";
import './index.scss'
import {useTodoStateContext} from "../../state/TodoProvider";


const Day = ({number, dayString, month, year}) => {

    const {allTodoes} = useTodoStateContext();
    const [showTodoes, setShowTodoes] = useState(false);
    const dayTodoes = useMemo(() => allTodoes[dayString], [dayString, allTodoes])

    const handleHover = () => {
        setShowTodoes(prevState => !prevState);
    }

    return (
        <Link to={{
            pathname: "/day",
            state: {number, month, year, dayTodoes, dayString}
        }}
              className={`day ${!!dayTodoes ? 'lightskyblue' : null}`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}>
            <div className="number">
                {number}
            </div>
            {
                !!dayTodoes && showTodoes && <div className="todoesContainer">
                    {`${dayTodoes.todoes.length} to-do item ${dayTodoes.todoes.length > 1 ? 's' : ''} ${dayTodoes.todoes.length - dayTodoes.completedTodoesCount} of which is incomplete` }
                </div>
            }
        </Link>
    );
};

export default memo(Day);
