//import everythig needed
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
//Export everything needed
export default logo;