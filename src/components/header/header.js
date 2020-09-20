import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Title from 'components/title';
import Nav from 'components/header/nav';
import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const MobileTitle = styled(Title)`
  display: none;
  margin-right: 1rem;
  ${MEDIA.DESKTOP`
    display: inherit;
  `};
`;

const DesktopTitle = styled(Title)`
  display: inherit;
  margin-right: 1rem;
  ${MEDIA.DESKTOP`
    display: none;
  `};
`;

const Header = ({ title, mobileTitle }) => {
  return (
    <AnimatedContainer>
      <Container>
        <Link to="/">
          <DesktopTitle as="h1">{title}</DesktopTitle>
          <MobileTitle as="h1">{mobileTitle}</MobileTitle>
        </Link>

        <Nav />
      </Container>
    </AnimatedContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  mobileTitle: PropTypes.string,
};

export default Header;
