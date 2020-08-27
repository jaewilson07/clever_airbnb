import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';

import './Search.styles.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Search({ searchDays, setSearchDays }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <div className="search__container">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
          Number of Guests
          <PeopleIcon />
        </h2>
        <input
          type="number"
          min={0}
          defaultValue={searchDays}
          onChange={(event) => setSearchDays(event.target.value)}
        />
        <Button
          className="search__button"
          onClick={() => history.push('search')}
        >
          Search AirBnb
        </Button>
      </div>
    </div>
  );
}

export default Search;
