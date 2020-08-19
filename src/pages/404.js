import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
import { Link } from '@reach/router';

const NotFound = () => (
  <Layout>
    <Box>
      Upss. Coś poszło nie tak.
      <br />
      <Link to={'/'}>Przejdź do strony głównej</Link>
    </Box>
  </Layout>
);

export default NotFound;
