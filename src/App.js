import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header.component';
import SearchPage from './page/search-page/SearchPage.component';
import HomePage from './page/home-page/HomePage.component';

import './App.scss';

import airbnb from './assets/airbnb';

function App() {
  const [listings, setListings] = useState([]);
  const [searchDays, setSearchDays] = useState(2);

  useEffect(() => {
    setListings(
      airbnb.records.map((record) => ({
        location: record.fields.smart_location,
        star: record.fields.review_scores_rating,

        imageUrl: record.fields.medium_url,
        price: record.fields.price,
        title: record.fields.name,
        description: record.fields.description,
        key: record.recordid,
      }))
    );
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage
              listings={listings}
              searchDays={searchDays}
              setSearchDays={setSearchDays}
            />
          </Route>

          <Route path="/" exact>
            <HomePage
              listings={listings}
              searchDays={searchDays}
              setSearchDays={setSearchDays}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
