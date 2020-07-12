import React, { Component } from 'react';
import Category from '../components/Category';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Results() {
    const [externalResult, changeState] = React.useState([]);
    React.useEffect(function () {
        fetch(`http://localhost:4000/session`)
            .then(function (response) {
                return response.json();
            })

            .then(function (responseJSON) {
                changeState(responseJSON[responseJSON.length - 1]);
            })
            ;
    }, []);
    return (
        <div className='resultData'>
            <h1>Your Results!</h1>
            <Category names={externalResult.names} animals={externalResult.animals} food={externalResult.food} country={externalResult.country} />
            <h2>You win because you are playing alone 😏</h2>
            <Link to="/" className="btn"><Button name='PLAY AGAIN!' /></Link>
        </div>
    );
}
export default Results;