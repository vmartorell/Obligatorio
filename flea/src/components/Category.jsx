import React, {Component} from 'react';

function Category (props){
        return(
            <div>
              <div>
              <b>NAMES: </b><span>  {props.names}</span> <br/>
              <b>ANIMALS: </b><span> {props.animals}</span> <br/>
              <span><b>FOOD: </b>{props.food}</span> <br/>
              <span><b>COUNTRY</b>{props.country}</span> <br/>
              </div>
            </div> 
    );
}

export default Category;
