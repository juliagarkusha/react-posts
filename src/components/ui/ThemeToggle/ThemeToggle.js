import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Box from "@mui/material/Box";
import useTheme from "../../../hooks/useTheme";

const ThemeToggle = () => {
 const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        pr: 3
      }}
    >
      {theme.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={theme.onToggleTheme.toggleColorMode}>
        {theme.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default ThemeToggle;
