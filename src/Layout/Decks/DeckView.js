import React from "react";
import { Link } from "react-router-dom";
import HandleDeleteDeck from "./HandleDeleteDeck";
import { useHistory } from "react-router";

export default function DeckView({ deck }) {
  const history = useHistory();

  return (
    <div>
      <div>
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <div className="row">
          <div className="col">
            {/* edit link path */}
            <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary m-1">
              <span className="oi oi-pencil mr-1"></span>
              Edit
            </Link>
            {/* edit link path */}
            <Link
              to={`/decks/${deck.id}/study`}
              className="btn btn-primary m-1"
            >
              <span className="oi oi-book mr-1"></span>
              Study
            </Link>
            {/* edit link path */}
            <Link
              to={`/decks/${deck.id}/cards/new`}
              className="btn btn-primary m-1"
            >
              <span className="oi oi-plus mr-1"></span>
              Add Cards
            </Link>
            <button
              onClick={(event) => {
                event.preventDefault();
                HandleDeleteDeck(deck.id);
                history.go(0);
              }}
              className="btn btn-danger float-right m-1"
            >
              <span className="oi oi-trash"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
