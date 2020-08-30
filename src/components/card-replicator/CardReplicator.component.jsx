import React from 'react';

import './CardReplicator.styles.scss';

import Card from '../card/Card.component';
import Footer from '../../components/footer/Footer.component';

function CardReplicator({ listings }) {
  const generate_array = (length) => {
    const items = 3;
    let total = 0;
    const segments = [];
    let i = 1;
    do {
      let segment = {
        id: i,
        start: total,
        end: total + items - 1,
      };

      segments.push(segment);
      total = total + items;
      i = i + 1;
    } while (total <= length);
    return segments;
  };

  return (
    <div className="cardReplicator">
      <div className="cardReplicator__img" />

      {generate_array(listings.length).map((segment) => {
        return (
          <div className="section" key={segment.id}>
            {listings
              .filter(
                (record, index) =>
                  index >= segment.start && index <= segment.end
              )
              .map((record, index) => (
                <Card {...record} key={index} />
              ))}
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default CardReplicator;
