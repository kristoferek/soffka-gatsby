import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Title from '../components/title/title';

const Omnie = ({ data }) => (
  <Layout>
    <Head pageTitle={data.kontaktJson.title} />
    <Box>
      <Title>{data.kontaktJson.title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data.kontaktJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Omnie.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Omnie;

export const query = graphql`
  query KontaktQuery {
    kontaktJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
