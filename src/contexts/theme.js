import React, { useState, createContext, useContext, useCallback } from 'react';

function ThemeProvider(props) {
  const [ dark, setDark ] = useState(false);

  const toggleTheme = useCallback((e) => {
    setDark(e.value);
  }, []);
  
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }} {...props} />
  );
}

const ThemeContext = createContext({});
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme }
