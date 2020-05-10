import React from 'react';
import {useLocation} from 'react-router-dom'
import PageNotFound from "./PageNotFound/PageNotFound";
import Todoes from "./Todoes/Todoes";

const WrappedPage = () => {
    const {state} = useLocation();
    if(!state) {
        return <PageNotFound/>
    }
    return <Todoes state={state}/>
};

export default WrappedPage;
