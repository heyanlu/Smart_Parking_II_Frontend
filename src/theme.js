import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// // Define light theme
// export const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: 'rgb(64, 63, 63)',
//     },
//     secondary: {
//       main: '#B3B6F2',
//     },
//     text: {
//       primary: '#000',
//     },
//     background: {
//       default: '#ffffff',
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

// // Define dark theme
// export const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#333', 
//       light: 'lightblue' 
//     },
//     secondary: {
//       main: '#555', 
//       light: 'orange' 
//     },
//     text: {
//       primary: '#000',
//     },
//     background: {
//       default: '#121212', 
//       paper: '#1e1e1e', 
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });


export const theme = createTheme ({
  palette: {
    primary: {
      main: "#1760a5", 
      light: '#42a5f5',
    },
    secondary: {
      main: "#42a5f5", 
    },
    otherColor:{
      main: "#999",
    }
  }
})