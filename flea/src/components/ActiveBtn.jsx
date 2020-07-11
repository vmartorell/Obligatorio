//importar todo lo necesario
import React, { Component } from 'react';

class ActiveBtn extends Component {

    render() {
        const { text, onClick, active } = this.props
        return (
            <button onClick={onClick} className={active ? 'ActiveBtn active' : 'ActiveBtn'} value={text}>
                {text}
            </button>
        );
    }
}

//Exportar todo lo necesario
export default ActiveBtn;