import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Card({ cards = [] }) {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardFront, setCardFront] = useState(true);
  const history = useHistory();

  if (cards.length <= 2) {
    return (
      <div>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards
        </p>
      </div>
    );
  }

  const cardState = cardFront
    ? cards[currentCard].front
    : cards[currentCard].back;

  function flipBtnHandler(event) {
    event.preventDefault();
    setCardFront(!cardFront);
  }

  // cardFront && 


  function nextBtnHandler(event) {
    event.preventDefault();
    
    if (currentCard + 1 < cards.length) {
      setCurrentCard(currentCard + 1);
    }
    else {
      window.confirm("Restart cards?\nClick 'cancel' to return to the home page")
        ? history.go(0)
        : history.push("/");
    }
    setCardFront(true)
    // add 1 to currentCard on click and render next card
    // if currentCard > cards.length show restart prompt
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{`Card ${currentCard + 1} of ${
          cards.length
        }`}</h4>
        <p>{cardState}</p>
        <Link onClick={flipBtnHandler} className="btn btn-secondary">
          Flip
        </Link>
        { !cardFront && <button onClick={nextBtnHandler} className="btn btn-primary ml-2">
          Next
        </button>}
      </div>
    </div>
  );
}
