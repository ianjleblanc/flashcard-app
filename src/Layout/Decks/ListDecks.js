import React from 'react'
import DeckItem from './DeckItem'

export default function ListDecks({decks}) {
    
   
    const listItems = decks.map((deck) => <DeckItem deck={deck}/>)
    

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
        
    )
}
