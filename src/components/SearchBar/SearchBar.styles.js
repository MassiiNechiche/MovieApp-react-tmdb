import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: (--bg-color);
  padding: 0 20px;
  z-index: 5;


`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 400px;
  height: 40px;
  background: #121013;
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

 

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 15px;
  }

  input {
    font-size: 20px;
    position: absolute;
    left: 0;
    padding: 0 0 0 50px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }
  }
`;
