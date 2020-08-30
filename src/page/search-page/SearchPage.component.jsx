import React from 'react';

import { Button } from '@material-ui/core';
import SearchResult from '../../components/search-result/SearchResult.component';
import Footer from '../../components/footer/Footer.component';

import './SearchPage.styles.scss';

function SearchPage({ listings, searchDays }) {
  console.log(searchDays);
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays 26 august to 30 august 2 guest</p>
        <h1>Stays nearby</h1>

        <Button variant="outlined"> Cancellation Flexibility</Button>
        <Button variant="outlined"> Type of place</Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> Rooms and Beds</Button>
        <Button variant="outlined"> More Filters</Button>
      </div>
      {listings.map((listing) => (
        <SearchResult {...listing} searchDays={searchDays} />
      ))}
      <Footer />
    </div>
  );
}

export default SearchPage;
