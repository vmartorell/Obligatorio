//importar todo lo necesario
import React from 'react';
import FleaLogo from './images/FleaLogo.png';

function  logo() {
    return (
        <div className= 'Home'>
            <header className= 'Home-content'> 
                <img src={FleaLogo} className='Home-logo' alt= 'Logo'/>
            </header>
        </div>
    );
}
//Exportar todo lo necesario
export default logo;