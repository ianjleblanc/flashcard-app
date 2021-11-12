import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "../Cards/StudyCard";

export default function Study() {
  const [deck, setDeck] = useState([]);
  const {deckId} = useParams();
  

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
            <Link to="/"><span className="oi oi-home mr-1"></span>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <div>
          <h2>
              Study: {deck.name}
          </h2>
      </div>     
        <StudyCard cards={deck.cards}/>      
    </div>
  );
}
