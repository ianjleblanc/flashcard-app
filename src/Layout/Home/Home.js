import React, {useState, useEffect} from 'react'
// import CreateDeck from './CreateDeck'
import { Link } from "react-router-dom"
import ListDecks from '../Decks/ListDecks'
import { listDecks } from '../../utils/api'

export default function Home() {
    const [decks, setDecks] = useState([]);
    // delete
    
    useEffect(() => {
        async function loadDecks() {           
                const loadedDecks = await listDecks();
                setDecks(loadedDecks);           
        }
        loadDecks()
    }, [])

    return (
        <div>
            <div> 
            <Link to="/decks/new" className="btn btn-secondary mb-2"><span className="oi oi-plus mr-1"></span>Create Deck</Link>
            </div>
            <div>

                <ListDecks decks={decks}/>
            </div>
        </div>
    )
}
