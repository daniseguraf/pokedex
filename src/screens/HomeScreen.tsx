import React, { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokemonByName } from '../actions/pokemonActions';

import { Container } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Search from '../components/Search';
import Filters from '../components/Filters';
import Pokedex from '../components/Pokedex';
import PokemonCard from '../components/PokemonCard';

interface Aaa {
  loading: boolean;
  error: string;
  pokemons: [];
}

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const pokemonList = useSelector((state: Aaa) => state.pokemonList);
  const pokemonSearch = useSelector((state) => state.pokemonSearch);

  const { loading, error, pokemons } = pokemonList;

  useEffect(() => {
    if (!!keyword) {
      dispatch(getPokemonByName(keyword));
      return;
    }

    dispatch(getPokemonByName(''));
    dispatch(getPokemons());
  }, [dispatch, keyword]);

  return (
    <>
      {loading || pokemonSearch.loading ? (
        <Loader />
      ) : error || pokemonSearch.error ? (
        <Container as="section">
          <Message variant="danger">
            {`${pokemonSearch.error}. `}
            <Link to="/">Volver a Inicio</Link>
          </Message>
        </Container>
      ) : (
        <>
          <Route render={({ history }) => <Search history={history} />} />
          {pokemonSearch.pokemon.name ? (
            <Container as="section">
              <div className="pkm-grid">
                <PokemonCard {...pokemonSearch.pokemon} />
              </div>
            </Container>
          ) : (
            <>
              <Filters />
              <Pokedex pokemons={pokemons} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
