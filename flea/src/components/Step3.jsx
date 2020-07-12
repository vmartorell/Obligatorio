import React, { Component } from 'react';
import Button from './Button';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Spinner from './images/spinner.svg';
import Tick from './images/tick.svg';

class Step3 extends Component {
    render() {
        const { name } = this.props
        return (
            <>
                <h2>Neat! Now share the link with your friends and when they´re ready, play!</h2>
                <input className='catField' type='text' value='https://flethebestgame.com/linktoplay/copysend/stuff1' />
                <div className='Name'>
                    <ul className='players'>
                        <li>
                            <img src={Tick} className='tick' />
                            <h3>{name} is ready!</h3>
                        </li>
                        <li>
                            <img src={Spinner} className='spinner' />
                            <p>Nobody else is joining 😔</p>
                        </li>
                    </ul>

                </div>
                <div className= 'gamelink'>
                    <h1>Let's Start!</h1>
                    <Link to='/game' className='play'><Button name='Game!' /></Link>
                </div>

            </>
        );
    }
}
export default Step3;