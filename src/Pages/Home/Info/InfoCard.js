import React from 'react';

const InfoCard = ({ img, tittle, bgColor }) => {
  return (
    <div className={`card lg:card-side bg-accent px-5 text-white shadow-xl ${bgColor}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{tittle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;