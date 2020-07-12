import React, {Component} from 'react';
import Button from './Button';
import ActiveBtn from './ActiveBtn';
import Counter from './Counter'

class Step2 extends Component{
    constructor(props) {
        super(props);
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    buildLetterButtons = () => {
        const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        const { selectedLetter, onChangeLetter } = this.props;

        return alphabet.map((letter, index) => {
            return (
                <ActiveBtn text={letter} onClick={onChangeLetter} key={index} active={selectedLetter === letter ? true : false}/>
            )
        })
    }

    render() {
/*         const {handleChange, text} = this.props; */
        return(
            <>
                <h2>Add some details and we're ready!</h2><br/>
                <div className= 'Categories'>
                    { this.buildLetterButtons() }
                </div>
                <div className= 'Counter'>
                <Counter name= 'Rounds'/>
                <Counter  name= 'Players'/>
                </div>

                <div className='Next' onClick={this.continue}>
                    <Button name= 'NEXT >'/>
                </div>
            </>
        );
    }
}
export default Step2;