//importar todo lo necesario
import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function btn(text) {
    return (
        <div className= 'button'>
        {text.name}
        </div>
    );
}

//Exportar todo lo necesario
export default btn;



