//External deps
import React, { useEffect } from "react";
import { StyledEngineProvider } from '@mui/material/styles';

//Internal deps
import PostsProvider from "../../../context/Posts";
import Router from "../../../routes/Router";
import ThemeProvider from "../../../context/Theme";

//Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-crud-app';
  }, []);

  return (
    <ThemeProvider>
      <StyledEngineProvider injectFirst>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
