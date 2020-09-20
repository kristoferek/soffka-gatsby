import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      min-width: 0;
      white-space: nowrap;
      text-overflow: ellipsis;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
