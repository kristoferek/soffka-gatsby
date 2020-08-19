import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, problems, solutions, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{problems}</Copy>
      <Copy>{solutions}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  problems: PropTypes.arrayOf(PropTypes.string),
  solutions: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.object.isRequired,
};

export default Item;
