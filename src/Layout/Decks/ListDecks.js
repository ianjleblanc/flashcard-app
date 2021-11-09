import React, {useState} from 'react'
import { listDecks } from '../../utils/api'
import DeckItem from './DeckItem'

export default function ListDecks({decks}) {
    
    console.log(decks)
    const listItems = decks.map((deck) => <DeckItem deck={deck}/>)
    

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
        
    )
}
