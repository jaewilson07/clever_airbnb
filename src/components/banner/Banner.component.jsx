import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import Search from '../search/Search.component';
import './Banner.styles.scss';

function Banner({ searchDays, setSearchDays }) {
  const [showSearch, setShowSearch] = useState(true);

  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          {showSearch ? 'Search Dates' : 'Hide'}
        </Button>
        {!showSearch && (
          <Search searchDays={searchDays} setSearchDays={setSearchDays} />
        )}
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button
          onClick={() => {
            history.push('/search');
          }}
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
