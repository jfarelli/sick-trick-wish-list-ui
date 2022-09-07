import { Component } from 'react';
import './App.css';
import fetchData from '../../apiCalls';
import Form from '../Form/Form'

import TrickCards from '../TrickCards/TrickCards';
import TrickCardHolder from '../TrickCardHolder/TrickCardHolder';

class App extends Component {
  constructor( ) {
    super( )
    this.state = {
      tricks: [ ] 
    }
  }


  componentDidMount = ( ) => {
    fetchData( )
    .then( data => this.setState( { tricks: data } ) )
  }

  addTrick = ( newTrick ) => {
    this.setState( { tricks: [ ...this.state.tricks, newTrick ] } )
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>

        <Form 
          addTrick={ this.addTrick }/>

        <TrickCardHolder
          tricks={ this.state.tricks }/>

      </div>

    );
  }
}

export default App;