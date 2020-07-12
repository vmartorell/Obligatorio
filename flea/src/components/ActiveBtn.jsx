//import everythig needed
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

//Export everything needed
export default ActiveBtn;