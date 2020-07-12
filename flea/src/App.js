import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Button from './components/Button';
import Flea from './components/images/Flea.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Wizard from './components/Wizard';
import Game from './pages/Game';
import Results from './pages/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLetter: '',
    }
  }

  handleSaveLetter = (e) => {
    const letter = e.target.value;
    this.setState({ selectedLetter: letter })
  }
  render() {
    const { selectedLetter } = this.state;

    return (
      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/'>
              <header className="App-header">
                <Logo />
                <img src={Flea} className='Flea-home' />
              </header>
              <p>
                Are you ready to be the next Flea! King? <br></br>
                Play with your friends easily and have fun.
              </p>
              <Link to="/settings" className="btn"><Button name='PLAY!' /></Link>
            </Route>
            <Route exact path='/settings'>
              <div className='smaller'>
                <Logo />
                <Wizard onChangeLetter={this.handleSaveLetter} selectedLetter={selectedLetter} />
              </div>
            </Route>
            <Route exact path='/game' >
              <div className='smaller'>
                <Logo />
                <Game selectedLetter={selectedLetter} />
              </div>
            </Route>
            <Route exact path='/results' >
              <div className='smaller'>
                <Logo />
                <Results />
              </div>
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
