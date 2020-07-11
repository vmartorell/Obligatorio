import React, {Component} from 'react';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
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
        <p>testo{this.state.count}</p>
        <button className='inc' onClick={(e) => this.increment(e)}>+</button>
        <button className='dec' onClick={(e) => this.decrement(e)}>-</button>
        <button className='reset' onClick={(e) => this.reset(e)}>Reset</button>
  </div>
    );
  }
};

export default Counter;