import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {createDeck} from "../../utils/api";

export default function CreateDeck() {
  const history = useHistory();
  const [deckName, setDeckName] = useState('');
  const [deckDescription, setDeckDescription] = useState('');

  const newDeck = { name: deckName, description: deckDescription }  

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const nameChangeHandler = (event) => setDeckName(event.target.value)
  const descriptionChangeHandler = (event) => setDeckDescription(event.target.value)


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createDeck(newDeck)
    history.push(`/decks/${response.id}`);
  };

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home mr-1"></span>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h1>Create Deck</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="name" className="w-100 form-label">
            <p className="mb-1">Name</p>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Deck Name"
              onChange={nameChangeHandler}
              value={deckName}
            ></input>
            <p className="mb-1 mt-3">Description</p>
            <textarea
              className="form-control"
              id="name"
              name="name"
              placeholder="Brief description of the deck"
              onChange={descriptionChangeHandler}
              value={deckDescription}
            ></textarea>
            <button onClick={handleCancel} className="btn btn-secondary mt-3">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary ml-1 mt-3">Submit</button>
            
          </label>
        </form>
      </div>
    </div>
  );
}
