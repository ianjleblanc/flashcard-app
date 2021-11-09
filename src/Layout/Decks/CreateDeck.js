import React from "react";
import { Link, useHistory } from "react-router-dom";


export default function CreateDeck() {
  const history = useHistory();   

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
        <label htmlFor="name" className="w-100 form-label">
          <p className="mb-1">Name</p>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Deck Name"
          ></input>
          <p className="mb-1 mt-3">Description</p>
          <textarea
            className="form-control"
            id="name"
            name="name"
            placeholder="Brief description of the deck"
          ></textarea>
        </label>
      </div>
      
      <button onClick={(e) => {
          e.preventDefault();
          history.push("/");}
          }className="btn btn-secondary">Cancel</button>
      <button className="btn btn-primary ml-2">Submit</button>
    </div>
  );
}
