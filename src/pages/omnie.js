import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Omnie = ({ data }) => (
  <Layout>
    <Head pageTitle={data.omnieJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.omnieJson.content.childMarkdownRemark.html,
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
  query OmnieQuery {
    omnieJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
