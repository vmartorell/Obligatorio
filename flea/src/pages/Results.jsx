import React, {Component} from 'react';
import Category from '../components/Category';

function Results() {
    const [externalResult, changeState] = React.useState([]);
    React.useEffect(function () {
        fetch(`http://localhost:4000/session`)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJSON) {
            changeState(responseJSON[responseJSON.length -1]);
            
        });
        }, []);
    return (
        <div>
            <Category names= {externalResult.names} animals= {externalResult.animals} food={externalResult.food} country={externalResult.country} />
        </div>
    );
}
export default Results;