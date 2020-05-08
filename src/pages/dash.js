import React, { useState, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   Wrapper,
//   NavBar,
//   Button,
//   Title,
//   Subtitle,
//   Bar,
// } from './styles.js';
import { ThemeProvider } from 'styled-components';
import { MyGlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger';
import Menu from './components/Menu';
import { useOnClickOutside } from './hooks';


export default function Landing() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MyGlobalStyles />
        <div>
          <h1>DASHBOARD</h1>
          <img src="https://media.giphy.com/media/xTiTnwj1LUAw0RAfiU/giphy.gif" alt="animated burger" />
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        </div>
    </ThemeProvider>
  );
}