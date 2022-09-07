import { Component } from 'react';
import './App.css';
import fetchData from '../../apiCalls';
import Form from '../Form/Form'

import TrickCards from '../TrickCards/TrickCards';

class App extends Component {
  constructor( ) {
    super( )
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
      id: ''
    }
  }

  componentDidMount = ( ) => {
    fetchData( )
    .then( data => this.setState( { 
      stance: data.stance, 
      name: data.name, 
      obstacle: data.obstacle, 
      tutorial: data.tutorial, 
      id: data 
    } ) )
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>

        <Form />

        <TrickCards />

      </div>

    );
  }
}

export default App;