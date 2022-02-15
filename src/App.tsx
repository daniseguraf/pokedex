import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pkm-main-container">
        <Route path="/pokemon/:id" component={PokemonDetailScreen} />
        <Route path="/search/:keyword" component={HomeScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
