import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';



const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      secondary: {
        main: teal["A400"]
      }
    },
});

export default darkTheme;