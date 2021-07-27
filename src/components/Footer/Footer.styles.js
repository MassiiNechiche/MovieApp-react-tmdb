import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #0F0F0F;
  width: 100%;
  height: auto;
  z-index: 0;
  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 96%;
  margin: 0 auto;
  padding: 30px 0px;

  span{
      color: var(--lightGrey);
      max-width: 600px;
  }
`;

export const LogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
