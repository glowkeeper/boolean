import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';

let theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: [
      'Barlow',
      'Lato',
      'sans-serif',
      'Arial',
      'Roboto',
      '-apple-system',
    ].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: '30px',
      fontWeight: 700,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    h2: {
      fontSize: '2.7vh',
      fontWeight: 600,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    h3: {
      fontSize: '2.5vh',
      fontWeight: 500,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    h4: {
      fontSize: '2.4vh',
      fontWeight: 400,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    h5: {
      fontSize: '2.3vh',
      fontWeight: 400,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    h6: {
      fontSize: '2.2vh',
      fontWeight: 400,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    subtitle1: {
      fontSize: '2.1vh',
      fontWeight: 400,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      lineHeight: '1.5em',
      color: '#000000',
    },
    subtitle2: {
      fontSize: '2.1vh',
      fontWeight: 400,
      fontFamily: '"Barlow", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    body1: {
      fontSize: '2vh',
      fontWeight: 400,
      fontFamily: '"Lato", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    body2: {
      fontSize: '2vh',
      fontWeight: 400,
      fontFamily: '"Lato", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
    caption: {
      fontSize: '1.9vh',
      fontWeight: 400,
      fontFamily: '"Lato", "Arial", "sans-serif", "Roboto"',
      color: orange[900],
    },
    button: {
      fontSize: '2vh',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontFamily: '"Lato", "Arial", "sans-serif", "Roboto"',
      color: '#000000',
    },
  },
  palette: {
    type: 'dark',
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    primary: {
      main: '#929396',
    },
    secondary: {
      main: '#ff671e',
    },
    error: red,
    warning: orange,
    info: yellow,
    success: green,
  },
});

theme = responsiveFontSizes(theme);
theme.spacing(4);

const themeStyles = makeStyles({
  root: {
    background: 'linear-gradient(#FFFFFF, #FFFFFF)',
    color: theme.palette.text.primary,
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  content: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(32),
    marginRight: theme.spacing(32),
    color: theme.palette.text.primary,
    background: 'linear-gradient(#FFFFFF, #FFFFFF)',
    overflow: 'auto',
    width: '100vw',
  },
});

export {theme, themeStyles};
