import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Header.styles.scss';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
          className="header__icon"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
