import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
import HomeRounded from '@material-ui/icons/HomeRounded';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">
          <HomeRounded />
        </Link>
      </li>
      <li>
        <Link to="/omnie">O mnie</Link>
      </li>
      <li>
        <a href="/kontakt">Kontakt</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
