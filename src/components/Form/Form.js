import React from 'react';
import './Form.css'

class Form extends React.Component {
    constructor( ) {
        super( )
        this.state = {
            trick: '',
            tutorial: ''
        }
    }

    render( ) {
        return ( 
            <form>
                
                <select
                    name='stance-select'
                    // id={  }
                    >
                        <option disabled hidden selected>Select a Stance</option>
                        <option value="regular">Regular</option>
                        <option value="switch">Switch</option>
                    </select>

                <input
                    type='text'
                    name='trick'
                    placeholder='Name of Trick'
                    // value={  }
                    ></input>

                <select
                    name='obstacle-select'
                    // id={  }
                    >
                        <option disabled hidden selected>Select an Obstacle</option>
                        <option value="flatgroud">Flatgroud</option>
                        <option value="ledge">Ledge</option>
                        <option value="rail">Rail</option>
                        <option value="stairs">Stairs</option>
                        <option value="pool">Pool</option>
                    </select>

                <input
                    type='text'
                    name='trick'
                    placeholder='Link to Tutorial'
                    // value={  }
                    ></input>

                <button>Send It!</button>

            </form>
        )
    }

}


export default Form;