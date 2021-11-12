import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../../utils/api";
import CardForm from "./CardForm";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditCard() {
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});
  const [formState, setFormState] = useState({});

  const history = useHistory();


  useEffect(() => {
    // get the deck information passing in deckId
    async function getDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    getDeck();

    // get the card information passing in cardId
    async function getCard() {
      const loadedCard = await readCard(cardId);
      setCard(loadedCard);
    }
    getCard();
    // everytime deckId or cardId changes re-render
  }, [deckId, cardId]);

  useEffect(() => {
    setFormState({
      ...card,
      front: card.front,
      back: card.back,
    });
  }, [card]);

  async function handleEditCard(event) {
    event.preventDefault();
    await updateCard(formState);
    // brings back to deck page after save button pressed
    history.push(`/decks/${deckId}`);
  }

  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <span className="oi oi-home mr-1"></span>Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {card.id}
            </li>
          </ol>
        </nav>
      </div>

      <div>
        <CardForm
          onSubmit={handleEditCard}
          formState={formState}
          setFormState={setFormState}
          onCancelUrl={`/decks/${deckId}`}
          onCancelLabel="Cancel"
        />
      </div>
    </div>
  );
}
