import React from 'react';

const BtnFavorite = ({ isFavorite, lg, qty, onClick }) => {
  return (
    <button className="btn pkm-btn-favorite" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={lg ? '38' : '26'}
        height={lg ? '38' : '26'}
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <path
          d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
          fill={isFavorite ? '#ff5757' : '#d9d9d9'}
          stroke={isFavorite ? '#ff5757' : '#d9d9d9'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </svg>
      {+qty > 0 && <div className="pkm-btn-favorite-qty">{qty}</div>}
    </button>
  );
};

export default BtnFavorite;
