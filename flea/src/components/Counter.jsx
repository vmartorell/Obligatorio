import React, {Component} from 'react';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name:''
    };
  }

  // funtions

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset() {
    this.setState({
      count: 0
    });
  };

  render() {
    return (

   <div>
        <p><b>Number of {this.props.name}</b> </p>
        <button className='inc ActiveBtn' onClick={(e) => this.increment(e)}>+</button>
        {this.state.count}
        <button className='dec ActiveBtn' onClick={(e) => this.decrement(e)}>-</button><br/>
        <button className='reset ActiveBtn' onClick={(e) => this.reset(e)}>Reset</button>
  </div>
    );
  }
};

export default Counter;