import React from "react";
import { Link } from "react-router-dom";
import HandleDeleteDeck from "../Decks/HandleDeleteDeck";
import { useHistory } from "react-router";

export default function CardListItem({ card }) {
  const history = useHistory();

  return (
    <li>
      <div className="card">
        <div className="row">
          <div className="col">{card.front}</div>
          <div className="col">{card.back}</div>
        </div>
        <div>
        <button
            onClick={(event) => {
              event.preventDefault();
              HandleDeleteDeck(card.id);
              history.go(0);
            }}
            className="btn btn-danger float-right m-1"
          >
            <span className="oi oi-trash"></span>
          </button>
          <Link
            to={`/decks/${card.deckId}/cards/${card.id}/edit`}
            className="btn btn-secondary m-1 float-right"
          >
            <span className="oi oi-pencil mr-1"></span>
            Edit
          </Link>
          
        </div>
      </div>
    </li>
  );
}
