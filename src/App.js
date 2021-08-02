import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import GamePage from './pages/game/game.component';
import CategoriesPage from './pages/categories/categories.components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/new-game" component={GamePage} />
      <Route exact path="/categories" component={CategoriesPage} />
    </div>
  );
}

export default App;
