//import everythig needed
import React, { Component } from 'react';

class Letter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { selectedLetter } = this.props
        return (
            <div>
            {
                selectedLetter
            }
            </div>

        );
    }
}

//Export everything needed
export default Letter;