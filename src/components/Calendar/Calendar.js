import React, {useMemo, useState} from 'react';
import {useTodoStateContext} from "../../state/TodoProvider";

import './index.scss'
import {getDaysInMonth} from "../../utils";
import Day from "../Day/Day";
import {months} from "../../constants";

const Calendar = () => {
    const [filterValue, setFilterValue] = useState("");
    const state = useTodoStateContext();
    const days = useMemo(() => getDaysInMonth(5, 2020),[]);
    const [daysArray, setDaysArray] = useState(days);
    const handleChange = e => {
        if(e.target.value){
            const filteredDays = [];
            for(let key in state.allTodoes){
                state.allTodoes[key].todoes.forEach(el => {
                    if(el.title.includes(e.target.value)){
                        const splitedKey = key.split('-')
                        filteredDays.push({day: splitedKey[0], month: splitedKey[1], year:splitedKey[2] });
                    }
                })
            }
            setDaysArray(filteredDays);
        }
        else {
            setDaysArray(days);
        }
        setFilterValue(e.target.value);

    }
    return (
        <div className="calendar">
            <div className="searchBar">
                <input type="text" value={filterValue} onChange={handleChange} className="searchInput" placeholder="Search" />
            </div>
            <div className="title">
                {months[5]} 2020
            </div>
            <div className="days">
                {
                    daysArray.length ?  daysArray.map(({day, month, year}) => {
                        return (<Day key={day} number={day} month={month} year={year} dayString={`${day}-${month}-${year}`}/>)
                    }) : null
                }
            </div>

        </div>
    );
};

export default Calendar;
