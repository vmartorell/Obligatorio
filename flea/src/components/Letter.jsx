//importar todo lo necesario
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

//Exportar todo lo necesario
export default Letter;