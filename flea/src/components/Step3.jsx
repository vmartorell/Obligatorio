import React, { Component } from 'react';
import Button from './Button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Step3 extends Component {
    render() {
        const { name } = this.props
        return (
            <>
                <h2>Neat! Now share the link with your friends and when they´re ready, play!</h2>
                Let's Start!
                <h3>{name}</h3>
                <button >
                    <Link to="/game" className="play"><Button name='Game!'/></Link>
                </button>

            </>
        );
    }
}
export default Step3;