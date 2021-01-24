import React from 'react';
import { Menu, MenuItem, Button, Fade, Link as MaterialLink, Box, CssBaseline, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from './Styles/ThemeProvider';
import Home from './Components/Home/Home';
import DraggableThings from './Components/DraggableThings/DraggableThings';

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider>
        <Paper>
          <Box component="div">
            
              <Button variant="contained" color="primary" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Nav
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MaterialLink href={"/"}>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </MaterialLink>
                <MaterialLink href={"/draggablethings"}>
                  <MenuItem onClick={handleClose}>Draggable Things</MenuItem>
                </MaterialLink>
                <MenuItem onClick={handleClose}>Coming soon...</MenuItem>
              </Menu>
              
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/draggablethings" component={DraggableThings} />
              </Switch>

          </Box>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
