import React from 'react';

import {
  BannerSearch,
  BannerInfo,
} from '../../components/banner/Banner.component';
import CardReplicator from '../../components/card-replicator/CardReplicator.component';

import './HomePage.styles.scss';

function HomePage({ searchDays, setSearchDays, listings }) {
  return (
    <div className="homepage">
      <BannerSearch searchDays={searchDays} setSearchDays={setSearchDays} />
      <BannerInfo />

      <CardReplicator
        listings={listings}
        searchDays={searchDays}
        setSearchDays={setSearchDays}
      />
    </div>
  );
}

export default HomePage;
