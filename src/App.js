import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from './components/Select'
import AnimalList from './containers/AnimalList'
import AnimalDetails from './containers/AnimalDetails'
// import AnimalInfo from './containers/AnimalInfo'
import AddAnimal from './containers/AddAnimal'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
          <div className="col-sm-4">
            <AnimalList/>
          </div>
          <div className="col-sm-3">
            <AnimalDetails />
          </div>
          <div className="col-sm-3">
            <AddAnimal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

