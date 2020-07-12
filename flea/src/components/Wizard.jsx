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
//------------------------------------------------------
/**
 *      WIZARD LIFE CYCLE:
 *
 *  - Validate name is completed
 *  - Validate a letter is selected
 *  - Display the name
 */
//------------------------------------------------------

class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            //step 1
            name: '',
            //step 2
            selectedLetter: ''
            //step 3


        }
    }

    nextStep = () => {
        const { step } = this.state;
        switch (step) {
            case 1:
                if (step === 1) {
                    this.validate()

                }
            case 2:
                if (step === 2) {
                    this.validateLetter()
                }
            case 3:
                if (step === 3) {
                    return (
                        <Router>
                            <Switch>
                                <Route to='/game' />
                            </Switch>
                        </Router>
                    );
                }

        }
    };
    get nextStep() {
        return this._nextStep;
    }
    set nextStep(value) {
        this._nextStep = value;
    }
    /*     prevStep = () => {
            const { step } = this.state;
    
            this.setState({
                step: step - 1
            });
        } */
    validate = () => {
        const { step, name } = this.state;
        if (name.trim() === '') {
            alert('You have to add your name! -.-')

        }
        else {
            this.setState({
                step: step + 1
            });
        }
    }
    validateLetter = () => {
        const { step } = this.state;
        const { selectedLetter } = this.props;
        if (selectedLetter === '') {
            alert('-.-')
        }
        else {
            this.setState({
                step: step + 1
            });
        }
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


