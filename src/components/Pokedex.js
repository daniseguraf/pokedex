import React from 'react';
import { Container } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

const Pokedex = ({ pokemons }) => {
  return (
    <Container as="section">
      <div className="pkm-grid">
        {pokemons.map((el) => (
          <PokemonCard key={el.name} {...el} />
        ))}
      </div>
    </Container>
  );
};

export default Pokedex;
