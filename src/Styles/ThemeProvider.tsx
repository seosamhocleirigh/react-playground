import * as React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

export const ThemeProvider = ({children}) => {
    return <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
};