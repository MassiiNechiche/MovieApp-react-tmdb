import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 35px;
  background-color: (--bg-color);

  h1 {
    color: var(--lightGrey);
    padding: 5px 0;
    margin-bottom: 30px;
    font-weight: 200;
    width: 191px;
    border-bottom: 1px solid white;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
