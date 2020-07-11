import React, { Component } from 'react';
import Button from './Button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Step3 extends Component {
/*     continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }; */
    render() {
        /* const {handleChange} = this.props; */
        const { name } = this.props
        return (
            <>
                <h2>Neat! Now share the link with your friends and when they´re ready, play!</h2>
                Let's Start!
                <h3>{name}</h3>
                <button /* onClick={this.continue} */ >
                    <Link to="/game" className="play"><Button name='Game!'/></Link>
                </button>

            </>
        );
    }
}
export default Step3;