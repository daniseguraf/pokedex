import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './../actions/pokemonActions';

const Pagination = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemonList);

  const handleOnLeftClick = () => {
    setPage((currentValue) => currentValue - 1);
  };
  const handleonRightClick = () => {
    setPage((currentValue) => currentValue + 1);
  };

  useEffect(() => {
    dispatch(getPokemons(20, page * 20));
  }, [page, dispatch]);

  return (
    <div className="pkm-pagination">
      <button className="btn" onClick={handleOnLeftClick} disabled={page === 0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="200 208 120 128 200 48"
            fill="none"
            stroke={page === 0 ? '#9c9c9c' : '#505050'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></polyline>
          <polyline
            points="120 208 40 128 120 48"
            fill="none"
            stroke={page === 0 ? '#9c9c9c' : '#505050'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></polyline>
        </svg>
      </button>
      <div>
        {page + 1} of {Math.round(pokemonList.count / 20)}
      </div>
      <button
        className="btn"
        onClick={handleonRightClick}
        disabled={page === 55}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <polyline
            points="56 48 136 128 56 208"
            fill="none"
            stroke={page === 55 ? '#9c9c9c' : '#505050'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></polyline>
          <polyline
            points="136 48 216 128 136 208"
            fill="none"
            stroke={page === 55 ? '#9c9c9c' : '#505050'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          ></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
