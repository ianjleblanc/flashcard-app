import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Study from "./Decks/Study";
import CreateDeck from "./Decks/CreateDeck";
import Deck from "./Home/Deck";

function Layout() {
  

  return (
    <>
      <Header />
      <div className="container">
        
        <Switch>
          <Route  exact path="/" >
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck  />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
                   
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
