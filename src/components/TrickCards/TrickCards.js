import './TrickCards.css'

const TrickCards = ( { stance, name, obstacle, tutorial, id } ) => {

    return (
        <div className='trick-card'>
            <p>{ `${ stance } ${ name }` }</p>
            <p>Obstacle: { obstacle }</p>
            <p>Link to Tutorial:</p>
            <a href={ tutorial }>{ tutorial }</a>
        </div>
    )
}


export default TrickCards;