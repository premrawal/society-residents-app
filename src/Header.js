import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Bliss</h1>
                </header>
                <p className="App-intro">
                This app will help manage the Bliss society residents information.
                </p>
        </div>
       );      
    }

}

export default Header;