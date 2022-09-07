import './TrickCardHolder.css'
import TrickCards from '../TrickCards/TrickCards'

const TrickCardHolder = ( { tricks } ) => {
// console.log('TRICKS: ', tricks)
    const trickCard = tricks.map( trick => {
        // console.log('TRICK: ', trick)
        return (
            <TrickCards
                stance={ trick.stance } 
                name={ trick.name }
                obstacle={ trick.obstacle }
                tutorial={ trick.tutorial }
                id={ trick.id }
                key={ trick.id }/>
        )
    } )

    return (
        
        <div className='trick-card-container'>
            { trickCard }
        </div>
    )
}


export default TrickCardHolder;