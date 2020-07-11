//importar todo lo necesario
import React from 'react';
import FleaLogo from './images/FleaLogo.png';

function  logo(logoImg) {
    return (
        <div className= 'Home'>
            <header className= 'Home-content'> 
                <img src={FleaLogo} className='Home-logo' alt= 'Logo'/>
                <img className='Home-logo' src={logoImg} alt="" />
            </header>
        </div>
    );
}

//Exportar todo lo necesario
export default logo;