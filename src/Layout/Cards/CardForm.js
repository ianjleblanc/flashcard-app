import React from "react";
import { Link } from "react-router-dom";

export default function CardForm({
  onSubmit,
  formState,
  setFormState,
  onCancelUrl,
  onCancelLabel,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="card-front">Front</label>
        <textarea
          className="form-control mb-3"
          placeholder="Front side of card"
          type="text"
          name="card-front"
          id="card-front"
          value={formState.front}
          onChange={(evt) =>
            setFormState({ ...formState, front: evt.target.value })
          }
        ></textarea>
      </div>
      <div>
        <label htmlFor="card-back">Back</label>
        <textarea
          className="form-control mb-3"
          placeholder="Back side of card"
          type="text"
          name="card-back"
          id="card-back"
          value={formState.back}
          onChange={(evt) =>
            setFormState({ ...formState, back: evt.target.value })
          }
        ></textarea>
      </div>
      <div>
        <Link to={onCancelUrl}>
          <button className="btn btn-secondary" type="button">
            {onCancelLabel}
          </button>
        </Link>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
