import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import { updateDeck } from "../../utils/api";


export default function EditDeck() {
  // const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  const history = useHistory();
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const upDeck = { name: deckName, description: deckDescription, id: deckId };

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/decks/${deckId}`);
  };
    useEffect(() => {
      async function loadDeck() {
        const loadedDeck = await readDeck(deckId);
        // console.log("loadedDeck", loadedDeck)
        
        // setDeck(loadedDeck);
        
        setDeckName(loadedDeck.name)
        setDeckDescription(loadedDeck.description)
      }
      loadDeck();
    }, []);


    const nameChangeHandler = (event) => 
    setDeckName(event.target.value);
  
  const descriptionChangeHandler = (event) =>
    setDeckDescription(event.target.value);


  



  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateDeck(upDeck);
    history.push(`/decks/${response.id}`);
  };

  console.log(deckName, deckDescription) 

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
              <Link to={`/decks/${deckId}`}>{deckName}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h2>Edit Deck</h2>
      </div>
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
          <button type="submit" className="btn btn-primary ml-1 mt-3">
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
