import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';



class App extends Component {
  

  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React YO</h1>
            <h2 style={{color:this.props.farbe}}>
            Das ist der aktuelle Zustand</h2>
            <button style={{margin: 20}}
            onClick={this.props.nameOffTheAction}
            >Ändere die Farbe mit Redux</button>
            <button style={{margin: 20}}
            onClick={this.props.nameOffTheActionZwei}
            >Ändere die Farbe mit Redux</button>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
  
        </div>
      );
    }
  }


  
   function mapStateToProps (state) {

    return {farbe: state.farbe}
}
export const AppContainer = connect(mapStateToProps, actionCreators)(App);

export default App;


  