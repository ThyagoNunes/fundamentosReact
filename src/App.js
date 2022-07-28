import React, { useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components'; 
import { usePersistedState } from './utils/usePersistedState';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes';
export const contextApi = createContext();

function App() {
  const [ theme, setTheme ] = usePersistedState('theme', 'dark')
  

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark // acessar os valores do objeto
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark'
       ? 'light'
       : 'dark'
    ))
  }
  
  return (
    <contextApi.Provider value={{
      onToggleTheme:handleToggleTheme,
      selectedTheme:theme
    }}>
    <ThemeProvider 
      theme={currentTheme}
    >    
      <GlobalStyle />
      <Layout />   
    </ThemeProvider>
    </contextApi.Provider>
  );
};

export default App;
