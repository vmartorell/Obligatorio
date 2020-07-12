import React, {Component} from 'react';
import Button from './Button';
import CategoryField from './CategoryField';
import ActiveBtn from './ActiveBtn';
import UserName from './UserName';

class Step1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {handleChange, name} = this.props;
        return(
            <>
                <h3>First, tell us your name and choose the categories.</h3><br/>
                <h3>If we are not cool enought yo you, u can make your own categories...</h3>
                <div>
                <UserName 
                    handleChange = {handleChange} 
                    name = {name}
                />
                </div>
                <div className= 'Categories'>
                    <ActiveBtn text= 'Countries'/>
                    <ActiveBtn text= 'Colors'/>
                    <ActiveBtn text= 'Names'/>
                    <ActiveBtn text= 'Animals'/>
                    <ActiveBtn text= 'Foods'/>
                </div>
                <div className='Next' onClick={this.continue}>
                    <Button name= 'NEXT >'/>
                </div>
            </>
        );
    }
}
export default Step1;
