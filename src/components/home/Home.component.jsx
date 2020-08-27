import React from 'react';

import Banner from '../banner/Banner.component';
import Card from '../card/Card.component';
import './Home.styles.scss';

function Home({ listings, searchDays, setSearchDays }) {
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
    <div className="home">
      <Banner searchDays={searchDays} setSearchDays={setSearchDays} />
      {generate_array(listings.length).map((segment) => {
        return (
          <div className="home__section" key={segment.id}>
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
    </div>
  );
}

export default Home;
