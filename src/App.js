import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Background from './Background/Background';
import Providers from './Providers';
import Matrix from './Components/Matrix/Matrix';
import config from "./Components/Matrix/Config";
import { Stack } from '@mui/material';

function App() {
  return (
    <Providers>

      <Box>
        <Background></Background>
        <Stack
          gap={1}
        >
          <Matrix identifier={config.maxtrixA}/>
          <Matrix identifier={config.maxtrixB}/>
        </Stack>
      </Box>

    </Providers>
  );
}

export default App;
