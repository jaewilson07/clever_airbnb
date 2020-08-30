import React from 'react';
import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import './SearchResult.styles.scss';

function SearchResult({
  imageUrl,
  location,
  title,
  description,
  star,
  price,
  searchDays,
}) {
  return (
    <div className="searchResult">
      <img
        src={`${
          imageUrl ? imageUrl : require('../../assets/Not_available.jpg')
        }`}
        alt="house"
      />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <div className="searchResult__heading">
            <div className="heading__left">
              <p>{location}</p>
              <h3>{title}</h3>
            </div>
            <div className="heading__right">
              <FavoriteBorderIcon className="searchResult__heart" />
            </div>
          </div>
          <p>____</p>
          <TextTruncate
            className="searchResult__description"
            line={2}
            element="p"
            truncateText="..."
            text={description}
          />
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            {star && <StarIcon className="searchResult__starIcon" />}
            <strong>
              {star ? ((star * 4) / 100).toFixed(2) : 'No Ratings'}
            </strong>
          </div>
          <div className="searchResult__price">
            <h2>{`$${price}/night`}</h2>
            <p>{`$${price * searchDays} total`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
