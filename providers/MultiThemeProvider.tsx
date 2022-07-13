import {ThemeProvider} from "styled-components";
import {createContext, useContext, useState} from "react";

export interface MyTheme {
  background: string;
  color: string;
}

const light: MyTheme = {
  background: '#ccc',
  color: '#333'
};

const dark: MyTheme = {
  background: '#333',
  color: '#ccc'
};

const ThemeContext = createContext({theme: 'light', setTheme: null});
export const useTheme = () => useContext(ThemeContext);

const MultiThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme == 'light' ? light : dark}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
};

export default MultiThemeProvider;
