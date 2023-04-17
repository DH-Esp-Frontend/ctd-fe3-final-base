import React, {createContext} from 'react';


export const themes = {

  light: {
    font: 'black',
    background: 'white'
  },

  dark: {
    font: 'white',
    background: 'gray'
  }

 };

 const ThemeContext = createContext(themes.light);

 export default ThemeContext;

 

/*
export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {

function savetheme(theme) {
    localStorage.setItem('theme', theme);
}

function removeUserStorage() {
    localStorage.removeItem("theme");
  }

return(
    <ThemeContext.Provider
    value={{removeUserStorage, saveToken }}
    >
        {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;
*/