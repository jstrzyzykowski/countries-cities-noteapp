import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import GamePage from './pages/game/game.component';
import CategoriesPage from './pages/categories/categories.components';
import GameHistoryPage from './pages/game-history/game-history.components';
import GameHistoryDetailsPage from './pages/game-history-details/game-history-details.components';
import ModalManager from './modal/modal-manager.component';

import './App.scss';

function App() {
  return (
    <>
      <ModalManager />
      <div className="app">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new-game" component={GamePage} />
        <Route exact path="/new-game/history" component={GameHistoryPage} />
        <Route exact path="/new-game/history/:gameRoundNumber" component={GameHistoryDetailsPage} />
        <Route exact path="/categories" component={CategoriesPage} />
      </div>
    </>
  );
}

export default App;
