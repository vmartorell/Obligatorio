import React, {Component} from 'react';


class UserName extends Component{
    render(){
    const {handleChange} = this.props
        return(
            <input className = 'catField'
                type='text'
                onChange= {handleChange('name')}
                placeholder = 'Your Name!'
            />);
        }
}

export default UserName;