import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 3rem;
  padding: 0 2em;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 2rem;
  `};

  ${MEDIA.PHONE`
    grid-template-columns: repeat(1, 1fr);
  `};
`;
