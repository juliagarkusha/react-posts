import React, { createContext } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useLocalStorage from "../../hooks/useLocalStorage";

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
const STORAGE_THEME_KEY = "theme";

const defaultValue = {
  theme: LIGHT_THEME,
}

export const Theme = createContext(defaultValue);

const ThemeProvider = (props) => {
  const {
    children
  } = props;

  const [ mode, setMode ] = useLocalStorage(STORAGE_THEME_KEY, DARK_THEME);

  const onToggleTheme = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
      },
    }), []);

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode,
        secondary: {
          main: '#F1F1F1',
          dark: '#223333',
          light: '#F1F1F1',
        },
        text: {
          main: '#ffffff',
          light: '#ffffff',
          dark: '#000000',
        }
      },
    }), [mode],
  );

  return (
    <Theme.Provider
      value={{
        mode,
        onToggleTheme
      }}
    >
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </Theme.Provider>
  )
}

export default ThemeProvider;
