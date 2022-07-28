import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({theme}) => theme.spacing.large};
  border-radius: ${({theme}) => theme.borderRadius};
  
`;

export const Button = styled.button `
    font-size: ${({theme}) => theme.spacing.medium};
    cursor: pointer;
    cursor: pointer;
    background: transparent;
    border: none;
`

export const ButtonClick = styled.button`
background: ${({theme})=> theme.headerBackgroundColor};   
color: ${({theme}) => theme.textColor};
border-radius: ${({theme}) => theme.spacing.small} ;

:hover {
  opacity: 0.9;
  background: ${({theme})=> theme.headerBackgroundColor};
  transition: 500ms
}
`
