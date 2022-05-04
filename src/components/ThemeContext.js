


import {createContext, useContext} from 'react';


export const ThemeProvider= createContext({});


export const useThemeConsumer= () => useContext(ThemeProvider);