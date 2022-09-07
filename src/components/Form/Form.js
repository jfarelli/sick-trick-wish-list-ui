import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor(  ) {
        super(  )
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = ( e ) => {
        this.setState( { [ e.target.name ]: e.target.value } )
    }

    saveTrick = ( e ) => {
        e.preventDefault( );
        const newTrick = {
            id: Date.now( ),
            ...this.state
        }

        this.props.addTrick( newTrick )

        this.clearInputs( );
    }

    clearInputs = ( ) => {
        this.setState( { 
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
         } )
    }


    render( ) {
        
        return ( 
            <form className='form-container'>
                
                <select
                    name='stance'
                    value={ this.state.stance }
                    onChange={ this.handleChange }
                    >
                        <option disabled={ true } value=''>Select a Stance</option>
                        <option value="regular">Regular</option>
                        <option value="switch">Switch</option>
                    </select>

                <input
                    type='text'
                    name='name'
                    placeholder='Name of Trick'
                    value={ this.state.name }
                    onChange={ this.handleChange }
                    ></input>

                <select
                    name='obstacle'
                    value={ this.state.obstacle }
                    onChange={ this.handleChange }
                    >
                        <option disabled={ true } value=''>Select an Obstacle</option>
                        <option value="flatgroud">Flatgroud</option>
                        <option value="ledge">Ledge</option>
                        <option value="rail">Rail</option>
                        <option value="stairs">Stairs</option>
                        <option value="pool">Pool</option>
                    </select>

                <input
                    type='text'
                    name='tutorial'
                    placeholder='Link to Tutorial'
                    value={ this.state.tutorial }
                    onChange={ this.handleChange }
                    ></input>

                <button
                    onClick={ this.saveTrick }>Send It!</button>

            </form>
        )
    }

}


export default Form;