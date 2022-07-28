import styled from 'styled-components';


export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${({theme}) => theme.spacing.large};
  border-radius: ${({theme}) => theme.borderRadius};
  justify-content: space-between;
  margin-top: ${({theme}) => theme.spacing.large};
  position: absolute;
  min-width: 97%;
  bottom: 1rem ;
  

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
