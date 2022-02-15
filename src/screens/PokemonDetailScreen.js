import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPokemonDetail } from '../actions/pokemonActions';
import { addToFavorite, removeFromFavorite } from '../actions/favoriteActions';

import { Container, Row, Col, Image } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import BtnFavorite from '../components/BtnFavorite';

const PokemonDetailScreen = ({ history, match }) => {
  const [isFavorite, setIsFavorite] = useState(null);
  const dispatch = useDispatch();

  const { loading, pokemon, error } = useSelector(
    (state) => state.pokemonDetail
  );

  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    const initialFav = favoriteItems.find((el) => el.id === pokemon.id);
    setIsFavorite(initialFav && true);
  }, [favoriteItems, pokemon.id]);

  useEffect(() => {
    dispatch(getPokemonDetail(match.params.id));
  }, [dispatch, match.params.id]);

  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(pokemon.id));
    } else {
      dispatch(removeFromFavorite(pokemon.id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container as="section" className="pkm-page-detail">
            <Row className="pkm-page-detail-navigator">
              <Link className="btn btn-outline-primary" to="/">
                Go Back
              </Link>
            </Row>

            <Row className="pkm-page-detail-title-container">
              <h2 className="pkm-page-detail-title">
                {pokemon.name &&
                  pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h2>
              <BtnFavorite
                lg
                isFavorite={isFavorite}
                onClick={handleFavorite}
              />
            </Row>

            <Row>
              {/* Image */}
              <Col md={6} className="pkm-page-detail-image">
                <Image
                  src={pokemon?.sprites?.other.home.front_default}
                  alt={pokemon.name}
                  fluid
                />
              </Col>

              {/* Description */}
              <Col md={6}>
                <div className="pkm-page-detail-description">
                  <div>
                    <div className="pkm-page-detail-description-item">
                      <h3>Height</h3>
                      <span>{Math.round(pokemon.height * 10) / 100} m</span>
                    </div>
                    <div className="pkm-page-detail-description-item">
                      <h3>Category</h3>
                    </div>
                    <div className="pkm-page-detail-description-item">
                      <h3>Weight</h3>
                      <span>{Math.round(pokemon.weight * 10) / 100} kg</span>
                    </div>
                  </div>

                  <div>
                    <div className="pkm-page-detail-description-item">
                      <h3>Ability</h3>
                      {pokemon?.abilities?.map((el) => (
                        <span key={el.slot} className="pkm-pokemon-type">
                          {el.ability.name}
                        </span>
                      ))}
                    </div>

                    <div className="pkm-page-detail-description-item">
                      <h3>Type</h3>
                      {pokemon?.types?.map((el) => (
                        <span key={el.type.name} className="pkm-pokemon-type">
                          {el.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default PokemonDetailScreen;
