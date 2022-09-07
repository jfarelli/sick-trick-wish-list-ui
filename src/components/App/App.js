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

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>

        <Form />

        {/* <TrickCards /> */}
        <TrickCardHolder
          tricks={ this.state.tricks }/>

      </div>

    );
  }
}

export default App;