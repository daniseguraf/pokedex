import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions/favoriteActions';

import { Link } from 'react-router-dom';
import BtnFavorite from './BtnFavorite';

const PokemonCard = ({ id, sprites, name, order, types }) => {
  const [isFavorite, setIsFavorite] = useState(null);

  const dispatch = useDispatch();
  const { favoriteItems } = useSelector((state) => state.favorite);

  useEffect(() => {
    const initialFav = favoriteItems.find((el) => el.id === id);
    setIsFavorite(initialFav && true);
  }, [favoriteItems, id]);

  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };

  return (
    <article className="pkm-grid-item">
      <div className="pkm-grid-item-header">
        <Link to={`/pokemon/${id}`}>
          <div className="pkm-pokemon-order">#{id}</div>
          <img
            className="img-fluid pkm-grid-item-header-img"
            src={sprites.other.home.front_default}
            alt={capitalizedName}
          />
        </Link>
      </div>

      <div className="pkm-grid-item-body">
        <div className="pkm-grid-item-title-container">
          <Link to={`/pokemon/${id}`}>
            <h3>{capitalizedName}</h3>
          </Link>
          <BtnFavorite isFavorite={isFavorite} onClick={handleFavorite} />
        </div>
        <div className="pkm-grid-item-types-container">
          {types.map((el) => (
            <span key={el.type.name} className="pkm-pokemon-type">
              {el.type.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PokemonCard;
