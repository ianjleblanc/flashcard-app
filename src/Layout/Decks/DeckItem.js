import React from "react";
import { Link, useHistory } from "react-router-dom";
import HandleDeleteDeck from "./HandleDeleteDeck";

export default function DeckItem({ deck }) {
  const history = useHistory();
  
  return (
    <li key={deck.id} className="card">
    <div>
    <div className="row">
      <h4 className="card-title col m-2">{deck.name}</h4>
      <div className="float-right mt-2 pr-4"><p>{deck.cards.length} cards</p></div>
    </div>
    <div>
      <p className="card-text m-2">{deck.description}</p>
    </div>
    <div className="row">
      <div className="col">
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary m-2">
          <span className="oi oi-eye mr-1"></span>
          View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary m-2">
          <span className="oi oi-book mr-1"></span>
          Study
        </Link>
        <button onClick={(event) => {
          event.preventDefault();
          HandleDeleteDeck(deck.id);
          history.go(0)
        }} className="btn btn-danger float-right m-2">
          <span className="oi oi-trash"></span>
        </button>
      </div>
    </div>
    </div>
  </li>
    
  );
}
