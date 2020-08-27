import React from 'react';
import TextTruncate from 'react-text-truncate';
import './Card.styles.scss';

function Card({ imageUrl, title, description, price }) {
  return (
    <div className="card">
      <img
        src={`${
          imageUrl ? imageUrl : require('../../assets/Not_available.jpg')
        }`}
        alt="house"
      />
      <div className="card__info">
        <h2 className="card__tile">{title}</h2>
        <TextTruncate
          className="card__description"
          line={5}
          element="h4"
          truncateText="..."
          text={description}
        />
        <h3 className="price">{price}</h3>
      </div>
    </div>
  );
}

export default Card;
