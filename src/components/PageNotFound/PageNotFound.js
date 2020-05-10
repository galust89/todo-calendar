import React from 'react';
import {useHistory} from 'react-router-dom'
import './index.scss'
import Button from "../Button/Button";

const PageNotFound = () => {
    const history = useHistory();

    const backToMainPage = () => {
        history.push("/")
    }

    return (
        <div className="notFound">
            <div>This page does not exist</div>
            <Button handleClick={backToMainPage}>Back to main page</Button>
        </div>
    );
};

export default PageNotFound;
