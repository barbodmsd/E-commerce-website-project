import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Button, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const { theme } = props
  return (
    <>
      <AppBar sx={{
        bgcolor: 'transparent',
        boxShadow: 'none'
      }}>
        <Stack direction={'row'} height={'60px'} justifyContent={'space-between'} alignItems={'center'}
          sx={{
            px: '50px',
            backdropFilter: 'blur(2px)'
          }} >
          <Stack alignItems={'center'} justifyContent={'center'} gap={'12px'} direction={'row'}>
            <Link to={'/'} ><img height='90px' width='100px' src={'src/assets/logo.png'} alt={'logo'} /></Link>
            <Stack alignItems={'center'} justifyContent={'center'} sx={{
              width: '30px',
              height: '30px',
              borderRadius: '10px',
              boxShadow: theme == 'light' ? '0 1px 2px 1px rgba(0,0,0,0.3)' : '0 1px 2px 1px rgba(0,0,0,.8)',
            }}>
              <Link  to={'/products/all-products/all-categories'}>
                
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Divider />

      </AppBar >

      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
