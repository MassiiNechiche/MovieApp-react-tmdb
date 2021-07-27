import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 250px;
  min-width: 200px;
  height: 45px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: 22px;
  margin: 40px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
