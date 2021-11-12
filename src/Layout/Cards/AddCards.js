import React, { useState, useEffect } from "react";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";
import { useParams, Link } from "react-router-dom";

const INITIAL_FORM_STATE = {
  front: "",
  back: "",
};

export default function AddCards() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [formState, setFormState] = useState({ ...INITIAL_FORM_STATE });

  useEffect(() => {
    async function getDeck() {
      const loadedDeck = await readDeck(deckId);
      setDeck(loadedDeck);
    }
    getDeck();
  }, [deckId]);

  async function handleAddCard(event) {
    event.preventDefault();
    await createCard(deckId, { front: formState.front, back: formState.back });
    setFormState({ ...INITIAL_FORM_STATE });
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
              Add Card
            </li>
          </ol>
        </nav>
      </div>
      <header>
        <h1>{deck.name}: Add card</h1>
      </header>

      <CardForm
        onSubmit={handleAddCard}
        formState={formState}
        setFormState={setFormState}
        onCancelUrl={`/decks/${deckId}`}
        onCancelLabel="Done"
      />
    </div>
  );
}
