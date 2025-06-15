import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Background from './Background/Background';
import Providers from './Providers';
import Matrix from './Components/Matrix/Matrix';

function App() {
  return (
    <Providers>

      <Box>
        <Background></Background>
        <Matrix />
      </Box>

    </Providers>
  );
}

export default App;
