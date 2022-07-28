import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import { contextApi } from '../../App'
import { Container, Button, ButtonClick } from './styles';

export default function Header() {
  const {onToggleTheme, selectedTheme} = useContext(contextApi)
  const history = useHistory();
  console.log(history)

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>Fundamentos do React</h1>
      <ButtonClick onClick={handleNavigate}>
        Voltar para home
      </ButtonClick>
      <Button 
        type="button" 
        onClick={onToggleTheme}
        >
         {selectedTheme === 'dark' ? '🌞' : '🌚' }
        </Button>
  
    </Container>
  );
}