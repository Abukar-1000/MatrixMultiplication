import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Background from './Background/Background';
import Providers from './Providers';
import Matrix from './Components/Matrix/Matrix';
import config from "./Components/Matrix/Config";
import { Container, Stack } from '@mui/material';
import SolveButton from './Components/Matrix/SolveButton';

function App() {
  return (
    <Providers>

      <Box>
        <Background>
          <Container maxWidth="xl">
            <Stack
              gap={3}
            >
              <Matrix identifier={config.maxtrixA}/>
              <Matrix identifier={config.maxtrixB}/>
              <SolveButton />
              <Matrix identifier={config.maxtrixSolution}/>
            </Stack>
          </Container>
        </Background>
      </Box>

    </Providers>
  );
}

export default App;
