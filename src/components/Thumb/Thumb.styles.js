import styled from 'styled-components';


export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const  MovieTitle = styled.div`
  color: var(--lightGrey);
  text-decoration: none;
  font-size: 17px
`
