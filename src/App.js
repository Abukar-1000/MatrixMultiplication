import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Background from './Background/Background';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from "./Theme/darkTheme"

function App() {
  return (
    <ThemeProvider theme={darkTheme}>

      <Box>
        <Background></Background>
      </Box>

    </ThemeProvider>
  );
}

export default App;
