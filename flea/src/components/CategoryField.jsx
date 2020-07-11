import React, {Component} from 'react';

function CategoryField (props){
        return(
            <input className = 'catField'
                type='text'
                placeholder = {props.placeholder}
                onChange= {props.onChange}
                value = {props.value}
                
            />
    );
}

export default CategoryField;
