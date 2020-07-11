import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            //step 1
            name: ''
            //step 2
            //step 3
        }
    }

    nextStep = () => {
        const { step } = this.state;
        if (step === 3) {
            return (
                <Router>
                    <Switch>
                        <Route to='/game' />
                    </Switch>
                </Router>
            );
        }
        else {
            this.setState({
                step: step + 1
            });
        }
    };
    get nextStep() {
        return this._nextStep;
    }
    set nextStep(value) {
        this._nextStep = value;
    }
    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    showStep = () => {
        const { onChangeLetter, selectedLetter } = this.props;
        const { step, name } = this.state;

        switch (step) {
            case 2:
                return (
                    <Step2
                        handleChange={this.handleChange}
                        onChangeLetter={onChangeLetter}
                        selectedLetter={selectedLetter}
                        nextStep={this.nextStep}
                    />);
            case 3:
                return (
                    <Step3
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        selectedLetter={selectedLetter}
                        name={name}
                    />);
            default:
                return (
                    <Step1
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                    />);
        }
    }

    getSteps = () => [1, 2, 3].map(index => (<li className={this.state.step === index ? "active" : ""} key={'li' + index}>Step {index}</li>));

    render() {
        const { step } = this.state;
        return (
            <>
                <div className='container'>
                    <ul className='progressbar'>
                        {this.getSteps()}
                    </ul>
        </div>
                <h2 className='Steps'>Step {step} of 3.</h2>
                {this.showStep()}

            </>
        );


    }
}
export default Wizard;


