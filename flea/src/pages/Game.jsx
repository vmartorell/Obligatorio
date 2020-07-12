import React, {Component} from 'react';
import Button from '../components/Button';
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    useHistory
  } from "react-router-dom";
import CategoryField from '../components/CategoryField';

function Game({selectedLetter}) {
    const [fieldValue, editField] = React.useState({
        id:"",
        names: "",
        animals: "",
        food: "",
        country:"",
    });  
    let history = useHistory();
	const sendFlea = function (e) {
        e.preventDefault();
        return(
			fetch(`http://localhost:4000/session`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
                body: JSON.stringify(fieldValue),
        })
        .then(() => {history.push('/Results')})
      )
  }; 
	const handleChangeNames = function (e) {
		editField({ ...fieldValue, names: e.target.value });
  };
    const handleChangeAnimals = function(e){
        editField({...fieldValue, animals: e.target.value});
    }
    const handleChangeFood = function(e){
        editField({...fieldValue, food: e.target.value});
    }
    const handleChangeCountry = function(e){
        editField({...fieldValue, country: e.target.value});
    }
    
	return (
		<div>
            <h3>LETTER: </h3> 
               <div className = 'selectedLetter'>
                <h2>{selectedLetter}</h2>
                </div> 

            <h3>NAMES: </h3> 
            <CategoryField onChange= {handleChangeNames} value={fieldValue.names}/>
            <h3>ANIMALS: </h3> 
            <CategoryField onChange= {handleChangeAnimals} value={fieldValue.animals}/>
            <h3>FOOD: </h3> 
            <CategoryField  onChange= {handleChangeFood} value={fieldValue.food}/>
            <h3>COUNTRY: </h3> 
            <CategoryField  onChange= {handleChangeCountry} value={fieldValue.country}/>
            <div onClick= {sendFlea} >{/* <Link  to="/results" className="btn" ></Link> */}
            <Button  name='FLEA!'/> 
            </div>
		</div>
    );}
    
export default Game;
