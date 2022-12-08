import React, {useContext} from 'react';

import { Container } from './styles';
import { contextApi } from '../../App'

export default function Footer() {

  const {onToggleTheme, selectedTheme} = useContext(contextApi)

  return (
    <Container>
      <span>Fundamentos do React</span>
      <button 
        type="button" 
        onClick={onToggleTheme}
        >
         {selectedTheme === 'dark' ? '🌞' : '🌚' }
        </button>
    </Container>
  );
}