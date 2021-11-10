import React, {useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";

//useParams
export default function Deck() {
  const {deckId} = useParams()
  const [deck, setDeck] = useState([]);


  useEffect(() => {
    async function loadDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    loadDeck();
  }, [deckId]);


  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1"></span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <div>{deck.name}</div>
          </li>
        </ol>
      </nav>
      
    </div>
  );
}
