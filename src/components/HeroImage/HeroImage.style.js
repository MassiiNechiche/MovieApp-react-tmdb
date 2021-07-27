import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0.04)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,1.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  height: 800px;
  position: relative;
  animation: animateHeroimage 1s;
  z-index: -1;

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: 98%;
  margin: 0 auto;

  span{ 
    font-size: 70px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    sup{
      font-size: 25px;
      margin-left: 10px;
      color: #b2b1b9;
    }
  }

  h2{
    color: #eb232b;
    font-size: 32px;
    sup{
      color: white;
      font-size: 18px;
    }

    i{
      font-size: 22px
    }
  }
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 140px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: 4rem;

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);
  
    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
