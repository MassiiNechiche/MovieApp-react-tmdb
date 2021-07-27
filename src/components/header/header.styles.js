import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position : absolute;
  z-index: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 96%;
  padding: 13px 0;
  margin: 0 auto;
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
